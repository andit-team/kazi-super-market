import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    modules: {
      products,
    }
  })
}
export default createStore