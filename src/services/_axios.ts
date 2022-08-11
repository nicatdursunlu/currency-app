import axios from 'axios'
// import { store } from 'app/store'

const axiosInstance = axios.create({
  baseURL: 'https://api.apilayer.com/',
  timeout: 0,
  headers: {
    'Content-Type': 'application/json',
    apikey: 'E23ECraVAvzSDvMb8zbZvrvYE9iwnx63',
  },
})

axiosInstance.interceptors.request.use((config) => {
  axios.defaults.headers.apikey = 'pPqddmOhv9WG7ZHrETLI130KEBIoRwIO'

  return config
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { config } = error.response
    return new Promise((resolve, reject) => {
      axios
        .request(config)
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    })
  }
)

export default axiosInstance
