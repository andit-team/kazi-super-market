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
  </div>
</template>

<script>
import Header from '../components/header'
import CategoriesNavMobile from '../components/header/CategoriesNavMobile'
import CartSidebar from '../components/cart/CartSidebar'
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