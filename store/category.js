import axios from 'axios'
import { helper } from '../helpers/helper.js';

const state = {
    categories : {
        data : {
        }
    },
    subCategories : {
        data : {

        }
    }
}
const getters = {
    // currentUser(state){
    //     return state.currentUser
    // },
    allCategories: (state) => state.categories,
    getSubCategories: (state) => state.subCategories
}
const mutations = {
    // SET_TOKEN : function(state,payload){
    //     state.token = payload
    // },
    SET_CATEGORIES : (state,categories) => (state.categories = categories),
    SET_SUB_CATEGORIES : (state,categories) => (state.subCategories = categories),

}
const actions = {
    async createCategory ({dispatch},payload){
        if(payload.id){
            const data = dispatch('updateCategory',payload);
            return data;
        }
        var UploadData = '';
        if(payload.thumbnail){
            UploadData = await helper.fileupload(payload.thumbnail);
        }
        // console.log(UploadData.data.data.display_url)
        const data = {
            name : payload.category_name,
            thumbnail : UploadData,//.data.data.display_url,
            description : payload.description,
            parent : payload.parent
        }
        console.log(data);
        const response = await axios.post(process.env.API_URL+'/admin/category-create/',data);
        // console.log(response);
        
        if(response.data.error === false){
            dispatch('getCategories');
        }
        return response.data
    },

    async updateCategory({dispatch},payload){
        // var UploadData = {
        //     data:{
        //         data:{
        //             display_url : ""
        //         }
        //     }
        // };
        var UploadData = '';
        if(payload.thumbnail){
            UploadData = await helper.fileupload(payload.thumbnail);
        }
        
        const response = await axios.post(process.env.API_URL+'/admin/category-update/',{
            _id : payload.id,
            name : payload.category_name,
            thumbnail : UploadData,//.data.data.display_url,
            description : payload.description
        });
        // console.log(response);
        if(response.data.error === false){
            dispatch('getCategories');
        }
        return response.data
    },
    async removeCategory({dispatch},payload){
        const response = await axios.post(process.env.API_URL+'/admin/category-delete/',{
            _id : payload._id
        });
        console.log(response);
        if(response.data.error === false){
            dispatch('getCategories');
        }
        return response.data
    },

    async getCategories({ commit }){
        const response = await axios.get(process.env.API_URL+'/admin/categories');
        console.log(response.data)
        // let data = response.data.data.map( category => {
        //     return {
        //         id:category._id,
        //         name:category.name
        //     }
        // });
        // console.log(data);
        commit('SET_CATEGORIES',response.data)
    },



    //Sub categories
    async getSubCategories({ commit }){
        const response = await axios.get(process.env.API_URL+'/admin/categories/sub');
        console.log(response.data);
        commit('SET_SUB_CATEGORIES',response.data)
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