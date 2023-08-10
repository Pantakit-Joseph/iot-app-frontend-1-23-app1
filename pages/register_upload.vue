<template>
  <v-layout class="rounded rounded-md">
    <v-main class="ma-6" style="min-height: 300px;">
      <v-card class="pa-3">
        <v-file-input
          v-model="file"
          label="File input"
          accept="image/*"
          multiple
        ></v-file-input>
        <v-btn color="primary" @click="submit">
          Submit
        </v-btn>
      </v-card>
    </v-main>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    file: null,
  }),
  methods: {
    async submit() {
      console.log(this.file)
      const formData = new FormData()
      formData.append('id', 1234)
      const res = await this.$api.post('/upload', formData)
      const data = res.data
      console.log(data)
    },
  },
}
</script>
