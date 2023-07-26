<template>
  <h1>Member List</h1>
  <v-btn color="primary" @click="doList">
    List
  </v-btn>
  <v-table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Password</th>
        <th>dep</th>
        <th colspan="2">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.username }}</td>
        <td>{{ item.password }}</td>
        <td>{{ item.dep }}</td>
        <td>
          <v-icon
            @click="editItem(item.id)"
            aria-hidden="false"
          >
            mdi-pencil
          </v-icon>
        </td>
        <td>
          <v-icon
            @click="deleteConfirm(item.id)"
            aria-hidden="false"
          >
            mdi-delete
          </v-icon>
        </td>
      </tr>
    </tbody>
  </v-table>
  <v-dialog
    v-model="dialog"
    width="500"
  >
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        {{ dialogTitle }}
      </v-card-title>

      <v-card-text>
        {{ dialogMessage }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          ref="btnDialogClose"
          color="primary"
          text
          @click="closeDialog()"
        >
          ปิด
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog
    v-model="dialogConfirm"
    width="500"
  >
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        ยืนยันการลบ
      </v-card-title>

      <v-card-text>
        คุณต้องการลบข้อมูลนี้หรือไม่
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="error"
          text
          @click="deleteItem()"
        >
          ลบ
        </v-btn>
        <v-btn
          ref="btnCloseConfirm"
          color="secondary"
          text
          @click="confirmId = null; dialogConfirm = false"
        >
          ปิด
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  setup() {
    const config = useRuntimeConfig().public
    return {
      config,
      confirmId: null,
    }
  },
  data() {
    return {
      dialogConfirm: false,
      dialog: false,
      dialogMessage: '',
      dialogTitle: '',
      name: 'alongkorn',
      age: 50,
      items: [],
    }
  },
  methods: {
    closeDialog() {
      this.dialog = false
      this.dialogMessage = ''
      this.dialogTitle = ''
      this.dialogConfirm = false
      this.confirmId = null
    },
    async doList() {
      console.log(this.config)
      const url = this.config.apiBaseUrl + '/list'
      const res = await fetch(url)
      const data = await res.json()
      this.items = data.data
    },

    async editItem(id) {
      // this.$router.push(`/edit?id=${id}`)
      await navigateTo(`/edit?id=${id}`)
    },
    async deleteItem() {
      const url = this.config.apiBaseUrl +
        '/delete' +
        '?id=' + this.confirmId
      const res = await fetch(url)
      const data = await res.json()
      if (data.ok === 1) {
        this.dialogMessage = 'ลบข้อมูลสําเร็จ'
      } else {
        this.dialogMessage = 'ลบข้อมูลไม่สําเร็จ'
      }
      this.dialogTitle = 'สถานะการลบ'
      this.dialog = true
      this.dialogConfirm = false
      this.$nextTick(() => {
        this.$refs.btnDialogClose.$el.focus()
      })
      this.doList()
    },
    deleteConfirm(id) {
      this.dialogConfirm = true
      this.confirmId = id
      this.$nextTick(() => {
        this.$refs.btnCloseConfirm.$el.focus()
      })
    },
  },
}
</script>
