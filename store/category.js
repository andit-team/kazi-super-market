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
    allCategories: (state) => state.categories,
    getSubCategories: (state) => state.subCategories
}
const mutations = {
    SET_CATEGORIES : (state,categories) => (state.categories = categories),
    SET_SUB_CATEGORIES : (state,categories) => (state.subCategories = categories),

}
const actions = {
    async createCategory ({dispatch},payload){
        //if update
        if(payload.id){
            const data = dispatch('updateCategory',payload);
            return data;
        }

        var UploadData = '';
        if(payload.thumbnail){
            UploadData = await helper.fileupload(payload.thumbnail);
        }

        const data = {
            name : payload.category_name,
            thumbnail : UploadData,//.data.data.display_url,
            description : payload.description,
            parent : payload.parent
        }
        const response = await axios.post(process.env.API_URL+'/admin/category-create/',data);
        
        if(response.data.error === false){
            dispatch('getCategories');
            dispatch('getSubCategories');
        }

        return response.data
    },

    async updateCategory({dispatch},payload){

        var UploadData = '';
        if(payload.thumbnail){
            UploadData = await helper.fileupload(payload.thumbnail);
        }
        
        const response = await axios.post(process.env.API_URL+'/admin/category-update/',{
            _id : payload.id,
            name : payload.category_name,
            thumbnail : UploadData,//.data.data.display_url,
            description : payload.description,
            parent : payload.parent
        });
        // console.log(response);
        if(response.data.error === false){
            dispatch('getCategories');
            dispatch('getSubCategories');
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
            dispatch('getSubCategories');
        }
        return response.data
    },

    async getCategories({ commit }){
        const response = await axios.get(process.env.API_URL+'/admin/categories');
        commit('SET_CATEGORIES',response.data)
    },

    async getChilds({ commit },payload){
        // console.log('asdf');
        // return [12,35,35];
        const response = await axios.post(process.env.API_URL+'/admin/child-categories',payload).then(result => {
            if(result.data.error === false){
                return result.data.data
            }else{
                return [];
            }
        }).catch(err => {
            return []
        });
        return response;
        // commit('SET_CATEGORIES',response.data)
    },



    //Sub categories
    async getSubCategories({ commit }){
        const response = await axios.get(process.env.API_URL+'/admin/categories/sub');
        commit('SET_SUB_CATEGORIES',response.data)
    },
}

export default {
    // namespaced: true,
    state,
    getters,
    actions,
    mutations
  }