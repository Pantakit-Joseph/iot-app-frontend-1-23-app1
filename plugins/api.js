import axios from 'axios'
export default defineNuxtPlugin((nuxtApp) => {
  // const config = useRuntimeConfig()
  // const baseURL = config.app.baseURL
  const baseURL = 'http://localhost:7001'
  let _axios = axios.create({
    baseUrl: baseURL,
  })
  // nuxtApp.provide('api', {
  //   _axios,
  // })

  return {
    provide: {
      api: _axios,
    },
  }
})
