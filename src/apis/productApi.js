import axios from 'axios'
const PATH = '/products'

axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.baseURL = 'http://localhost:3001'

export const ProductApi = {
  getAll: async (params) => {
    const request = {
      game_type: params.game_type,
      product_type: params.product_type
    }
    const response = await axios.get(PATH, {params: request})
    return response
  }

}
