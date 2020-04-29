import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import cart from './modules/cart'
import auth from './modules/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {   
  },
  mutations: {},
  actions: {

  },
  getters: {},
  modules: {
    cart,
    products,
    auth
  }
})

export default store
