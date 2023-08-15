<template>
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
      label="File input"
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
      @click="doSave"
    >
      Save
    </v-btn>
  </v-form>

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
    dialog: false,
    dialogMessage: '',
    valid: true,
    username: '',
    password: '',
    dep: '',
    items: [
      'IT',
      'computer',
      'electronic',
      'electircal power',
    ],
    file: null,
  }),

  methods: {
    reset () {
      this.$refs.form.reset()
    },
    async doSave () {
      console.table({
        username: this.username,
        password: this.password,
        dep: this.dep,
      })
      const formData = new FormData()
      formData.append('username', this.username)
      formData.append('password', this.password)
      formData.append('dep', this.dep)
      formData.append('file', this.file[0])

      const res = await this.$api.post('/add', formData)
      console.log(res)
      const data = res.data

      if (data.ok === 1) {
        this.dialogMessage = 'บันทึกสําเร็จ'
      } else {
        this.dialogMessage = 'บันทึกไม่สําเร็จ'
      }
      this.dialog = true
      this.username = ''
      this.password = ''
      this.dep = ''
    },
  },
}
</script>
