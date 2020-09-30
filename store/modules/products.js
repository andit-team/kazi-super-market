import products from '../../data/products'

const state = {
  productslist: products.data,
  products: products.data,
}
// getters
const getters = {
  getcollectionproduct: (state) => {
    return collection => state.products.filter((product) => {
      return collection === product.collection
    })
  },
  getproductById: (state) => {
    return id => state.products.find((product) => {
      return product.id === +id
    })
  },

}
// mutations
const mutations = {

}
// actions
const actions = {

}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}