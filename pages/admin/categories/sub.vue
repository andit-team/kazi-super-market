<script>
import {required} from 'vuelidate/lib/validators'
import Swal from "sweetalert2";
import { helper } from '../../../helpers/helper'
/**
 * Form Validation component
 */
import { mapGetters,mapActions, mapState } from 'vuex'
import axios from 'axios'
export default {
    head() {
        return {
            title: `${this.title} | KazisSuperMarket - Parent Category Management`,
        };
    },
    data() {
        return {
            title: 'Parent Categories',
            items: [{
                    text: 'Home',
                    href: '/',
                },
                {
                    text: 'Categories',
                    href: '/',
                },
                {
                    text: 'Parent',
                    active: true,
                },
            ],

            form: {
                id: '',
                parent: '',
                category_name: '',
                description: '',
                thumbnail: ''
            },
            instantSrc: '',
            submitted: false,
            submit: false,
            value: null,

            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [10, 25, 50, 100],
            filter: null,
            filterOn: [],
            sortBy: 'age',
            sortDesc: false,
            fields: [
                {
                    key: 'thumbnail',
                    sortable: true
                },
                {
                    key: 'name',
                    sortable: true
                },
                {
                    key: 'parent',
                    sortable: true
                },
                {
                    key: 'description',
                    sortable: true
                },
                {
                    key: 'Actions',
                    sortable: true
                }
            ],

        }
    },
    validations: {
        form: {
            parent: {
                required
            },
            category_name: {
                required
            },
            // description: {
            //     required
            // },
            // thumbnail: {
            //     required
            // },
        }
    },
    //  computed: mapGetters(['category/allCategories']),
    computed: {
        // ...mapGetters({tableData : 'category/getSubCategories'}),
        // ...mapGetters({parents : 'category/allCategories'}),
        /**
         * Total no. of records
         */
        
        parents(){
            return this.$store.state.category.categories
        },
        tableData(){
            return this.$store.state.category.allSubCategories
        },
        rows() {
            return this.tableData.data.length
        }
    },
    mounted() {
        // Set the initial number of items
        this.totalRows = this.items.length
    },
    methods: {
        ...mapActions({
                allSubCats : 'category/getAllSubCategories',
                parentCat : 'category/getCategories',
                newCat : 'category/createCategory',
                removeCategory:'category/removeCategory'
            }),

        // setFile(event){
        //     this.form.thumbnail = event.target.files[0];
        // },
       async onFilePicked(event) {
            const files = event.target.files
            
            if (files[0] !== undefined) {
                this.fileName = files[0].name
                // Check validity of file
                if (this.fileName.lastIndexOf('.') <= 0) {
                return
                }
                // If valid, continue
                const fr = new FileReader()
                fr.readAsDataURL(files[0])
                fr.addEventListener('load', () => {
                this.url = fr.result
                this.form.thumbnail = files[0] // this is an file that can be sent to server...
                this.instantSrc = URL.createObjectURL(files[0]);
                })
            } else {
                this.fileName = ''
                 this.form.thumbnail = null
                this.url = ''
            }
        },
        /**
         * Basic Form submit
         */
        SaveParentCategory(e) {
           this.submitted = true
            this.$v.$touch()
            if (this.$v.$invalid) {
                console.log('error submit');
                console.log(this.form);
            } else {
                this.submit = true
                // this.form.parent = "5f993eebb596f3c6762618b9"
                this.newCat(this.form).then(res => {
                    // console.log(res);
                    if(res.error === false){
                        helper.SuccessMsg(res.msg);
                        this.form = {
                            id: '',
                            parent: '',
                            category_name: '',
                            description: '',
                            thumbnail: ''
                        }
                        document.getElementById("thumbnail").value = "";
                        this.instantSrc = null
                    }else{
                        helper.WarningMsg(res.msg);
                    }
                    this.submit = false
                }).catch(err => {
                    helper.WarningMsg(err.msg);
                });
            }
        },

        textSorten(str,len){
            return helper.textSort(str,len);
        },
            
        BackFromEdit(){
            this.form ={
                id: '',
                parent: '',
                category_name: '',
                description: '',
                thumbnail: ''
            },
            this.instantSrc = ''
        },

        /**
         * Search the table data with search input
         */
        onFiltered(filteredItems) {
            this.totalRows = filteredItems.length
            this.currentPage = 1
        },

        OnEdit(item){
            console.log(item);
            this.form.id = item._id
            this.form.category_name = item.name
            this.form.description = item.description
            this.form.thumbnail = item.thumbnail
            this.instantSrc = item.thumbnail
            this.form.parent = item.parent._id
        },

        confirmToDelete(item) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.value) {
                    this.removeCategory(item).then(res => {
                        if(res.error === false){
                            helper.SuccessMsg(res.msg);
                        }else{
                            helper.WarningMsg(res.msg);
                        }
                    }).catch(err => {
                        helper.WarningMsg(err.msg);
                    });


                }
            });
        },
    },

    async created(){
        await this.allSubCats();
        await this.parentCat();
    },
    directives: {
        focus: {
            // directive definition
            inserted: function (el) {
            el.focus()
            }
        }
    },
    middleware: 'admin-auth'
}
</script>

