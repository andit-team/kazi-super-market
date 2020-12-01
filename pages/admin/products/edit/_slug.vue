<script>
import {
    FormWizard,
    TabContent,
    WizardButton
} from "vue-form-wizard";

// import {required} from 'vuelidate/lib/validators'
import Swal from "sweetalert2";
import { helper } from '../../../../helpers/helper'
import Multiselect from 'vue-multiselect'

import vue2Dropzone from "vue2-dropzone";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "vue-form-wizard/dist/vue-form-wizard.min.css";
import { mapGetters,mapActions, mapState } from 'vuex'
import { products } from '../../ecommerce/data-products';
/**
 * Product-create component
 */
export default {
    head() {
        return {
            title: `${this.title} | Kazissupermarket - Nuxtjs Responsive Admin Dashboard Template`,
        };
    },
    components: {
        FormWizard,
        TabContent,
        WizardButton,
        Multiselect,
        vueDropzone: vue2Dropzone,
        ckeditor: CKEditor.component,
    },
    data() {
        return {
            title: "Update Product",
            err : {
                name : false,
                price : false,
                parent_category : false,
                sub_category : false,
                description : false,
                unit : false,
            },
            subcategories : [],
            value1 : '',
            ArrTags : [],
            instantSrc : 'https://content.hostgator.com/img/weebly_image_sample.png',
            product:{
                name : '',
                price : '',
                discount : '',
                unit : '',
                tags : '',
                parent_category : '',
                category  : '',
                description : '',
                summary   : '',
                comments  : '',
                thumbnail : null,
                images : null,
                meta_title : null,
                meta_keyword : null,
                meta_description : null,
            },
            items: [{
                    text: "Kazissupermarket",
                },
                {
                    text: "eCommerce",
                },
                {
                    text: "Create Product",
                    active: true,
                },
            ],
            editor: ClassicEditor,
            dropzoneOptions: {
                url: "https://httpbin.org/post",
                maxFiles: 5,
                maxFilesize: 5,
                thumbnailHeight:40,
                thumbnailWidth:40,
                previewTemplate: this.template(),
            },
            
        };
    },
    computed: {
        parents(){
            // return this.$store.state.category.categories
            const v = this.$store.state.category.categories;
            var data = [];
            if(v.data.length){
                v.data.map(arr => {
                    data.push({
                        name : arr.name,
                        _id : arr._id
                    })
                })
            }
            return data
        },
        units(){
            const v = this.$store.state.product.units;
            var data = [];
            if(v.length){
                v.map(arr => {
                    data.push({name:arr.name,_id:arr._id})
                })
            }
            return data
        },
        tags(){
            const v = this.$store.state.product.tags;
            var data = [];
            if(v.length){
                v.map(arr => {
                    data.push(arr.name)
                })
            }
            return data
        },
    },
   async created(){
        this.parentCat();
        this.FatchUnits();
        this.FatchTags();
        
        console.log(this.product)
        
        // this.product.images.map(img => {
        //     var file = { size: img.size, name: img.title, type: img.type };
        //     var url = img.url;
        //     this.$refs.myVueDropzone.manuallyAddFile(file, url);
        // });
    },
    // async mounted(){
    //     console.log('sdf');
    //     console.log(this.product);
    // },
    methods: {
        ...mapActions({
                FatchProduct : 'product/fatchProduct',
                parentCat : 'category/getCategories',
                FatchUnits : 'product/getUnits',
                FatchTags : 'product/getTags',
            }),
        async getSubCategory(option){
            const childs = await this.$store.dispatch('category/getChilds',{parent : option._id});
            var data = []
            if(childs.length){
                childs.map(arr => {
                    data.push({name:arr.name,_id:arr._id})
                })
            }
            // console.log(data)
            this.subcategories =  data;
        },

        async check(){
            this.product = await this.FatchProduct(this.$route.params.slug);
            this.instantSrc = this.product.thumbnail;
            console.log(this.product);
            this.product.images.map(img => {
                var file = { size: img.size, name: img.title, type: img.type, img : img };
                var url = img.url;
                this.$refs.myVueDropzone.manuallyAddFile(file, url);
            });
        },
//Dropzone start
        onFilePicked(event) {
            const files = event.target.files
            
            if (files[0] !== undefined) {
                const fileName = files[0].name
                // Check validity of file
                if (fileName.lastIndexOf('.') <= 0) {
                return
                }
                // If valid, continue
                const fr = new FileReader()
                fr.readAsDataURL(files[0])
                fr.addEventListener('load', () => {
                this.product.thumbnail = files[0] // this is an file that can be sent to server...
                this.instantSrc = URL.createObjectURL(files[0]);
                })
            } else {
                 this.product.thumbnail = null
            }
        },
        maxFileReached(file){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Maximum 5 files are allowed'
            })
            this.$refs.myVueDropzone.removeFile(file)
        },
        fileAdded( file ){
            console.log(file);
            if(file.type === "image/png" || file.type === "image/jpg" || file.type === "image/jpeg"){}else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Image only allowed for ( JPG & PNG ) Format'
                })
                this.$refs.myVueDropzone.removeFile(file)
            }

            if(file.size > 5000000 ){ //check as bites
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Image size allowed up to 5mb'
                })
                this.$refs.myVueDropzone.removeFile(file)
            }
        },

        template: function () {
            return ` <div class="dropzone-previews mt-3">
            <div class="card mt-1 mb-0 shadow-none border">
                <div class="p-2">
                    <div class="row align-items-center">
                        <div class="col-auto">
                            <img data-dz-thumbnail src="#" class="avatar-sm rounded bg-light" alt="">
                        </div>
                        <div class="col pl-0">
                            <a href="javascript:void(0);" class="text-muted font-weight-bold" data-dz-name></a>
                            <p class="mb-0" data-dz-size></p>
                        </div>
                        <div class="col-auto">
                            <!-- Button -->
                            <a href="" class="btn btn-link btn-lg text-muted" data-dz-remove>
                                <i class="fe-x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        },
        


        isLastStep() {
            if (this.$refs.wizard) {
                return this.$refs.wizard.isLastStep;
            }
            return false;
        },
        
        async onComplete(){
            // console.log(this.product);
            await this.$store.dispatch('product/update',this.product);
            // // this.$nuxt.$loading.finish()
            // if(!product.error){
            //     Swal.fire({
            //         icon: 'success',
            //         title: 'Success',
            //         text: product.msg
            //     }) 
            //     this.$router.push({path: "/admin/products"});
            // }else{
            //     Swal.fire({
            //         icon: 'error',
            //         title: 'Oops...',
            //         text: product.msg
            //     })  
            // }

        },
        // loaging: function(){
        //     console.log('asdf');
        //     this.$nuxt.$loading.start()
        // },

        beforeTabSwitchBasicInfo: function(){
            this.product.name === '' ? this.err.name =  true : this.err.name =  false
            this.product.price === '' ? this.err.price =  true : this.err.price =  false
            this.product.description === '' ? this.err.description =  true : this.err.description =  false
            this.product.parent_category === '' ? this.err.parent_category =  true : this.err.parent_category =  false
            this.product.sub_category === '' ? this.err.sub_category =  true : this.err.sub_category =  false
            this.product.unit === '' ? this.err.unit =  true : this.err.unit =  false
            if(this.product.name != "" && this.product.price != "" && this.product.parent_category != "" && this.product.sub_category != "" && this.product.description != ""){
                return true
            }

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please see the required filed'
            })

            return false;
        },
        beforeTabSwitchImages: function(){
            if(this.product.thumbnail === null){
                 Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Thumbnail Must be required'
                })
                return false
            }
            this.product.images = this.$refs.myVueDropzone.dropzone.files;
            return true
        }
    },
    middleware: "router-auth",
};
</script>
<style scoped>
.img1{
    opacity :0
}
.img-fluid{
    border: 2px dashed #c1c4c7;
    width: 100%;
    border-radius:6px;
    padding: 20px;
}
.sub-header {
    margin-bottom: 38px;
}

</style>

<template>
<div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <form-wizard color="#3bafda" ref="wizard"  @on-complete="onComplete">
                        <tab-content title="General" :before-change="beforeTabSwitchBasicInfo">
                            <h4 class="header-title">General Information</h4>
                            <p class="sub-header">Fill all information below</p>
                            <div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group mb-3">
                                            <label for="product-name" :class="this.err.name === true ? 'text-danger' : ''">Product Name<span class="text-danger">*</span></label>
                                            <input type="text" id="product-name" :class="this.err.name ? 'border-danger' : ''" v-model="product.name" class="form-control" placeholder="e.g : Apple iMac" />
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="form-group mb-3">
                                            <label for="product-price" :class="this.err.price ? 'text-danger' : ''">Price<span class="text-danger">*</span></label>
                                            <input type="number" :class="this.err.price ? 'border-danger' : ''" v-model="product.price" class="form-control" id="product-price" placeholder="Enter amount e.g: 50.10" />
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="form-group mb-3">
                                            <label for="product-discount" :class="this.err.discount ? 'text-danger' : ''">Discount Percent</label>
                                            <input type="number" v-model="product.discount" class="form-control" id="product-discount" placeholder="% of discount" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="form-group mb-3">
                                            <label for="product-category" :class="this.err.parent_category ? 'text-danger' : ''">Parent Category<span class="text-danger">*</span></label>
                                            <!-- <select class="form-control select2" id="product-category" :class="this.err.parent_category ? 'border-danger' : ''" v-model="product.parent_category" @change="getSubCategory"> -->
                                                <!-- <option value="">Select Parent</option> @select="getSubCategory"-->
                                                <multiselect :class="this.err.parent_category === true ? 'border border-danger' : ''" v-model="product.parent_category" :value="product.parent_category" :options="this.parents" label="name" @select="getSubCategory" ></multiselect>

                                                <!-- <option v-for="parentCategory in this.parents" :key="parentCategory._id" :value="parentCategory._id">{{parentCategory.name}}</option> -->
                                            <!-- </select> -->
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="form-group mb-3">
                                            <label for="product-sub-category" :class="this.err.sub_category ? 'text-danger' : ''">Sub Category<span class="text-danger">*</span></label>

                                            <multiselect :class="this.err.sub_category === true ? 'border border-danger' : ''" v-model="product.category" :value="product.category" placeholder="Please select a sub category" :options="this.subcategories" label="name" ></multiselect>

                                            <!-- <select class="form-control select2" id="product-sub-category" :class="this.err.sub_category ? 'border-danger' : ''" v-model="product.sub_category">
                                                <option value="">Select sub category</option>
                                                <option v-for="subCategory in this.subcategories" :key="subCategory._id" :value="subCategory._id">{{subCategory.name}}</option>
                                            </select> -->
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="form-group mb-3">
                                            <label for="product-unit" :class="this.err.unit ? 'text-danger' : ''">Unit<span class="text-danger">*</span></label>
                                            <multiselect :class="this.err.unit === true ? 'border border-danger' : ''" v-model="product.unit" :value="product.unit" placeholder="Please select a unit" :options="this.units" label="name" ></multiselect>
                                            <!-- <select class="form-control select2" id="product-unit" :class="this.err.unit ? 'border-danger' : ''" v-model="product.unit">
                                                <option value="">Select Unit</option>
                                                <option v-for="unit in this.units" :key="unit._id" :value="unit._id">{{unit.name}}</option>
                                            </select> -->
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group mb-3">
                                    <label for="product-description" :class="this.err.description ? 'text-danger' : ''">Product Description<span class="text-danger">*</span></label>
                                    <ckeditor :class="this.err.description ? 'border border-danger' : ''" v-model="product.description" :editor="editor"></ckeditor>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group mb-3">
                                            <label for="product-summary">Product Summary</label>
                                            <textarea class="form-control" v-model="product.summary" id="product-summary" rows="5" placeholder="Please enter product summary"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group mb-0">
                                            <label>Comment</label>
                                            <textarea v-model="product.comments" class="form-control" rows="3" placeholder="Please enter comment"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul class="pager wizard mb-3 list-inline text-right mt-3">
                                <li class="next list-inline-item"></li>
                            </ul>
                        </tab-content>

                        <tab-content title="Product Images" :before-change="beforeTabSwitchImages">
                            <div class="row">
                                <div class="col-lg-4">
                                    <h4 class="header-title">Product Images</h4>                                    
                                        <label for="thumbnail-file" :class="this.err.mainImg === true ? 'text-danger' : ''">
                                        <span class="btn btn-info"> <i class="fe-upload"></i> Upload </span></label>

                                        <div class="btn btn-default btn-file">
                                            <input id="thumbnail-file" name="thumbnail" class="form-control img1"  type="file" @change="onFilePicked"/>
                                        </div>
                                        <div id="preview">
                                            <img v-if="instantSrc" class="img-fluid"  :src="instantSrc" />
                                        </div>
                                </div>
                                <div class="col-lg-8">
                                    <h4 class="header-title">Product Images</h4>
                                    <p class="sub-header">Upload product image</p>

                                    <vue-dropzone id="dropzone" ref="myVueDropzone" @vdropzone-mounted="check" :use-custom-slot="true" :options="dropzoneOptions"  
                                    @vdropzone-file-added="fileAdded"
                                    @vdropzone-max-files-exceeded="maxFileReached"
                                    >
                                        <div class="dz-message needsclick">
                                            <i class="h1 text-muted ri-upload-cloud-2-line"></i>
                                            <h3>Drop files here or click to upload.</h3>
                                            <span class="text-muted font-13">
                                                (This is just a demo dropzone. Selected files are
                                                <strong>not</strong> actually uploaded.)
                                            </span>
                                        </div>
                                    </vue-dropzone>
                                </div>
                            </div>                            
                        </tab-content>

                        <tab-content title="Meta Data">
                            <h4 class="header-title">Meta Data</h4>
                            <p class="sub-header">Fill all information below</p>

                            <form>
                                <div class="form-group mb-3">
                                    <label for="product-meta-title">Meta title</label>
                                    <input type="text" class="form-control" v-model="product.metaTitle" id="product-meta-title" placeholder="Enter title" />
                                </div>

                                <div class="form-group mb-3">
                                    <label for="product-meta-keywords">Meta Keywords</label>
                                    <input type="text" class="form-control" v-model="product.metaKeywords" id="product-meta-keywords" placeholder="Enter keywords" />
                                </div>

                                <div class="form-group mb-3">
                                    <label for="product-meta-description">Meta Description</label>
                                    <textarea class="form-control" rows="5" v-model="product.metaDescription" id="product-meta-description" placeholder="Please enter description"></textarea>
                                </div>

                                <div class="form-group mb-3">
                                    <label for="product-meta-description">Tags</label>
                                    <multiselect v-model="product.tags" :options="this.tags" :multiple="true"></multiselect>
                                </div>
                            </form>
                        </tab-content>
                    </form-wizard>
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->
</div>
</template>
