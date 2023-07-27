import axios from 'axios'
export default defineNuxtPlugin((nuxtApp) => {
  // const config = useRuntimeConfig()
  // const baseURL = config.app.baseURL
  const baseURL = useRuntimeConfig().public.apiBaseUrl
  const axiosInstance = axios.create({
    baseURL,
  })
  nuxtApp.provide('api', axiosInstance)
})
