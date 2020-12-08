import axios from 'axios'
import { helper } from '../helpers/helper.js';

const state = {
    promotionalBanners : {
        data : [
        ]
    },

}
const getters = {
    getPromotionalBanners: (state) => state.promotionalBanners,
}
const mutations = {
    SET_PROMOTIONAL_BANNERS : (state,promotionalBanners) => (state.promotionalBanners = promotionalBanners),
}
const actions = {
    async createBanner ({dispatch},payload){
        // if update
        if(payload.id){
            const data = dispatch('updateBanner',payload);
            return data;
        }

        var UploadData = '';
        if(payload.thumbnail){
            UploadData = await helper.fileupload(payload.thumbnail,'thumbnail');
        }

        const data = {
            link : payload.link,
            thumbnail : UploadData,
            title : payload.title,
            description : payload.description,
        }
        const response = await axios.post(process.env.API_URL+'/admin/banar/create',data,helper.AuthHeader());
        
        if(response.data.error === false){
            dispatch('getPromotionalBanners');
        }
        return response.data
    },
    async updateBanner({dispatch},payload){

        var UploadData = '';
        if(payload.thumbnail){
            UploadData = await helper.fileupload(payload.thumbnail,'thumbnail');
        }
        
        const response = await axios.post(process.env.API_URL+'/admin/banar/update',{
            _id : payload.id,
            link : payload.link,
            thumbnail : UploadData,
            title : payload.title,
            description : payload.description,
        },helper.AuthHeader());
        console.log(response);
        if(response.data.error === false){
            dispatch('getPromotionalBanners');
        }
        return response.data
    },
    async removeBanner({dispatch},payload){
        const response = await axios.post(process.env.API_URL+'/admin/banar/delete',{
            _id : payload._id
        },helper.AuthHeader());
        if(response.data.error === false){
            dispatch('getPromotionalBanners');
        }
        return response.data
    },

    async getPromotionalBanners({ commit }){
        const response = await axios.post(process.env.API_URL+'/admin/banars',{},helper.AuthHeader());
        commit('SET_PROMOTIONAL_BANNERS',response.data)
    },

    // Fetch Title Only Home
    async fetchBanners({ commit }){
        const response = await axios.post(process.env.API_URL+'/banar/',{});
        console.log(response),
        commit('SET_PROMOTIONAL_BANNERS',response.data)
    },

}

export default {
    // namespaced: true,
    state,
    getters,
    actions,
    mutations
  }