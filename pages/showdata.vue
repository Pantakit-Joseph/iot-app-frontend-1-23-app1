<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :sort-by="[{ key: 'id', order: 'asc' }]"
    class="elevation-1"
  >
    <template #top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>ข้อมูลสมาชิก</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template #activator="{ props }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="props"
            >
              เพิ่มสมาชิก
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.username"
                      label="Username"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.password"
                      label="Password"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.dep"
                      label="Department"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">
              คุณแน่ใจหรือว่าต้องการลบสมาชิกนี้หรือไม่?
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">
                ยกเลิก
              </v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">
                ตกลง
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template #[`item.actions`]="{ item }">
      <!-- <v-icon
        size="small"
        class="me-2"
        color="warning"
        @click="editItem(item.raw)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        size="small"
        color="error"
        @click="deleteItem(item.raw)"
      >
        mdi-delete
      </v-icon> -->
      <v-btn
        size="small"
        class="me-2"
        variant="text"
        icon="mdi-pencil"
        color="amber"
        @click="editItem(item.raw)"
      ></v-btn>
      <v-btn
        size="small"
        variant="text"
        icon="mdi-delete"
        color="red"
        @click="deleteItem(item.raw)"
      ></v-btn>
    </template>
    <template #no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
  <v-dialog
    v-model="alert"
    width="500"
  >
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        {{ alertTitle }}
      </v-card-title>

      <v-card-text>
        {{ alertMessage }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          block
          ref="alertCloseBtn"
          @click="closeAlert"
        >
          ตกลง
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    alert: false,
    alertTitle: '',
    alertMessage: '',
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        title: 'ID',
        align: 'start',
        key: 'id',
      },
      { title: 'Username', key: 'username' },
      { title: 'Password', key: 'password' },
      { title: 'Department', key: 'dep' },
      { title: 'Actions', key: 'actions', sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      username: '',
      password: '',
      dep: '',
    },
    defaultItem: {
      username: '',
      password: '',
      dep: '',
    },
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'เพิ่มสมาชิก' : 'แก้ไขสมาชิก'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  mounted() {
    this.initialize()
  },
  methods: {
    async initialize () {
      const res = await this.$api('/list')
      const data = res.data
      this.desserts = data.data || []
    },

    editItem (item) {
      console.log(item)
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    async deleteItemConfirm () {
      const res = await this.$api.get(`/delete?id=${this.editedItem.id}`)
      const data = res.data
      this.alert = true
      const index = this.editedIndex
      this.closeDelete()
      if (data.ok !== 1) {
        this.openAlert('สถานะการลบข้อมูล', 'ลบไม่สําเร็จ')
        console.log('ลบไม่สําเร็จ res=>', res)
        return
      }
      this.openAlert('สถานะการลบข้อมูล', 'ลบสําเร็จ')
      this.desserts.splice(index, 1)
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    async save () {
      if (this.editedIndex > -1) {
        await this.doEdit()
      } else {
        await this.doInsert()
      }
      this.close()
    },
    async doInsert () {
      const res = await this.$api.post('/add', {
        username: this.editedItem.username,
        password: this.editedItem.password,
        dep: this.editedItem.dep,
      })
      const data = res.data
      this.alert = true
      if (data.ok !== 1) {
        this.openAlert('สถานะการบันทึกข้อมูล', 'บันทึกไม่สําเร็จ')
        console.log('บันทึกไม่สําเร็จ res=>', res)
        return
      }
      this.openAlert('สถานะการบันทึกข้อมูล', 'บันทึกสําเร็จ')
      this.desserts.push({
        id: data.ids,
        ...this.editedItem,
      })
    },
    async doEdit () {
      const res = await this.$api.get('/update' +
      '?id=' + this.editedItem.id +
      '&username=' + this.editedItem.username +
      '&password=' + this.editedItem.password +
      '&dep=' + this.editedItem.dep,
      )
      const data = res.data
      if (data.ok !== 1) {
        this.openAlert('สถานะการแก้ไขข้อมูล', 'แก้ไขไม่สําเร็จ')
        return
      }
      this.openAlert('สถานะการแก้ไขข้อมูล', 'แก้ไขสําเร็จ')
      Object.assign(this.desserts[this.editedIndex], this.editedItem)
    },
    openAlert (title, message) {
      this.close()
      this.alert = true
      this.alertTitle = title
      this.alertMessage = message

      setTimeout(() => {
        this.$nextTick(() => {
          this.$refs.alertCloseBtn.$el.focus()
        })
      })
    },
    closeAlert () {
      this.alert = false
      this.alertTitle = ''
      this.alertMessage = ''
    },
  },
}
</script>
