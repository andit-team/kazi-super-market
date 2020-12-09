import axios from 'axios'
import { helper } from '../helpers/helper.js';

const state = {
    promotionalBanners : {
        data : [
        ]
    },

    banners: {},
    bannerTitle: {}

}
const getters = {
    getPromotionalBanners: (state) => state.promotionalBanners,
    
    bannerTitle: (state) => state.bannerTitle,
}
const mutations = {
    SET_PROMOTIONAL_BANNERS : (state,promotionalBanners) => (state.promotionalBanners = promotionalBanners),
    SET_PROMOTIONAL_BANNERS_FOR_FRONTEND : (state,banners) => (state.banners = banners),
    SET_BANNER_TITLE : (state,bannerTitle) => (state.bannerTitle = bannerTitle),
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

    async getPromotionalBannersForFrontend({ commit }){
        const response = await axios.get(process.env.API_URL+'/banars');
        commit('SET_PROMOTIONAL_BANNERS_FOR_FRONTEND',response.data)
    },
    async getPromotionalBanners({ commit }){
        const response = await axios.post(process.env.API_URL+'/admin/banars',{},helper.AuthHeader());
        commit('SET_PROMOTIONAL_BANNERS',response.data)
    },

    // Fetch Title Only Home
    async getBannersTitle({ commit }){
        const response = await axios.get(process.env.API_URL+'/banar/',{
            title: payload.title
        });
        console.log(response),
        commit('SET_BANNER_TITLE',response.data)
    },

}

export default {
    // namespaced: true,
    state,
    getters,
    actions,
    mutations
  }