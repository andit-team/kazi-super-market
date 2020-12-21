import axios from 'axios'
import { helper } from '../helpers/helper.js';

const state = {
    subscribers : {},
}
const getters = {
    allSubscribers: (state) => state.subscribers,

}
const mutations = {
    SET_SUBSCRIBERS : (state,subscribers) => (state.subscribers = subscribers),
}
const actions = {
    //Contact module 

    async getSubscribers({ commit }){
        const response = await axios.post(process.env.API_URL+'/admin/subscriptions',{},helper.AuthHeader());
        commit('SET_SUBSCRIBERS',response.data.data)
    },

    async createSubscriber({dispatch},payload){
        if(payload.id){
            const data = dispatch('updateSubscriber',payload);
            return data;
        }
        const data = {
            email : payload.email,
        }
        const response = await axios.post(process.env.API_URL+'/subscription/create',data);
        if(response.data.error === false){
            dispatch('getSubscribers');
        }
        return response.data
    },

    async removeSubscriber({dispatch},payload){
        const response = await axios.post(process.env.API_URL+'/admin/subscription/delete',{
            _id : payload._id
        },helper.AuthHeader());
        if(response.data.error === false){
            dispatch('getSubscribers');
        }
        return response.data
    },

    
}

export default {
    // namespaced: true,
    state,
    getters,
    actions,
    mutations
  }