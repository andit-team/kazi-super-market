<template>
  <!-- Home product box Start -->
  <div class="product">
    <div class="imageWrapper">
      <div class="imageWrapperWrapper">
        <div class="tag position-absolute">on sale</div>
          <img :src="product.thumbnail" :alt="product.name">
      </div>
      <div class="discountedPriceSection">
        <div class="discountedPrice">
          <!-- <span>$ </span> -->
          <span>${{discountedPrice(product)}}</span>
        </div>
        <div class="price">
          <!-- <span> </span> -->
          <span v-if="product.discount">${{product.price}}</span>
        </div>
      </div>

      <div class="name">{{ textSorten(product.name,40) }}</div>
      <div class="overlay text">
        <p class="addText">Add to Shopping Bag</p>
        <span>
          <nuxt-link :to="'/products/'+product.slug" class="btnShowDetails">
            <span>Details</span>
            <span>  &gt;</span>
          </nuxt-link>
        </span>
      </div>
    </div>
    <section class="addButtonWrapper border-radius-small theme-button">
      <p class="buyText">Add to bag</p>
    </section>
  </div>
  <!-- Home product box End -->
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'
import { helper } from '../../helpers/helper'
export default {
  props: ['product', 'index'],

  data() {
    return {
      isLogin: true,
      // product: {},

      value: 50
    }
  },


  methods: {
    discountedPrice(product) {
      return product.price - (product.price *(product.discount)/100)
    },
    textSorten(str,len){
      return helper.textSort(str,len);
    },
  }
}
</script>

<style>
</style>