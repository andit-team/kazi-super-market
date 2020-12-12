<template>
<div>
    <!-- Product/Category Searching Loader -->
    <div v-if="!loaded" class="loading-div position-relative">
      <p><b-spinner label="Spinning" class="color-light-green"></b-spinner></p>
    </div>

    <div v-else>
      <!-- <Breadcrumbs :title="textSorten(product.name, 25)" /> -->

      <div class="breadcrumb-section">
        <div class="container">
          <div class="row">         
            <div class="col-12">
              <nav aria-label="breadcrumb" class="theme-breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><nuxt-link :to="{ path: '/' }">Home</nuxt-link></li>

                <li class="breadcrumb-item"><nuxt-link :to="'/categories/'+product.parent_category.slug">{{product.parent_category.name}}</nuxt-link></li>
                <!-- <li class="breadcrumb-item active" v-else>Products</li> -->
                <li class="breadcrumb-item"><nuxt-link to="#">{{product.category.name}}</nuxt-link></li>
                <li class="breadcrumb-item active" >{{textSorten(product.name, 25)}}</li>
              </ol>
              </nav>
              <hr>
            </div>
          </div>
        </div>
      </div>

      <section class="product-page product-details-page section-t-40-space section-b-space">
        <div class="container">
          <div class="row">
              <div class="col-lg-7">
                  <div class="row justify-content-center">
                    <div class="col-xl-12">

                      <b-card no-body class="product-details-photo-tab">
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

              <div class="col-lg-5">
                  <div>
                      <div>
                          <nuxt-link to="#" class="color-orange">{{product.category.name}}</nuxt-link>
                      </div>
                      <h4 class="mb-1">
                          {{product.name}}
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
                              Price :
                              <span class="text-muted mr-2">
                                  <del>$ {{product.price}}</del>
                              </span>
                              <b>$ {{discountedPrice(product)}}</b>
                          </h4>
                      </div>
                      <hr />

                      <div>
                          <p> {{product.summary}}
                          </p>

                          <div class="mt-3 mb-2">
                              <h5 class="font-size-14 mb-2">Specification :</h5>
                              <div class="row">
                                  <div class="col-md-6">
                                      <ul class="list-unstyled product-desc-list">
                                          <li v-for="tagItem in product.tags" :key="tagItem.key">
                                              <i class="mdi mdi-circle-medium mr-1 align-middle"></i>
                                              {{tagItem}}
                                          </li>
                                          <!-- <li>
                                              <i class="mdi mdi-circle-medium mr-1 align-middle"></i>
                                              Cotton
                                          </li>
                                          <li>
                                              <i class="mdi mdi-circle-medium mr-1 align-middle"></i>
                                              All Sizes available
                                          </li>
                                          <li>
                                              <i class="mdi mdi-circle-medium mr-1 align-middle"></i>
                                              4 Different Color
                                          </li> -->
                                      </ul>
                                  </div>
                                  <!-- <div class="col-md-6">
                                      <ul class="list-unstyled product-desc-list">
                                          <li>
                                              <i class="mdi mdi-circle-medium mr-1 align-middle"></i>
                                              All Sizes available
                                          </li>
                                          <li>
                                              <i class="mdi mdi-circle-medium mr-1 align-middle"></i>
                                              4 Different Color
                                          </li>
                                      </ul>
                                  </div> -->
                              </div>
                          </div>

                          <div>
                              <form class="form-inline mb-3">
                                  <label class="my-1 mr-2" for="quantityinput">Quantity</label>
                                  <select class="custom-select my-1 mr-sm-3" id="quantityinput">
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                      <option value="6">6</option>
                                      <option value="7">7</option>
                                  </select>
                              </form>

                              <div>
                                  <button type="button" class="btn bg-light-green text-white waves-effect waves-light">
                                      <span class="btn-label">
                                          <i class="mdi mdi-cart"></i>
                                      </span>Add to cart
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <!-- end row -->

          <div class="row">
            <div class="col">
            <b-card no-body class="mt-5">
                <b-tabs card>
                  <b-tab title="Description" active>
                    <div class="product-details-content-box">
                      <p v-html="product.description"></p>
                    </div>
                  </b-tab>
                  <b-tab title="Reviews">

                    <div class="product-details-content-box">
                      <div class="media comment-box mb-3">
                        <img :src="require('@/assets/images/profile-img/owner2.png')" class="mr-3" alt="author" height="50px">
                        <div class="media-body">
                          <h5 class="mt-0">Suraiya Aysha</h5>
                          <div class="given-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                          </div>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </div>
                      </div>
                      <div class="media comment-box mb-3">
                        <img :src="require('@/assets/images/profile-img/owner2.png')" class="mr-3" alt="author" height="50px">
                        <div class="media-body">
                          <h5 class="mt-0">Suraiya Aysha</h5>
                          <div class="given-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                          </div>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </div>
                      </div>
                      <div class="media comment-box mb-3">
                        <img :src="require('@/assets/images/profile-img/owner2.png')" class="mr-3" alt="author" height="50px">
                        <div class="media-body">
                          <h5 class="mt-0">Suraiya Aysha</h5>
                          <div class="given-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                          </div>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </div>
                      </div>
                    </div>

                    <div class="product-details-content-box write-review mt-4">
                      <h4 class="mb-2">Submit review:</h4>

                      <div v-if="!isLogin">
                        <p>To submit review <nuxt-link to="/customer/login">Login</nuxt-link> please!</p>
                        <h5 class="d-block mt-4"><nuxt-link to="/customer/login" class="theme-button">Login</nuxt-link></h5>
                      </div>
                      
                      <form v-else>
                        <textarea id="textarea-default" placeholder="Write review here..." rows="2" class="mb-2 form-control" wrap="soft"></textarea>
                        <b-form-rating v-model="ratingValue" id="rating-inline" inline color="#ff8800" class="mb-2"></b-form-rating>
                        <button type="submit" class="theme-button d-block">Submit Review</button>
                      </form>
                    </div>

                  </b-tab>
                </b-tabs>
              </b-card>
            </div>
          </div>
        </div>
      </section>
      <!-- Related Product Slider Area -->
      <RelatedProductSlider />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { helper } from '../../helpers/helper'
