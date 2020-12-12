<template>
  <div>
    <Header />
    <CategoriesNavMobile />
    <!-- {{bannars}} -->
    <nuxt id="body-content"/>
    <div class="tap-top top-cls" v-scroll-to="'#body-content'">
      <div>
        <i class="fa fa-angle-up"></i>
      </div>
    </div>
    <CartSidebar />
        
    <Footer1 />
  </div>
</template>

<script>
import { mapActions,mapState } from 'vuex'
export default {
  head() {
    return {
      title: 'Kazis Supermarket'
    }
  },
  mounted() {
    this.$store.dispatch("promotional_banner/getPromotionalBannersForFrontend"),

    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 3000)
    })
  },
  computed: {
    bannars() {
      return this.$store.state.promotional_banner.banners
    }
  },
  // updated(){
  //   console.log(this.bannars)
  //   // if(this.bannars.data){
  //     localStorage.setItem('banners', JSON.stringify(this.bannars.data))
  //   // }
  // },
    watch: {
    'bannars'(newVal, oldVal) {
      if(newVal.data){
        localStorage.setItem('banners', JSON.stringify(newVal.data))
      }
    }
  },
}
</script>