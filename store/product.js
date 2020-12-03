import axios from 'axios'
import { helper } from '../helpers/helper.js';

const state = {
    products : {
        data : {
        }
    },
    tags :  {},
    units : {},
    singleProduct : {},
}
const getters = {
    allProducts: (state) => state.products,
    singleProduct: (state) => state.singleProduct,
    allTags: (state) => state.tags,
    allUnits: (state) => state.units,
}
const mutations = {
    SET_PRODUCTS : (state,products) => (state.products = products),
    SET_PRODUCT : (state,product) => (state.product = product),
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
            main_thumbnail = await helper.fileupload(payload.thumbnail,'thumbnail');
        }

        var all_images = [];
        for (const element of payload.images) {
            const uploadUrl = await helper.fileupload(element);
            all_images.push(uploadUrl);
        };
        var tagsArr = [];
        if(payload.tags){
            payload.tags.map(ar => {
                tagsArr.push(ar)    
            })
        }
        const data = {
            name : payload.name,
            price : payload.price,
            parent_category : payload.parent_category._id,
            sub_category  : payload.sub_category._id,
            unit  : payload.unit._id,
            description : payload.description,
            summary   : payload.summary,
            comments  : payload.comments,
            tags  : tagsArr,
            discount  : payload.discount_percent,
            thumbnail : main_thumbnail,
            images : all_images,
            meta_title : payload.meta_title,
            meta_keyword : payload.meta_keyword,
            meta_description : payload.meta_description
        }
        const response = await axios.post(process.env.API_URL+'/product/create/',data);
        return response.data
    },

    async update({dispatch},payload){
        // console.log('asdf');
        console.log(payload);
        var main_thumbnail = '';
        if(payload.thumbnail){
            main_thumbnail = await helper.fileupload(payload.thumbnail,'thumbnail');
        }
        console.log(main_thumbnail);

        var all_images = [];
        for (const element of payload.images) {
            const uploadUrl = await helper.fileupload(element);
            all_images.push(uploadUrl);
        };

        var tagsArr = [];
        if(payload.tags){
            payload.tags.map(ar => {
                tagsArr.push(ar)    
            })
        }
        const data = {
            _id : payload._id,
            name : payload.name,
            price : payload.price,
            parent_category : payload.parent_category._id,
            sub_category  : payload.category._id,
            unit  : payload.unit._id,
            description : payload.description,
            summary   : payload.summary,
            comments  : payload.comments,
            tags  : tagsArr,
            discount  : payload.discount,
            thumbnail : main_thumbnail,
            images : all_images,
            meta_title : payload.metaTitle,
            meta_keyword : payload.metaKeywords,
            meta_description : payload.metaDescription
        }
        const response = await axios.post(process.env.API_URL+'/product/update/',data,helper.AuthHeader());
        return response.data 
    },

    async fatchProduct({commit},slug){
        const response = await axios.get(process.env.API_URL+'/product/'+slug);
        commit('SET_PRODUCT',response.data.data)
        return response.data.data[0]
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
        // console.log(response);
        if(response.data.error === false){
            dispatch('getProducts');
            dispatch('getSubCategories');
        }
        return response.data
    },
    async deleteProduct({dispatch},payload){
        const response = await axios.post(process.env.API_URL+'/product/delete',{
            _id : payload._id
        },helper.AuthHeader());
        if(response.data.error === false){
            dispatch('getProducts');
        }
        return response.data
    },


    //tag module 

    async getTags({ commit }){
        const response = await axios.post(process.env.API_URL+'/product/tags',{},helper.AuthHeader());
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
        const response = await axios.post(process.env.API_URL+'/product/tag/create/',data,helper.AuthHeader());
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
        const response = await axios.post(process.env.API_URL+'/product/tag/update/',data,helper.AuthHeader());
        if(response.data.error === false){
            dispatch('getTags');
        }
        return response.data
    },

    async removeTag({dispatch},payload){
        const response = await axios.post(process.env.API_URL+'/product/tag/delete',{
            _id : payload._id
        },helper.AuthHeader());
        if(response.data.error === false){
            dispatch('getTags');
        }
        return response.data
    },

    //Unit module 

    async getUnits({ commit }){
        const response = await axios.post(process.env.API_URL+'/product/units',{},helper.AuthHeader());
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
        const response = await axios.post(process.env.API_URL+'/product/unit/create/',data,helper.AuthHeader());
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
        const response = await axios.post(process.env.API_URL+'/product/unit/update/',data,helper.AuthHeader());
        if(response.data.error === false){
            dispatch('getUnits');
        }
        return response.data
    },

    async removeUnit({dispatch},payload){
        const response = await axios.post(process.env.API_URL+'/product/unit/delete',{
            _id : payload._id
        },helper.AuthHeader());
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