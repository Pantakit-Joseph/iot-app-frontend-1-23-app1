<template>
  <v-file-input v-model="files" label="File input" multiple></v-file-input>
  <v-btn @click="submit">
    Submit
  </v-btn>
</template>

<script>
export default {
  data: () => ({
    files: []
  }),
  methods: {
    async submit() {
      console.log(this.files)
      const formData = new FormData()

      formData.append('id', 1234)
      for (const file of this.files) {
        formData.append('file', file)
      }
      await this.$api.post('/test/upload', formData)
    }
  }
}
</script>
