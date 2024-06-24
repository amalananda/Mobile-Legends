import axios from 'axios'
const PATH = '/payments'

axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.baseURL = process.env.REACT_APP_API_URL

export const PaymentApi = {
  getAll: async () => {

    const response = await axios.get(PATH)
    return response
  },
  getOne: async (params) => {

    const response = await axios.get(`PATH/${params.id}`)
    return response
  }

}
