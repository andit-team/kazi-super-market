<template>
  <div>
    <b-sidebar id="sidebar-right" title="Added Product" bg-variant="white" right shadow backdrop class="cart-sidebar">
      <div class="px-3 py-2">

      <!-- Product List Start -->
        <div class="cart-product-list d-flex align-items-center justify-content-between">
          <b-form-spinbutton id="sb-vertical" v-model="value" vertical></b-form-spinbutton>
          <img :src="require('@/assets/images/product-img/product-1.png')" alt="product">
          <p>product title</p>
          <p>$90</p>
          <button><b-icon-x></b-icon-x></button>
        </div>
      <!-- Product List End -->

      </div>

     <template v-slot:footer>
       <div class="px-3 py-2">
        <button id="placeOrderButton" class="d-flex align-items-center justify-content-space-between w-100 text-color-white">
          <span>Place Order</span>
          <span>Total: $8956</span>
        </button>
       </div>
      </template>

    </b-sidebar>
  </div>
</template>

<script>
export default {
 data() {
      return {
        value: 50
      }
    }
}
</script>

<style>

</style>