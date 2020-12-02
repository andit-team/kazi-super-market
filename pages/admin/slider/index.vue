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
            title: `${this.title} | KazisSuperMarket - Slider`,
        };
    },
    data() {
        return {
            title: 'Slider',
            items: [{
                    text: 'Home',
                    href: '/',
                },
                {
                    text: 'Slider',
                    active: true,
                }
            ],

            form: {
                id: '',
                slider_title: '',
                slider_subtitle: '',
                thumbnail: '',
                btn_link: '',
                active: true,
            },
            // status:[
            //     {"sdf":false},
            //     {"5fc61aad9d616a2534d53b76":false},
            //     {"5fc61abc9d616a2534d53b77":true},
            // ],
            instantSrc: '',
            submitted: false,
            submit: false,
            value: null,
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [5, 10, 20, 100],
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
                    key: 'slider_title',
                    sortable: true
                },
                {
                    key: 'slider_subtitle',
                    sortable: true
                },
                {
                    key: 'btn_link',
                    sortable: false
                },
                {
                    key: 'active',
                    sortable: false
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
            slider_title: {
                required
            },
            slider_subtitle: {
                required
            }
        }
    },
    //  computed: mapGetters(['category/allCategories']),
    computed: {
        ...mapGetters({tableData : 'main_slider/getMainSliders'}),
        /**
         * Total no. of records
         */
        tableData(){
            return this.$store.state.main_slider.mainSliders
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
                mainSliders : 'main_slider/getMainSliders',
                newSlider : 'main_slider/createSlider',
                updateStatus : 'main_slider/statusUpdate',
                removeSlider:'main_slider/removeSlider'
            }),

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
        SaveMainSlider(e) {
           this.submitted = true
            this.$v.$touch()
            if (this.$v.$invalid) {
                console.log('error submit');
                console.log(this.form);
            } else {
                this.submit = true
                this.newSlider(this.form).then(res => {
                    // console.log(res);
                    if(res.error === false){
                        helper.SuccessMsg(res.msg);
                        this.form = {
                            id: '',
                            slider_title: '',
                            slider_subtitle: '',
                            thumbnail: '',
                            'btn_link' : '',
                            'active' : true
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

        BackFromEdit(){
            this.form = {
                id: '',
                slider_title: '',
                slider_subtitle: '',
                thumbnail: '',
                'btn_link' : '',
                'active' :true
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
            this.form.slider_title = item.slider_title
            this.form.slider_subtitle = item.slider_subtitle
            this.form.thumbnail = item.thumbnail,
            this.form.btn_link = item.btn_link,
            this.form.active = item.active,
            this.instantSrc = item.thumbnail
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
                    this.removeSlider(item).then(res => {
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

        statusUpdate(id, status){
            this.updateStatus({"_id":id,"active":status});
            // console.log(status);
        }
    },

    created(){
        this.newSlider();
        this.mainSliders();
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
                    <h4 class="header-title m-t-0">Add Slider</h4>

                    <form @submit.prevent="SaveMainSlider" id="mainSliderForm">
                        <div class="form-group">
                            <label for="slider_title">Slider Title<span class="text-danger">*</span></label>
                            <input id="slider_title" v-model="form.slider_title" v-focus name="slider_title" class="form-control" :class="{ 'is-invalid': submitted && $v.form.slider_title.$error }" type="text" placeholder="Enter Slider title" />
                            <div v-if="submitted && !$v.form.slider_title.required" class="invalid-feedback">This value is required.</div> 
                        </div>
                        <div class="form-group">
                            <label for="slider_subtitle">Slider Sub-title<span class="text-danger">*</span></label>
                            <input id="slider_subtitle" v-model="form.slider_subtitle" v-focus name="slider_subtitle" class="form-control" :class="{ 'is-invalid': submitted && $v.form.slider_subtitle.$error }" type="text" placeholder="Enter Slider sub-title" />
                            <div v-if="submitted && !$v.form.slider_subtitle.required" class="invalid-feedback">This value is required.</div> 
                        </div>
                        <div class="form-group">
                            <label for="btn_link">Slider Button Link<span class="text-danger">*</span></label>
                            <input id="btn_link" v-model="form.btn_link" v-focus name="btn_link" class="form-control" type="text" placeholder="Enter Slider button link" />
                        </div>

                        <div class="form-group">
                            <div>
                                <b-form-checkbox v-model="form.active" name="check-button" switch>
                                <b>Slider Active/Inactive</b>
                                </b-form-checkbox>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Upload Slider Image</label>
                            <div class="input-group mb-3">
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input form-control" name="thumbnail" id="thumbnail" @change="onFilePicked">
                                    <label class="custom-file-label" for="thumbnail">Choose file</label>
                                </div>
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
                    <h4 class="header-title">Sliders List</h4>
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

                            <template #cell(active)="row">
                                <div>
                                    <b-form-checkbox @change="statusUpdate(row.item._id, $event)" switch :checked="row.item.active"></b-form-checkbox> 
                                </div>
                            </template>
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
