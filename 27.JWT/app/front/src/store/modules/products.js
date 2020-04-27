import axios from "axios";
import apiEndpoints from "@/constants/apiEndpoints";

export default {
  namespaced: true,
  state: {
    productsList: [],
    filter: {},
    currentProduct:null,

    loading: false, //індикатор завантаження
    error: false, //індикатор помилки
  },

  getters: {
    getProductsList: (state) => state.productsList,
    getFilteredProductList(state) {
      return state.productsList;
    },
    getCurrentProduct:state=>state.currentProduct,

    isLoading: (state) => state.loading,
    isError: (state) => state.error,
  },

  mutations: {
    setProductsList(state, data) {
      state.productsList = [...data];
    },
    addProductToList(state, prod) {
      state.productsList.push(prod);
    },

    setFilter(state, data) {
      state.filter = { ...data };
    },

    setLoading(state, data) {
      state.loading = data;
    },
    setError(state, data) {
      state.error = data;
    },
  },

  actions: {
    loadProductList({ commit }) {
      commit("setLoading", true);
      commit("setError", null);
      //Запит на сервер
      axios
        .get(apiEndpoints.products.read) //Асинхронна дія
        .then(                     //Якщо добре
          (res) => res.data
        )
        .then((resData) => {
          if (resData.success) commit("setProductsList", resData.data);
          else throw new Error("Fatch failed!");
        })
        .catch((err) => {        //Якщо погано
          commit("setError", err);
          console.log("err");
          console.log(err);
        })
        .finally(                  //Завжди
          () => commit("setLoading", false)
        );
    },
    //----------------------------------------
    addProduct({ commit }, product) {
      commit("setLoading", true);
      commit("setError", null);
      axios
        .post(apiEndpoints.products.add, product)
        .then(                     //Якщо добре
          (res) => res.data
        )
        .then((resData) => {
          if (resData.success) commit("addProductToList", resData.data);
          else throw new Error("Fatch failed!");
        })
        .catch((err) => {          //Якщо погано
          commit("setError", err);
        })
        .finally(                 //Завжди
          () => commit("setLoading", false)
        );
    },
    deleteProduct({ commit, dispatch }, id) {
      commit("setLoading", true);
      commit("setError", null);
      console.log("id");
      console.log(id);
      // axios.delete(apiEndpoints.products.delete,{params:{id}})    //через params, тоді на сервері берем з req.query.id
      axios.delete(apiEndpoints.products.delete, { data: { id } }) //через data, тоді на сервері берем з req.body.id        
        .then(                             //Якщо добре
          res => res.data
        )
        .then((resData) => {
          if(resData.success)  dispatch ('loadProductList')
          else throw new Error('Fatch failed!')
        })
        .catch((err) => {                  //Якщо погано

          commit("setError", err);
        })
        .finally(                          //Завжди
          () => commit("setLoading", false)
        );
    },

    //---
    // addFilter({commit}, filter){
    //   commit('setFilter',filter)
    // },
  },
};
