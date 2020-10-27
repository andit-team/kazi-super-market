import axios from 'axios'
import { helper } from '../helpers/helper.js';

const state = {
    categories : {
        data : {

        }
    }
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
    SET_CATEGORIES : (state,categories) => (state.categories = categories),

}
const actions = {
    async createCategory ({dispatch},payload){
        const UploadData = await helper.fileupload(payload.thumbnail);
        // console.log(UploadData.data.data.display_url)
        const data = {
            name : payload.category_name,
            thumbnail : UploadData.data.data.display_url,
            description : payload.description
        }
        console.log(data);
        const response = await axios.post(process.env.API_URL+'/admin/category-create/',data);
            
        dispatch('getCategories')

    },

    async getCategories({ commit }){
        const response = await axios.get(process.env.API_URL+'/admin/categories');
        console.log(response.data);
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
    // namespaced: true,
    state,
    getters,
    actions,
    mutations
  }