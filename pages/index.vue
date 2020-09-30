<template>
  <div>
    <BannerHomeSlider />
    <CategoryList />
    <HomeOnSaleProduct :products="products" />
    <HomeDealsProduct :products="products" />
    <ProductSlider :products="products" />
    <BannerAdvartise />
    <ProductSlider2 :products="products" />
    <Footer /> 
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BannerHomeSlider from '../components/banner/BannerHomeSlider'
import CategoryList from '../components/category/CategoryList'
import HomeOnSaleProduct from '../components/home/HomeOnSaleProduct'
import HomeDealsProduct from '../components/home/HomeDealsProduct'
import ProductSlider from '../components/product/ProductSlider'
import BannerAdvartise from '../components/banner/BannerAdvartise'
import ProductSlider2 from '../components/product/ProductSlider2'
// import CartSidebar from '../components/cart/CartSidebar'
import Footer from '../components/footer'
export default {
  data() {
    return {
      products: [],
    }
  },
  computed: {
    ...mapState({
      productslist: state => state.products.productslist,
    }),
  },
  mounted() {
    this.productsArray();
  },
  methods: {
    productsArray: function () {
      this.productslist.map((item) => {
        if (item.type === 'popular') {
          this.products.push(item)
        }
      })
    },
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Kazis Supermarket - Home',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'Your Rier is your doorsteps!' }
    ],
  },

}
</script>