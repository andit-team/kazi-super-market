<script>
import {
    required,
    email,
    minLength,
    sameAs,
    maxLength,
    minValue,
    maxValue,
    numeric,
    url,
    alphaNum,
} from 'vuelidate/lib/validators'
import { helper } from '../../../helpers/helper'
/**
 * Form Validation component
 */
import Multiselect from 'vue-multiselect'
import { mapGetters,mapActions } from 'vuex'
import axios from 'axios'
export default {
   
    // saveTodo(e){
    //     e.preventDefault();
    //     this.newTodo(this.title);
    //     this.title = "";
    // },
    head() {
        return {
            title: `${this.title} | Minton - Nuxtjs Responsive Admin Dashboard Template`,
        };
    },
    components: {
        Multiselect
    },
    data() {
        return {
            title: 'Form Validation',
            items: [{
                    text: 'Minton',
                    href: '/',
                },
                {
                    text: 'Forms',
                    href: '/',
                },
                {
                    text: 'Validation',
                    active: true,
                },
            ],

            form: {
                parent: '',
                category_name: '',
                description: '',
                thumbnail: ''
            },
            submitted: false,
            value: null,
            options: [
                'Alaska',
                'Hawaii',
                'California',
                'Nevada',
                'Oregon',
                'Washington',
                'Arizona',
                'Colorado',
                'Idaho',
                'Montana',
                'Nebraska',
                'New Mexico',
                'North Dakota',
                'Utah',
                'Wyoming',
                'Alabama',
                'Arkansas',
                'Illinois',
                'Iowa',
            ],
            // submitStatus: null,


//table data

            // tableData: '',
            title: 'Advanced Table',
            items: [{
                    text: 'Minton',
                    href: '/',
                },
                {
                    text: 'Tables',
                    href: '/',
                },
                {
                    text: 'Advanced',
                    active: true,
                },
            ],
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
                    key: 'description',
                    sortable: true
                }
            ],

        }
    },
    validations: {
        form: {
            // parent: {
            //     required
            // },
            // category_name: {
            //     required
            // },
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
        ...mapGetters({tableData : 'category/allCategories'}),
        /**
         * Total no. of records
         */
        rows() {
            return this.tableData.data.length
        },
    },
    mounted() {
        // Set the initial number of items
        this.totalRows = this.items.length
    },
    methods: {
        ...mapActions({cat : 'category/getCategories',newCat : 'category/createCategory'}),

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
        handleSubmit(e) {
            this.submitted = true
            // stop here if form is invalid
            this.$v.$touch()
            if (this.$v.$invalid) {
                console.log('error submit');
            } else {
                this.newCat(this.form).then(res => {
                    console.log(res);
                    if(res.error === false){
                        helper.SuccessMsg(res.msg);
                        this.form = {}
                        document.getElementById("thumbnail").value = "";
                    }else{
                        helper.WarningMsg(res.msg);
                    }
                }).catch(err => {
                    helper.WarningMsg(err.msg);
                });
            }
        },


            


        /**
         * Search the table data with search input
         */
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length
            this.currentPage = 1
        }

    },
    created(){
        this.cat();
    },
    
    middleware: 'router-auth'
}
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-lg-4">
            <div class="card">
                <div class="card-body">
                    <h4 class="header-title m-t-0">Add Category as Parent</h4>

                    <form @submit.prevent="handleSubmit" id="parentCategoryForm">
                        <div class="form-group">
                            <label for="category_name">
                                User Name
                                <span class="text-danger">*</span>
                            </label>
                            <input id="category_name" v-model="form.category_name" name="category_name" class="form-control"  type="text" placeholder="Enter user name" />
                            <!-- <div v-if="submitted && !$v.form.category_name.required" class="invalid-feedback">This value is required.</div> :class="{ 'is-invalid': submitted && $v.form.category_name.$error }"-->
                        </div>
                        <div class="form-group">
                            <label for="category_name">
                                Thumbnail
                            </label>
                            <input id="thumbnail" name="thumbnail" class="form-control img1" type="file" @change="onFilePicked"/>
                        </div>
                        <div class="form-group">
                            <label for="category_name">
                                Description
                            </label>
                            <textarea name="description" id="description" v-model="form.description" class="form-control" rows="5" placeholder="Write about this category">

                            </textarea>
                        </div>
                        <!-- <div class="form-group">
                            <label for="parent_category">Single Select</label>
                            <multiselect v-model="form.parent" :options="options"></multiselect>
                            <div v-if="submitted && !$v.form.parent.required" class="invalid-feedback">This value is required.</div>

                            <input id="category_name" v-model="form.category_name" name="category_name" class="form-control" :class="{ 'is-invalid': submitted && $v.form.category_name.$error }" type="text" placeholder="Enter user name" />
                            <div v-if="submitted && !$v.form.category_name.required" class="invalid-feedback">This value is required.</div>
                        </div> -->

                        <div class="form-group text-right m-b-0">
                            <button class="btn btn-primary" type="submit">Submit</button>
                            <button type="reset" class="btn btn-secondary m-l-5 ml-1">Cancel</button>
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
                        <b-table :items="tableData.data" :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                            <!-- A custom formatted column -->
                            <template #cell(thumbnail)="data">
                                <!-- {{data.value}} -->
                                 <img :src="data.value" height="auto" width="100" />
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
        <!-- end col -->
    </div>
</div>
</template>
