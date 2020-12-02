<script>
import { mapGetters,mapActions } from 'vuex';
import { helper } from '../../../helpers/helper'
import Swal from "sweetalert2";
// import {
//     productData
// } from "./data";

/**
 * Products-list component
 */
// import { mapGetters,mapActions } from 'vuex'
export default {
    head() {
        return {
            title: `${this.title} | Kazissupermarket - Nuxtjs Responsive Admin Dashboard Template`,
        };
    },
    data() {
        return {
            // productData: productData,
            title: "Products List",
            items: [{
                    text: "Kazissupermarket"
                },
                {
                    text: "eCommerce"
                },
                {
                    text: "Products List",
                    active: true
                }
            ],
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [10, 25, 50, 100],
            filter: null,
            filterOn: [],
            sortBy: "age",
            sortDesc: false,
            fields: [
                {
                    key: "createdAt",
                    label: "Added Date",
                    sortable: true
                },
                {
                    key: "name",
                    sortable: true
                },
                {
                    key: "category",
                    sortable: true
                },
                
                {
                    key: "price",
                    sortable: true
                },
                {
                    key: "status",
                    label: "Status",
                    sortable: true
                },
                "action"
            ]
        };
    },
    computed: {
        ...mapGetters({productData : 'product/allProducts'}),
        // products (){
        //     return this.$store.state.product.products
        // },
        /**
         * Total no. of records
         */
        rows() {
            return this.productData.length;
        }
    },
    created(){
        this.FatchProduct();
    },
    mounted() {
        // Set the initial number of items
        this.totalRows = this.items.length;
    },
    methods: {
        ...mapActions({
                FatchProduct    : 'product/getProducts',
                removeProduct   : 'product/deleteProduct'
            }),
        /**
         * Search the table data with search input
         */
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
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
                    this.removeProduct(item).then(res => {
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
    middleware: 'router-auth',
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="row mb-2">
                        <div class="col-sm-6">

                            <nuxt-link to="/admin/products/product-create" class="btn btn-danger mb-2"><i class="mdi mdi-plus-circle mr-1"></i> Add Products</nuxt-link>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-sm-12 col-md-6">
                            <div id="tickets-table_length" class="dataTables_length">
                                <label class="d-inline-flex align-items-center">
                                    Display&nbsp;
                                    <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;customers
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
                        <b-table table-class="table table-centered w-100" thead-tr-class="bg-light" :items="productData" :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                            <!-- <template v-slot:cell(check)="data">
                                <div class="custom-control custom-checkbox text-center">
                                    <input type="checkbox" class="custom-control-input" :id="`contacusercheck${data.item.id}`" />
                                    <label class="custom-control-label" :for="`contacusercheck${data.item.id}`"></label>
                                </div>
                            </template> -->

                            <template v-slot:cell(name)="data">
                                <img v-if="data.item.thumbnail" :src="data.item.thumbnail" alt="" class="rounded mr-3 border" height="48" />
                                <div v-if="!data.item.thumbnail" class="avatar-xs d-inline-block mr-2">
                                    <div class="avatar-title bg-soft-primary rounded-circle text-primary">
                                        <i class="mdi mdi-account-circle m-0"></i>
                                    </div>
                                </div>
                                <h5 class="m-0 d-inline-block align-middle">
                                    <a href="#" class="text-dark">{{ data.item.name }}</a>
                                </h5>
                            </template>

                            <template #cell(category)="data">
                                {{ data.value.name }}
                            </template>

                            <template v-slot:cell(price)="data">
                                $ {{ data.item.price }}
                            </template>

                            <template v-slot:cell(status)="data">
                                <span class="badge badge-soft-success" :class="{'badge-soft-danger': data.item.status === 'Deactive'}">{{ data.item.status }}</span>
                            </template>

                            <template v-slot:cell(action)="row">
                                <ul class="list-inline table-action m-0">
                                    <li class="list-inline-item">
                                        <nuxt-link :to="'/admin/products/'+row.item.slug" class="action-icon"><i class="mdi mdi-eye"></i></nuxt-link>
                                    </li>
                                    <li class="list-inline-item">
                                        <nuxt-link :to="'/admin/products/edit/'+row.item.slug" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></nuxt-link>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="javascript:void(0);" @click="confirmToDelete(row.item)" class="action-icon"><i class="mdi mdi-delete"></i></a>
                                    </li>
                                </ul>
                            </template> 
                        </b-table>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="dataTables_paginate paging_simple_numbers float-right">
                                <ul class="pagination pagination-rounded">
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
