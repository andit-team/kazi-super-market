<template>
  <div>
    <Header />
    <CategoriesNavMobile />
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

export default {
  head() {
    return {
      title: 'Kazis Supermarket'
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 3000)
    })
  },

}
</script>