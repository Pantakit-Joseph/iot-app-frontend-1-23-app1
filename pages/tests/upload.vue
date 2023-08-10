<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Application bar"></v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="ma-6" style="min-height: 300px;">
      <v-card class="pa-3">
        <v-file-input v-model="files" label="File input" multiple></v-file-input>
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
    files: [],
  }),
  methods: {
    async submit() {
      console.log(this.files)
      const formData = new FormData()

      formData.append('id', 1234)
      for (const file of this.files) {
        formData.append('files', file)
      }
      await this.$api.post('/test/upload', formData)
    },
  },
}
</script>
