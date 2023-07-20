import axios from 'axios'
export default defineNuxtPlugin((nuxtApp) => {
  // const config = useRuntimeConfig()
  // const baseURL = config.app.baseURL
  const baseURL = 'http://localhost:7001'
  const axiosInstance = axios.create({
    baseURL,
  })
  nuxtApp.provide('api', axiosInstance)
})
