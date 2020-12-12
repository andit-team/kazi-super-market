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
          <div class="col">

            <!-- product box Start -->
            <ProductItem  v-for="productItem in productItems" :key="productItem._id"
            :product="productItem"
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
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
      return {
        title: 'On Sale Products',
        btnValue: 'View All',
        linkUrl: '/products',
    }
  },

  computed: {
    ...mapGetters({productItems : 'product/allProducts'})
  },
  created() {
    this.FetchProduct();
  },
  methods: {
    ...mapActions({
      FetchProduct: 'product/getProducts',
    }),
  }
  
}

</script>
<style>
</style>