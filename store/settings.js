import axios from 'axios'
import { helper } from '../helpers/helper.js';

const state = {
    contacts : {},
}
const getters = {
    allContacts: (state) => state.contacts,

}
const mutations = {
    SET_CONTACTS : (state,contacts) => (state.contacts = contacts),
}
const actions = {
    //Contact module 

    async getContacts({ commit }){
        const response = await axios.post(process.env.API_URL+'/admin/contact-messages/',{},helper.AuthHeader());
        commit('SET_CONTACTS',response.data.data)
    },

    async createContact({dispatch},payload){
        if(payload.id){
            const data = dispatch('updateContact',payload);
            return data;
        }
        const data = {
            name : payload.name,
            email : payload.email,
            subject : payload.subject,
            message : payload.message,
        }
        const response = await axios.post(process.env.API_URL+'/contact-message/create/',data);
        if(response.data.error === false){
            dispatch('getContacts');
        }
        return response.data
    },

    // async updateUnit({dispatch},payload){
    //     const data = {
    //         _id : payload.id,
    //         name : payload.unit_name,
    //         description : payload.description
    //     }
    //     const response = await axios.post(process.env.API_URL+'/product/unit/update/',data,helper.AuthHeader());
    //     if(response.data.error === false){
    //         dispatch('getUnits');
    //     }
    //     return response.data
    // },

    async removeContact({dispatch},payload){
        const response = await axios.post(process.env.API_URL+'/admin/contact-message/delete/',{
            _id : payload._id
        },helper.AuthHeader());
        if(response.data.error === false){
            dispatch('getContacts');
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