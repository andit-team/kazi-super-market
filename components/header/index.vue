<template>
  <div>
    <!-- Menu After Login Area Start -->
    <header class="menu-section-area padding-zero" >
      <TopBar />
      
      <!-- Navigation -->
      <b-navbar toggleable="lg" type="dark" id="mainNav" :class="{classNotSticky: scrollPosition < 100, classSticky: scrollPosition > 100}">
        <b-container>
            
          <b-navbar-brand to="/">
            <b-img :src='"@/assets/images/logo.png"' class="img-fluid desktop-logo" alt="logo" />
            <b-img :src='"@/assets/images/logo-mobile.png"' class="img-fluid mobile-logo" alt="logo" />
          </b-navbar-brand>

          <!-- For Mobile Search -->
          <b-navbar-nav class="d-xs-block d-sm-block d-md-block d-lg-none d-xl-none">
            <b-nav-form inline class="product-search-form position-relative">
              <b-form-input @keyup="searchProduct()" v-model="searchKeyWord" size="sm" placeholder="Search product/category"></b-form-input>
              <b-button class="btn-search" size="sm" type="submit"><b-icon-search /></b-button>

              <!-- Product/Category Search result box Start -->
              <div v-if="searchKeyWord" class="search_result_box position-absolute rounded">
                <ul class="list-unstyled">

                  <li v-for="productItem in SearchProductItems" :key="productItem._id" style="border-bottom:1px solid" class="pb-3">
                    <nuxt-link :to="'/products/'+productItem.slug" class="media align-items-center">
                      <div class="mr-3 search-result-img-wrap"><img :src="productItem.thumbnail" :alt="productItem.name"></div>
                      <div class="media-body">
                        <h5 class="mt-0 mb-1">{{ textSorten(productItem.name,40) }}</h5>
                         <h5>${{discountedPrice(productItem)}} <span v-if="productItem.discount" class="text-muted" style="text-decoration: line-through">${{productItem.price}}</span></h5>
                      </div>
                    </nuxt-link>
                  </li>

                </ul>
              </div>
              <!-- Product/Category Search result box End -->

            </b-nav-form>
          </b-navbar-nav>
          <!-- For Mobile Search -->

          <!-- For Desktop Device Only -->
          <div class="middle-nav-wrap align-items-center w-100 d-xs-none d-sm-none d-md-none d-lg-flex d-xl-flex">
            <b-navbar-nav class="middle-nav-desktop middle-nav-left-list">
              <b-nav-item to="/categories/">List</b-nav-item>
              <b-nav-item to="/categories/">Catalogue</b-nav-item>
            </b-navbar-nav>

            <b-nav-form inline class="product-search-form ml-auto position-relative">
              <div class="input-group">
                <input type="text" @keyup="searchProduct()" v-model="searchKeyWord"  class="form-control"  placeholder="Search product/category">
                <div class="input-group-append">
                  <button type="submit" class="btn btn-search theme-button"><b-icon-search /></button>
                </div>
              </div>

              <!-- Product/Category Search result box Start -->
              <div v-if="searchKeyWord" class="search_result_box position-absolute rounded">
                <ul class="list-unstyled">

                  <li v-for="productItem in SearchProductItems" :key="productItem._id">
                    <nuxt-link :to="'/products/'+productItem.slug" class="media align-items-center">
                      <div class="mr-3 search-result-img-wrap"><img :src="productItem.thumbnail" :alt="productItem.name"></div>
                      <div class="media-body">
                        <h5 class="mt-0 mb-1">{{ textSorten(productItem.name,40) }}</h5>
                         <h5>${{discountedPrice(productItem)}} <span v-if="productItem.discount" class="text-muted" style="text-decoration: line-through">${{productItem.price}}</span></h5>
                      </div>
                    </nuxt-link>
                  </li>

                </ul>
              </div>
              <!-- Product/Category Search result box End -->

            </b-nav-form>

            <b-navbar-nav class="ml-auto middle-nav-desktop middle-nav-right-list">
              <li class="rounded-circle"><b-icon-check-circle-fill></b-icon-check-circle-fill>Free delivery</li>
              <li class="rounded-circle"><b-icon-lock-fill></b-icon-lock-fill>Safe payment</li>
              <li class="rounded-circle"><b-icon-bell-fill></b-icon-bell-fill>24/7 Support</li>
            </b-navbar-nav>

          </div>
          <!-- For Desktop Device Only -->

          <!-- For Mobile/Small Device Only -->
          <b-navbar-toggle target="nav-collapse">
            <template v-slot:default="{ expanded }">
              <b-icon v-if="expanded" icon="x"></b-icon>
              <b-icon v-else icon="list"></b-icon>
            </template>
          </b-navbar-toggle>

          <!-- Right aligned nav items -->
          <b-collapse id="nav-collapse" is-nav>

            <b-navbar-nav class="ml-auto d-xs-block d-sm-block d-md-block d-lg-none d-xl-none">

              <b-nav-item to="#">Shopping</b-nav-item>
              <b-nav-item to="#">Stores</b-nav-item>
              <b-nav-item to="#">Everyday rewards</b-nav-item>
              <b-nav-item to="/categories">List</b-nav-item>
              <b-nav-item to="/categories">Catalogue</b-nav-item>
              <b-nav-item to="#">My Weekly picks</b-nav-item>
              <b-nav-item to="#">Online only</b-nav-item>
              <b-nav-item to="#">Half price</b-nav-item>

            </b-navbar-nav>

          </b-collapse>
        </b-container>
      </b-navbar>
      <BottomNav />
    </header>
  </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'
import { helper } from '../../helpers/helper'
import TopBar from './TopBar'
import BottomNav from './BottomNav'
export default {
  components: {
  },
  data() {
    return {
      scrollPosition: null,
      searchKeyWord : null,
      isSearch: false,
    }
  },
  computed: {
    ...mapGetters({
      SearchProductItems : 'product/productSearchResultByKeyword',
    }),

  },
  methods: {
    ...mapActions({
      mainProductSearchResult : 'product/mainSearchResult',
    }),
    async searchProduct(){
      // this.loading = true;
      await this.mainProductSearchResult({key:this.searchKeyWord})
      // this.loading = false;
    },
    discountedPrice(productItem) {
      return productItem.price - (productItem.price *(productItem.discount)/100)
    },
    textSorten(str,len){
      return helper.textSort(str,len);
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
    },

  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  destroy() {
    window.removeEventListener('scroll', this.updateScroll)
  }

}
</script>
<style>
</style>