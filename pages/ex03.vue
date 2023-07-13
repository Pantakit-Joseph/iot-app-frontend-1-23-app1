<template>
  <h1>Hello {{ name }}</h1>
  <h1>Hello {{ upperName }}</h1>
  <input type="text" :value="name">
  <div>
    <span>one-way</span>
    <input type="text" :value="age">
  </div>
  <div>
    <span>two-way</span>
    <input type="text" v-model="age">
  </div>
  <div>
    <span>two-way</span>
    <input type="text" v-model="name">
  </div>
  <div>
    <button @click="onSave">
      Save
    </button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      name: 'Pantakit',
      age: 50,
    }
  },
  computed: {
    upperName() {
      return this.name.toUpperCase()
    },
  },
  methods: {
    async onSave() {
      console.log(this.name)
      const url = 'http://localhost:7001/list'
      const res = await fetch(url)
      const data = await res.json()
      console.log('data=>', data)
    },
  },
}
</script>
