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
</template>

<script>
export default {
  data: () => ({
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
      const url = 'http://localhost:7001/register' +
      '?username=' + this.username +
      '&password=' + this.password +
      '&dep=' + this.dep
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
    },
  },
}
</script>
