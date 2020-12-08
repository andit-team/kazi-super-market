<template>
  <section class="advartise-area light-layout section-b-space">
    <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">

      <div class="test-wrap">
      
        {{bannerItems.data}}
      </div>



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
export default {
  data() {
    return {
      imagepath1: require('@/assets/images/banner-img/addvartise-1.jpg'),
      imagepath2: require('@/assets/images/banner-img/addvartise-2.jpg'),
    }
  },
    computed: {
    ...mapGetters({bannerItems : 'promotional_banner/getPromotionalBanners'})
  },
  created() {
    this.FetchBanner();
    this.FetchBannerTitle();
  },
  methods: {
    ...mapActions({
      FetchBanner: 'promotional_banner/getPromotionalBanners',
      FetchBannerTitle: 'promotional_banner/fetchBanners',
  }),
  }

}
</script>