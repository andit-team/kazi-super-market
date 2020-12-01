<script>
import {
    required
} from 'vuelidate/lib/validators'
import Swal from "sweetalert2";
import { helper } from '../../../helpers/helper'
/**
 * Form Validation component
 */
import { mapGetters,mapActions } from 'vuex'
import axios from 'axios'
export default {
    head() {
        return {
            title: `${this.title} | KazisSuperMarket - Tags Management`,
        };
    },
    data() {
        return {
            title: 'Tags',
            items: [{
                    text: 'Home',
                    href: '/',
                },
                {
                    text: 'Products',
                    href: '/',
                },
                {
                    text: 'Tags',
                    active: true,
                },
            ],

            form: {
                id: '',
                tag_name: '',
                description: ''
            },
            submitted: false,
            submit: false,

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
                    key: 'name',
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
            // parent: {
            //     required
            // },
            tag_name: {
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
        ...mapGetters({tableData : 'product/allTags'}),
        /**
         * Total no. of records
         */
        rows() {
            return this.tableData.length
        },
    },
    mounted() {
        this.totalRows = this.items.length
    //     this.$nextTick(() => {
    //   this.$nuxt.$loading.start()
    //   setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    // })
    },
    methods: {
        ...mapActions({
                Tags : 'product/getTags',
                newTag : 'product/createTag',
                removeTag : 'product/removeTag',
            }),

        // setFile(event){
        //     this.form.thumbnail = event.target.files[0];
        // },
        /**
         * Basic Form submit
         */
        SaveTag(e) {
            this.$nuxt.$loading.start()
           this.submitted = true
            this.$v.$touch()
            if (this.$v.$invalid) {
                console.log('error submit');
            } else {
                this.submit = true
                this.newTag(this.form).then(res => {
                    if(res.error === false){
                        helper.SuccessMsg(res.msg);
                        this.form = {
                            id: '',
                            tag_name: '',
                            description: '',
                        }
                        this.$nuxt.$loading.finish()
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
                tag_name: '',
                description: ''
            }
        },

        /**
         * Search the table data with search input
         */
        onFiltered(filteredItems) {
            this.totalRows = filteredItems.length
            this.currentPage = 1
        },

        OnEdit(item){
            this.form.id = item._id
            this.form.tag_name = item.name
            this.form.description = item.description
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
                    this.removeTag(item).then(res => {
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

    created(){
        this.Tags();
    },
    directives: {
        focus: {
            // directive definition
            inserted: function (el) {
            el.focus()
            }
        }
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

                    <form @submit.prevent="SaveTag">
                        <div class="form-group">
                            <label for="tag_name">Tag Name<span class="text-danger">*</span></label>
                            <input id="tag_name" v-model="form.tag_name" v-focus name="tag_name" class="form-control" :class="{ 'is-invalid': submitted && $v.form.tag_name.$error }" type="text" placeholder="Enter Category name" />
                            <div v-if="submitted && !$v.form.tag_name.required" class="invalid-feedback">This value is required.</div> 
                        </div>

                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea name="description" id="description" v-model="form.description" class="form-control" rows="5" placeholder="Write about this category"></textarea>
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
                        <b-table :items="tableData" striped :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                            <!-- A custom formatted column -->

                            <template #cell(description)="data">{{textSorten(data.value,100)}}</template>

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