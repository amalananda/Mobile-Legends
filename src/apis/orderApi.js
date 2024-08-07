import axios from 'axios'
const PATH = '/orders'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
axios.defaults.baseURL = process.env.REACT_APP_API_URL

export const OrderApi = {
  checkout: async (params) => {
    const request = {
      id: params.id,
      zone: params.zone
    }

    const path = [PATH, '/checkout'].join('')
    const response = await axios.get(path, { params: request })
    return response
  },

}