export default {
  layout: 'public',

  data() {
    return {
      ratingValue: 4, 
      isLogin: true,
      product: {},
      // productCategoryId: '',
      // productCategorySlug: '',
      loaded: false,
    }
  },
  async created() {
    this.product = await this.FetchProduct(this.$route.params.slug);
    let recentView = [];
    let fromLocal = JSON.parse(localStorage.getItem('recently_view_products'));
    if(fromLocal){
      fromLocal.map(function(LocalProduct){
          recentView.push(LocalProduct)
          recentView.push(this.p)
          // if(LocalProduct._id !== this.p._id){
          //   recentView.push(this.p)
          // }

        // if(LocalProduct._id === this.p._id){
        //   console.log('sss')
        // }else{
        //   console.log('eee')
        // }
      },{p : this.product})
    }else{
      recentView.push(this.product)
    }
    var uniq = recentView.filter((v,i,a)=>a.findIndex(t=>(t._id === v._id))===i)
    console.log(uniq);
    localStorage.setItem('recently_view_products', JSON.stringify(uniq))
    // recentView.push(this.product)
    // localStorage.setItem('recently_view_products', JSON.stringify(recentView))
    // console.log(this.product);
    this.loaded = true
  },
  // computed: {
  //   getDetail: function () {
  //     return this.$store.getters['product/getProductByCategory'](
  //       this.$route.params.parent_category.slug
  //     )
  //   },
  // },
  // mounted () {
  //   this.relatedProducts()
  // },

  // computed: {
  //   ...mapGetters({
  //     categoriesData : 'category/allCategories',
  //     categoryData : 'category/getCategory',
  //     tagData : 'product/allTags',
  //     products : 'product/category_wise_product',
  //   }),
  // },

  methods: {
    ...mapActions ({
      FetchProduct: 'product/fatchProduct'
    }),
    discountedPrice(product) {
      return product.price - (product.price *(product.discount)/100)
    },

    textSorten(str,len){
      return helper.textSort(str,len);
    },
    
  },

}
</script>

<style>

</style>