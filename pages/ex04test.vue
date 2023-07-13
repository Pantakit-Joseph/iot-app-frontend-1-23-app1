<template>
  <v-btn color="primary" @click="doList">
    List
  </v-btn>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          student_id
        </th>
        <th class="text-left">
          firstname
        </th>
        <th class="text-left">
          lastname
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in items"
        :key="item.student_id"
      >
        <td>{{ item.student_id }}</td>
        <td>{{ item.firstname }}</td>
        <td>{{ item.lastname }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>

export default {
  data() {
    return {
      items: [],
    }
  },
  methods: {
    async doList() {
      const url = 'http://localhost:7001/list'
      const res = await fetch(url)
      const data = await res.json()
      this.items = data.data
      console.table(data.data)
    },
  },
}
</script>
