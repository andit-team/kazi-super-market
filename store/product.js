import axios from 'axios'
import { helper } from '../helpers/helper.js';

const state = {
    products : {
        data : {
        }
    },
    tags :  {},
    //    { "_id": "5fa13ca4480e6f0700fbd43e",
    //     "name": "tags",
    //     "description": "asfd asfd asfd",
    //     "createdAt": "2020-11-03T11:19:00.769Z",
    //     "updatedAt": "2020-11-03T11:19:08.020Z",
    //     "slug": "asdf-tags",
    //     "__v": 0
    //   }
    // ],
    units : {}
}
const getters = {
    allProducts: (state) => state.products,
    allTags: (state) => state.tags,
    allUnits: (state) => state.units,
}
const mutations = {
    SET_PRODUCTS : (state,products) => (state.products = products),
    SET_TAGS : (state,tags) => (state.tags = tags),
    SET_UNITS : (state,units) => (state.units = units),
}
const actions = {
    async getProducts({ commit }){
        const response = await axios.post(process.env.API_URL+'/product/');
        commit('SET_PRODUCTS',response.data.data)
    },

    async create({dispatch},payload){
        var main_thumbnail = '';
        if(payload.thumbnail){
            main_thumbnail = await helper.fileupload(payload.thumbnail);
        }

        var all_images = [];
        for (const element of payload.images) {
            const uploadUrl = await helper.fileupload(element);
            all_images.push(uploadUrl);
        };

        const data = {
            name : payload.name,
            price : payload.price,
            parent_category : payload.parent_category,
            sub_category  : payload.sub_category,
            description : payload.description,
            summary   : payload.summary,
            comments  : payload.comments,
            thumbnail : main_thumbnail,
            images : all_images,
            meta_title : payload.meta_title,
            meta_keyword : payload.meta_keyword,
            meta_description : payload.meta_description
        }
        const response = await axios.post(process.env.API_URL+'/product/create/',data);
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
            dispatch('getProducts');
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
            dispatch('getProducts');
            dispatch('getSubCategories');
        }
        return response.data
    },







    //tag module 

    async getTags({ commit }){
        const response = await axios.post(process.env.API_URL+'/product/tags');
        commit('SET_TAGS',response.data.data)
    },

    async createTag({dispatch},payload){
        if(payload.id){
            const data = dispatch('updateTag',payload);
            return data;
        }
        const data = {
            name : payload.tag_name,
            description : payload.description
        }
        const response = await axios.post(process.env.API_URL+'/product/tag/create/',data);
        if(response.data.error === false){
            dispatch('getTags');
        }
        return response.data
    },

    async updateTag({dispatch},payload){
        const data = {
            _id : payload.id,
            name : payload.tag_name,
            description : payload.description
        }
        const response = await axios.post(process.env.API_URL+'/product/tag/update/',data);
        if(response.data.error === false){
            dispatch('getTags');
        }
        return response.data
    },

    async removeTag({dispatch},payload){
        const response = await axios.post(process.env.API_URL+'/product/tag/delete',{
            _id : payload._id
        });
        if(response.data.error === false){
            dispatch('getTags');
        }
        return response.data
    },





    //Unit module 

    async getUnits({ commit }){
        const response = await axios.post(process.env.API_URL+'/product/units');
        commit('SET_UNITS',response.data.data)
    },

    async createUnit({dispatch},payload){
        if(payload.id){
            const data = dispatch('updateUnit',payload);
            return data;
        }
        const data = {
            name : payload.unit_name,
            description : payload.description
        }
        const response = await axios.post(process.env.API_URL+'/product/unit/create/',data);
        if(response.data.error === false){
            dispatch('getUnits');
        }
        return response.data
    },

    async updateUnit({dispatch},payload){
        const data = {
            _id : payload.id,
            name : payload.unit_name,
            description : payload.description
        }
        const response = await axios.post(process.env.API_URL+'/product/unit/update/',data);
        if(response.data.error === false){
            dispatch('getUnits');
        }
        return response.data
    },

    async removeUnit({dispatch},payload){
        const response = await axios.post(process.env.API_URL+'/product/unit/delete',{
            _id : payload._id
        });
        if(response.data.error === false){
            dispatch('getUnits');
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