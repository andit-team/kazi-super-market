<template>
  <div>
    <Header />
    <CategoriesNav />
    <nuxt id="body-content"/>
    <div class="tap-top top-cls" v-scroll-to="'#body-content'">
      <div>
          <i class="fa fa-angle-up"></i>
      </div>
    </div>
    <CartSidebar />
    <b-button class="cart-small-view" v-b-toggle.sidebar-right>11 Items</b-button>
  </div>
</template>

<script>
import Header from '../components/header'
import CategoriesNav from '../components/header/CategoriesNav'
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