<template>
  <div>
    <!-- products Area Start -->
    <section class="product-slider-area section-b-40-space light-layout">
      <div class="container">
        <!-- product Area Start -->
        <div class="row">
          <div class="col-12 mb-30">
            <div class="section-title d-flex justify-content-between align-content-center">
              <h4>{{title}}</h4>
              <nuxt-link :to="linkUrl" class="d-flex align-items-center">{{btnValue}}<i class="fas fa-angle-right ml-2"></i></nuxt-link>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-3 col-lg-2" v-for="(product,index) in products" :key="index">
            <!-- product box Start -->
            <ProductItem
            :product="product"
            :index="index"
            />
            <!-- product box End -->
        </div>
        <!-- product Area End -->
      </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProductItem from '../product/ProductItem'
export default {
    props: ['products'],
  data() {
    return {
      title: 'On Sale Products',
      btnValue: 'View All Products',
      linkUrl: '#',
    }
  },

}
</script>
<style>
</style>