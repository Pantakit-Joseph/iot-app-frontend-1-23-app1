import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const baseURL = useRuntimeConfig().public.apiBaseUrl
  const axiosInstance = axios.create({
    baseURL,
  })
  nuxtApp.provide('api', axiosInstance)
})

// export default defineNuxtPlugin((nuxtApp) => {
//   const axiosInstance = axios.create()
//   nuxtApp.provide('axios', axiosInstance)
//   วิธีใช้ this.$axios
// })
