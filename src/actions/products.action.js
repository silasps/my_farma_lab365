import api from "../services/api"

export const productsAction = {
  getProducts: async () => {
    return api.get('/products')
  }
}
