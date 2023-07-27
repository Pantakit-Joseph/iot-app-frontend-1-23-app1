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
      const url = this.$apiBaseUrl + '/insert' +
      // const url = 'http://localhost:7001/insert' +
      // const url = this.$apiBaseUrl + '/insert' +
      '?name=' + this.username +
      '&password=' + this.password +
      '&dep=' + this.dep
      console.log(url)
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)

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
