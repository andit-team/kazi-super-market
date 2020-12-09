<template>
  <section class="advartise-area light-layout section-b-space">
    <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="advartise-img-wrap">
          <nuxt-link to="#"><img :src="imagepath1" alt="banner"></nuxt-link>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="advartise-img-wrap">
          <nuxt-link to="#"><img :src="imagepath2" alt="banner"></nuxt-link>      
        </div>
      </div>
    </div></div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { helper } from '../../helpers/helper'
export default {
  data() {
    return {
      imagepath1: require('@/assets/images/banner-img/addvartise-1.jpg'),
      imagepath2: require('@/assets/images/banner-img/addvartise-2.jpg'),
    }
  },
  created() {
    this.imagepath1 = helper.getBanarSrc('footer-top-banner-first') ? helper.getBanarSrc('footer-top-banner-first').thumbnail : require('@/assets/images/banner-img/addvartise-1.jpg');
    this.imagepath2 = helper.getBanarSrc('footer-top-banner-second') ? helper.getBanarSrc('footer-top-banner-second').thumbnail : require('@/assets/images/banner-img/addvartise-2.jpg');
  },
}
</script>