import axios from 'axios'
const PATH = '/products'

axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.baseURL = process.env.REACT_APP_API_URL

export const ProductApi = {
  getAll: async (params) => {
    const request = {
      game_name: params.game_name,
      product_type: params.product_type
    }
    const response = await axios.get(PATH, {params: request})
    return response
  },
  getOne: async (params) => {
    const request = {
      game_name: params.game_name,
      product_type: params.game_name
    }
    const response = await axios.get(`PATH/${params.id}`)
    return response
  }

}