<style scoped>
.img1{
    opacity :0
}
</style>
<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-lg-4">
            <div class="card">
                <div class="card-body">
                    <h4 class="header-title m-t-0">Add Category as Parent</h4>

                    <form @submit.prevent="SaveParentCategory" id="parentCategoryForm">
                        <div class="form-group">
                            <label for="parent">Parent<span class="text-danger">*</span></label>
                            <select name="parent" id="parent" class="form-control" v-model="form.parent">
                                <option value="">Select a Parent</option>
                                <option v-for="parent in this.parents.data" :key="parent._id" :value="parent._id" :class="{ 'is-invalid': submitted && $v.form.parent.$error }">{{parent.name}}</option>
                            </select>
                            <!-- <input id="parent" v-model="form.parent" v-focus name="parent" class="form-control" :class="{ 'is-invalid': submitted && $v.form.parent.$error }" type="text" placeholder="Enter Category name" /> -->
                            <div v-if="submitted && !$v.form.parent.required" class="invalid-feedback">This value is required.</div> 
                        </div>
                        <div class="form-group">
                            <label for="category_name">Category Name<span class="text-danger">*</span></label>
                            <input id="category_name" v-model="form.category_name" v-focus name="category_name" class="form-control" :class="{ 'is-invalid': submitted && $v.form.category_name.$error }" type="text" placeholder="Enter Category name" />
                            <div v-if="submitted && !$v.form.category_name.required" class="invalid-feedback">This value is required.</div> 
                        </div>

                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea name="description" id="description" v-model="form.description" class="form-control" rows="5" placeholder="Write about this category"></textarea>
                        </div>

                        <div class="form-group">
                            <label for="thumbnail"><i class="fa fa-picture-o"></i>  Click to Upload Thumbnail</label>
                            <div class="btn btn-default btn-file">
                                <input id="thumbnail" name="thumbnail" class="form-control img1"  type="file" @change="onFilePicked"/>
                            </div>
                            <div id="preview">
                                <img v-if="instantSrc" class="img-fluid" :src="instantSrc" />
                            </div>
                        </div>
                        <div class="form-group text-right m-b-0">
                            <button class="btn btn-primary" :class="{ 'disabled': submit}" id="submit" type="submit" v-if="!form.id">Save</button>
                            <button class="btn btn-primary" :class="{ 'disabled': submit}" id="submit" type="submit" v-else>Update</button>

                            <button type="reset" class="btn btn-secondary m-l-5 ml-1" v-if="!form.id">Cancel</button>
                            <button class="btn btn-secondary m-l-5 ml-1" v-else @click="BackFromEdit">Back</button>
                        </div>
                    </form>
                </div>
            </div>
            <!-- end card-box -->
        </div>
        <!-- end col -->

        <div class="col-lg-8">
            <div class="card">
                <div class="card-body">
                    <h4 class="header-title">List of Parent Categories</h4>
                    <p class="text-muted font-13 mb-4"></p>
                    <div class="row mb-md-2">
                        <div class="col-sm-12 col-md-6">
                            <div id="tickets-table_length" class="dataTables_length">
                                <label class="d-inline-flex align-items-center">
                                    Show&nbsp;
                                    <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;entries
                                </label>
                            </div>
                        </div>
                        <!-- Search -->
                        <div class="col-sm-12 col-md-6">
                            <div id="tickets-table_filter" class="dataTables_filter text-md-right">
                                <label class="d-inline-flex align-items-center">
                                    Search:
                                    <b-form-input v-model="filter" type="search" placeholder="Search..." class="form-control form-control-sm ml-2"></b-form-input>
                                </label>
                            </div>
                        </div>
                        <!-- End search -->
                    </div>
                    <!-- Table -->
                    <div class="table-responsive mb-0">
                        <b-table :items="tableData.data" striped :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                            <!-- A custom formatted column -->
                            <template #cell(thumbnail)="data"><img :src="data.value ? data.value : 'https://library.cuni.cz/wp-content/plugins/ldd-directory-lite/public/images/noimage.png'" height="50" width="50" /></template>

                            <template #cell(description)="data">{{textSorten(data.value,100)}}</template>
                            <template #cell(parent)="data">{{data.value.name ? data.value.name : 'no-category found'}}</template>

                            <template #cell(actions)="row">
                                <div class="d-flex">
                                    <button @click="confirmToDelete(row.item)" class="btn btn-sm btn-warning"><i class="fe-trash-2"></i></button>
                                    <button @click="OnEdit(row.item)" class="ml-1 btn btn-sm btn-info"><i class="fe-edit"></i></button>
                                    </div>
                            </template>
                        </b-table>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="dataTables_paginate paging_simple_numbers float-right">
                                <ul class="pagination pagination-rounded mb-0">
                                    <!-- pagination -->
                                    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
