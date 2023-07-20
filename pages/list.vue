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
            @click="deleteItem(item.id)"
            aria-hidden="false"
          >
            mdi-delete
          </v-icon>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
<script>
export default {
  data() {
    return {
      name: 'alongkorn',
      age: 50,
      items: [],
    }
  },
  methods: {
    async doList() {
      const url = 'http://localhost:7001/list'
      const res = await fetch(url)
      const data = await res.json()
      this.items = data.data
    },

    async editItem(id) {
      // this.$router.push(`/edit?id=${id}`)
      await navigateTo(`/edit?id=${id}`)
    },
  },
}
</script>
