import axios from 'axios'
import { helper } from '../helpers/helper.js';

const state = {
    category : {
        data : {
        }
    },
    categories : {
        data : {
        }
    },
    subCategories : {
        data : {

        }
    },
    allSubCategories : {
        data : {

        }
    },
    featuredCategories : {
        data : {

        }
    },
    SpecialFeaturedCategories : {
        data : {

        }
    }
}
const getters = {
    allCategories: (state) => state.categories,
    allSubCategories: (state) => state.allSubCategories,
    getSubCategories: (state) => state.subCategories,
    getCategory: (state) => state.category,
    getFeaturedCategories: (state) => state.featuredCategories,
    SpecialFeaturedCategories: (state) => state.SpecialFeaturedCategories
}
const mutations = {
    SET_CATEGORIES : (state,categories) => (state.categories = categories),
    SET_FEATURED_CATEGORIES : (state,featuredCategories) => (state.featuredCategories = featuredCategories),
    SET_SUB_CATEGORIES : (state,categories) => (state.subCategories = categories),
    SET_ALL_SUB_CATEGORIES : (state,allSubCategories) => (state.allSubCategories = allSubCategories),
    SET_CATEGORIY : (state,category) => (state.category = category),
    SET_SPECIAL_FEATURED_CATEGORIES : (state,SpecialFeaturedCategories) => (state.SpecialFeaturedCategories = SpecialFeaturedCategories)
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
            UploadData = await helper.fileupload(payload.thumbnail,'thumbnail');
        }

        const data = {
            name : payload.category_name,
            thumbnail : UploadData,//.data.data.display_url,
            description : payload.description,
            parent : payload.parent
        }
        const response = await axios.post(process.env.API_URL+'/admin/category-create/',data,helper.AuthHeader());
        
        if(response.data.error === false){
            dispatch('getCategories');
            dispatch('getSubCategories');
        }

        return response.data
    },

    async updateCategory({dispatch},payload){
        var UploadData = '';
        if(payload.thumbnail){
            UploadData = await helper.fileupload(payload.thumbnail,'thumbnail');
        }
        const response = await axios.post(process.env.API_URL+'/admin/category-update/',{
            _id : payload.id,
            name : payload.category_name,
            thumbnail : UploadData,//.data.data.display_url,
            description : payload.description,
            parent : payload.parent
        },helper.AuthHeader());
        if(response.data.error === false){
            dispatch('getCategories');
            dispatch('getSubCategories');
        }
        return response.data
    },

    async removeCategory({dispatch},payload){
        const response = await axios.post(process.env.API_URL+'/admin/category-delete/',{
            _id : payload._id
        },helper.AuthHeader());
        console.log(response);
        if(response.data.error === false){
            dispatch('getCategories');
            dispatch('getSubCategories');
        }
        return response.data
    },

    async getCategories({ commit }){
        const response = await axios.get(process.env.API_URL+'/categories');
        commit('SET_CATEGORIES',response.data)
    },

    async getFeaturedCategories({ commit }){
        const response = await axios.get(process.env.API_URL+'/category/featured-categories');
        commit('SET_FEATURED_CATEGORIES',response.data)
    },

    async getChilds({ commit },payload){
        const response = await axios.post(process.env.API_URL+'/category/child-categories',payload).then(result => {
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
    async fatchCategory({ commit },slug){
        if(slug){
            const response = await axios.get(process.env.API_URL+'/category/'+slug);
            commit('SET_CATEGORIY',response.data)
        }
    },
    async getSubCategories({ commit },slug){
        const response = await axios.get(process.env.API_URL+'/category/'+slug+'/sub-categories');
        commit('SET_SUB_CATEGORIES',response.data)
    },
    // http://localhost:3001/api/category/category_slug/sub-categories
    //Sub categories
    async getAllSubCategories({ commit }){
        const response = await axios.get(process.env.API_URL+'/categories/subcats');
        commit('SET_ALL_SUB_CATEGORIES',response.data)
    },

    async getSpecialFeatureCategoriesProducts({ commit }){
        const response = await axios.get(process.env.API_URL+'/category/features');
        commit('SET_SPECIAL_FEATURED_CATEGORIES',response.data)
    },
}

export default {
    // namespaced: true,
    state,
    getters,
    actions,
    mutations
  }