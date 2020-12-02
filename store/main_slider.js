import axios from 'axios'
import { helper } from '../helpers/helper.js';

const state = {
    mainSliders : {
        data : [

        ]
    },

}
const getters = {
    getMainSliders: (state) => state.mainSliders,
}
const mutations = {
    SET_MAIN_SLIDERS : (state,mainSliders) => (state.mainSliders = mainSliders),

}
const actions = {
    async createSlider ({dispatch},payload){
        // if update
        if(payload.id){
            const data = dispatch('updateSlider',payload);
            return data;
        }

        var UploadData = '';
        if(payload.thumbnail){
            UploadData = await helper.fileupload(payload.thumbnail,'thumbnail');
        }

        const data = {
            slider_title : payload.slider_title,
            slider_subtitle : payload.slider_subtitle,
            btn_link : payload.btn_link,
            active : payload.active,
            thumbnail : UploadData,
        }
        console.log(data);
        const response = await axios.post(process.env.API_URL+'/admin/slider/create',data);
        
        if(response.data.error === false){
            dispatch('getMainSliders');
        }

        return response.data
    },
    async statusUpdate({dispatch},payload){
        await axios.post(process.env.API_URL+'/admin/slider/status',payload)
    },
    async updateSlider({dispatch},payload){

        var UploadData = '';
        if(payload.thumbnail){
            UploadData = await helper.fileupload(payload.thumbnail,'thumbnail');
        }
        
        const response = await axios.post(process.env.API_URL+'/admin/slider/update',{
            _id : payload.id,
            slider_title : payload.slider_title,
            slider_subtitle : payload.slider_subtitle,
            btn_link : payload.btn_link,
            active : payload.active,
            thumbnail : UploadData,
        });
        // console.log(response);
        if(response.data.error === false){
            dispatch('getMainSliders');
        }
        return response.data
    },
    async removeSlider({dispatch},payload){
        const response = await axios.post(process.env.API_URL+'/admin/slider/delete',{
            _id : payload._id
        });
        console.log(response);
        if(response.data.error === false){
            dispatch('getMainSliders');
        }
        return response.data
    },

    async getMainSliders({ commit }){
        const response = await axios.post(process.env.API_URL+'/admin/sliders');
        commit('SET_MAIN_SLIDERS',response.data)
    },

}

export default {
    // namespaced: true,
    state,
    getters,
    actions,
    mutations
  }