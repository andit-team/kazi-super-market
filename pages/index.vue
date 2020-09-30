<template>
  <div>
    <BannerHomeSlider />
    <HomeCategoryList />
    <HomeOnSaleProduct />
    <HomeDealsProduct />
    <ProductSlider />
    <BannerAdvartise />
    <ProductSlider2 />
    <Footer /> 
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BannerHomeSlider from '../components/banner/BannerHomeSlider'
import HomeCategoryList from '../components/home/HomeCategoryList'
import HomeOnSaleProduct from '../components/home/HomeOnSaleProduct'
import HomeDealsProduct from '../components/home/HomeDealsProduct'
import ProductSlider from '../components/product/ProductSlider'
import BannerAdvartise from '../components/banner/BannerAdvartise'
import ProductSlider2 from '../components/product/ProductSlider2'
// import CartSidebar from '../components/cart/CartSidebar'
import Footer from '../components/footer'
export default {

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