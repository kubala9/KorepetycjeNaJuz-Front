import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API_URL

const auth = {
  login: payload => axios.post('/api/Authorization/Login', payload)
}

export default {
  auth
}
