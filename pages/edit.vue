<template>
  <v-container>
    <v-card>
      <v-img
        cover
        height="250"
        :src="pictureUrl"
      ></v-img>
      <v-card-item>
        <v-card-title class="text-h6">
          Edit member ID: {{ id }}
        </v-card-title>
      </v-card-item>
      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="username"
            :counter="10"
            label="username"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="password"
            required
          ></v-text-field>

          <v-select
            v-model="dep"
            :items="items"
            label="Item"
            required
          ></v-select>
          <v-file-input
            v-model="file"
            label="Profile picture"
            accept="image/*"
          ></v-file-input>

          <v-btn
            color="error"
            class="mr-4"
            @click="reset"
          >
            Reset Form
          </v-btn>

          <v-btn
            color="primary"
            @click="doUpdate"
          >
            Update
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>

  <v-dialog
    v-model="dialog"
    width="500"
  >
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        สถานะการบันทึก
      </v-card-title>

      <v-card-text>
        {{ dialogMessage }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="dialog = false"
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
    id: null,
    dialog: false,
    dialogMessage: '',
    valid: true,
    username: '',
    password: '',
    dep: null,
    items: [
      'IT',
      'computer',
      'electronic',
      'electircal power',
    ],
    img: '',
    file: [],
  }),
  computed: {
    pictureUrl() {
      return this.img ? this.$apiBaseUrl + '/photos/' + this.img : ''
    },
  },
  async mounted() {
    this.id = this.$route.query.id
    console.log(this.id)
    const url = this.$apiBaseUrl + `/member?id=${this.id}`
    console.log(url)
    const res = await fetch(url)
    const data = await res.json()
    this.username = data.data.username
    this.password = data.data.password
    this.dep = data.data.dep
    this.img = data.data.img
  },
  methods: {
    reset () {
      this.$refs.form.reset()
    },

    async doUpdate () {
      console.table({
        username: this.username,
        password: this.password,
        dep: this.dep,
      })
      const formData = new FormData()
      formData.append('id', this.id)
      formData.append('username', this.username)
      formData.append('password', this.password)
      formData.append('dep', this.dep)
      formData.append('file', this.file[0])
      const res = await this.$api.post('/update', formData)
      const data = res.data
      console.log(data)

      if (data.ok === 1) {
        this.username = data.data.username
        this.password = data.data.password
        this.dep = data.data.dep
        this.img = data.data.img
        this.dialogMessage = 'แก้ไขข้อมูลสําเร็จ'
      } else {
        this.dialogMessage = 'แก้ไขข้อมูลไม่สําเร็จ'
      }
      this.dialog = true
    },
  },
}
</script>
