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
                        <div class="col-lg-5">
                            <div class="row justify-content-center">
                                <div class="col-xl-8">
                                    <div id="product-carousel" class="carousel slide product-detail-carousel" data-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <div>
                                                    <img src="~/assets/admin/images/products/product-6.png" alt="product-img" id="myImage" class="img-fluid" />
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <div>
                                                    <img src="~/assets/admin/images/products/product-8.png" alt="product-img" class="img-fluid" />
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <div>
                                                    <img src="~/assets/admin/images/products/product-1.png" alt="product-img" class="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                        <ol class="carousel-indicators product-carousel-indicators mt-2">
                                            <li data-target="#product-carousel" data-slide-to="0" class="active">
                                                <img src="~/assets/admin/images/products/product-6.png" @click="changeImage($event)" alt="product-img" class="img-fluid product-nav-img" />
                                            </li>
                                            <li data-target="#product-carousel" data-slide-to="1">
                                                <img src="~/assets/admin/images/products/product-8.png" @click="changeImage($event)" alt="product-img" class="img-fluid product-nav-img" />
                                            </li>
                                            <li data-target="#product-carousel" data-slide-to="2">
                                                <img src="~/assets/admin/images/products/product-1.png" @click="changeImage($event)" alt="product-img" class="img-fluid product-nav-img" />
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-7">
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
                                                    <li>
                                                        <i class="mdi mdi-circle-medium mr-1 align-middle"></i>
                                                        <!-- {{product.unit.name}} -->
                                                    </li>
                                                    <li>
                                                        <i class="mdi mdi-circle-medium mr-1 align-middle"></i>
                                                        {{product.metaTitle}}
                                                    </li>
                                                    <li>
                                                        <i class="mdi mdi-circle-medium mr-1 align-middle"></i>
                                                        {{product.tags}}
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
