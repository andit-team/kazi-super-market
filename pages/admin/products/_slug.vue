<script>
import { mapGetters,mapActions } from 'vuex';
import { helper } from '../../../helpers/helper'

import {
    products
} from "../products/data-products";

/**
 * Product-detail component
 */
export default {
    head() {
        return {
            title: `${this.title} | Kazissupermarket - Nuxtjs Responsive Admin Dashboard Template`,
        };
    },
    middleware: "admin-auth",
    data() {
        return {
            title: "Product Detail",
            items: [{
                    text: "Kazissupermarket",
                },
                {
                    text: "Products",
                },
                {
                    text: "Product Details",
                    active: true,
                },
            ],
            product:{},
        };
    },

    async created(){
       this.product = await this.FetchProduct(this.$route.params.slug);
    },
    methods: {
        ...mapActions({
            FetchProduct : 'product/fatchProduct',
        }),
        discountedPrice(product) {
            return product.price - (product.price *(product.discount)/100)
            console.log(product);
        },
        /**
         * Change the product
         */
        changeImage(data) {
            document.getElementById("myImage").src = data.target.src
        },
    },
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="row justify-content-center">
                                <div class="col-xl-12">
                                    <b-card no-body class="product-details-photo-tab border-0">
                                        <b-tabs end>
                                        <b-tab v-for="imageItem in product.images" :key="imageItem.id">
                                            <div class="text-center"><b-card-img bottom :src="imageItem.url" class="img-fluid"></b-card-img></div>
                                            <template v-slot:title>
                                            <b-card-img bottom :src="imageItem.url" class="rounded"></b-card-img>
                                            </template>
                                        </b-tab>
                                        </b-tabs>
                                    </b-card>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div>
                                <div>
                                    <!-- <nuxt-link to="#" class="text-primary">{{product.parent_category.name}} </nuxt-link> <i class="fas fa-angle-right"></i>
                                    <nuxt-link to="#" class="text-primary">{{product.category.name}} </nuxt-link> -->
                                </div>
                                <h4 class="mb-1">
                                    {{product.name}}
                                    <nuxt-link :to="'/admin/products/edit/'+product.slug" class="text-muted">
                                        <i class="mdi mdi-square-edit-outline ml-2"></i>
                                    </nuxt-link>
                                </h4>

                                <p class="text-muted mr-3 font-16">
                                    <span class="mdi mdi-star text-warning"></span>
                                    <span class="mdi mdi-star text-warning"></span>
                                    <span class="mdi mdi-star text-warning"></span>
                                    <span class="mdi mdi-star text-warning"></span>
                                    <span class="mdi mdi-star"></span>
                                </p>

                                <div class="mt-3">
                                    <h6 class="text-danger text-uppercase">{{product.discount}} % Off</h6>
                                    <h4>
                                        Price : <span class="text-muted mr-2"><del>$ {{product.price}}</del></span>
                                        <b>$ {{discountedPrice(product)}}</b>
                                    </h4>
                                </div>
                                <hr />

                                <div>
                                    <p> 
                                        {{product.description}}
                                    </p>

                                    <div class="mt-3">
                                        <h5 class="font-size-14">Specification :</h5>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <ul class="list-unstyled product-desc-list">
                                                    <li v-for="tagItem in product.tags" :key="tagItem.key">
                                                        <i class="mdi mdi-circle-medium mr-1 align-middle"></i>
                                                        {{tagItem}}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end row -->
                </div>
            </div>
            <!-- end card -->
        </div>
    </div>
    <!-- end row -->
</div>
</template>
