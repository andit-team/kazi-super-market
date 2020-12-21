
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
            title: `${this.title} | KazisSuperMarket - Contacts Management`,
        };
    },
    data() {
        return {
            title: 'Contact',
            items: [{
                    text: 'Home',
                    href: '/',
                },
                {
                  text: 'Contact',
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
                    key: 'name',
                    sortable: true
                },
                {
                    key: 'email',
                    sortable: true
                },
                {
                    key: 'subject',
                    sortable: true
                },
                {
                    key: 'message',
                    sortable: true
                },
                {
                    key: 'Actions',
                    sortable: true
                }
            ],

        }
    },

    //  computed: mapGetters(['category/allCategories']),
    computed: {
        ...mapGetters({tableData : 'settings/allContacts'}),
        /**
         * Total no. of records
         */
        rows() {
            return this.tableData.length
        },
    },
    mounted() {
        this.totalRows = this.items.length
    },
    methods: {
        ...mapActions({
                Contacts : 'settings/getContacts',
                removeContact : 'settings/removeContact',
            }),

        textSorten(str,len){
            return helper.textSort(str,len);
        },
            

        /**
         * Search the table data with search input
         */
        onFiltered(filteredItems) {
            this.totalRows = filteredItems.length
            this.currentPage = 1
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
                    this.removeContact(item).then(res => {
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
        this.Contacts();
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

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">

        <div class="col-lg-12">
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

                        
                            <template #cell(actions)="row">
                                <div class="d-flex">
                                    <button @click="confirmToDelete(row.item)" class="btn btn-sm btn-warning"><i class="fe-trash-2"></i></button>
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