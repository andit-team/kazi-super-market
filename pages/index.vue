<template>
  <div>
    <BannerHomeSlider />
    <HomeCategoryList />
    <HomeOnSaleProduct />
    <HomeDealsProduct />
    <ProductSlider />
    <BannerAdvartise />
    <!-- <ProductSlider2 /> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

import { helper } from '../helpers/helper'
export default {
  layout: 'public',
  
  /*
  ** Headers of the page
  */
  head: {
    title: 'Kazis Supermarket - Home',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'Your Smart shopping point' }
    ],
  },

}
</script>