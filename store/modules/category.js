import axios from 'axios'


const state = {
    categories : {}
}
const getters = {
    // currentUser(state){
    //     return state.currentUser
    // },
    allCategories: (state) => state.categories
}
const mutations = {
    // SET_TOKEN : function(state,payload){
    //     state.token = payload
    // },
    SET_CATEGORIES : (state,categories) => (state.categories = categories)
}
const actions = {
    // async create ({dispatch},payload){
    //     let response = await axios.post('https://andbaazar.com/app/api/registration',payload)
    //     if(response.data.error){
    //         return response.data
    //     }else{
    //         return response.data
    //     }
    // },

    async getCategories({ commit }){
        const response = await axios.get('https://jsonplaceholder.cypress.io/todos/');
        commit('SET_CATEGORIES',response.data)
    },

    // async getAll ({dispatch},payload){
    //     let response = await axios.post('https://andbaazar.com/app/api/registration',payload)
    //     if(response.data.error){
    //         return response.data
    //     }else{
    //         return response.data
    //     }
    // }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }