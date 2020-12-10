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
          <span>$ </span>
          <span>{{discountedPrice(product)}}</span>
        </div>
        <div class="price">
          <span>$ </span>
          <span>{{product.price}}</span>
        </div>
      </div>

      <!-- <div class="name">{{ product.name }}</div> -->
      <div class="name">{{ textSorten(product.name,25) }}</div>
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
// import { helper } from '../../helpers/helper'
export default {
  props: ['product', 'index'],
  methods: {
    discountedPrice(product) {
      return product.price - (product.price *(product.discount)/100)
    },
    textSorten(str,n){
      if(str){
        return (str.length > n) ? str.substr(0, n-1) + '...' : str;
      }
    },
  }
}
</script>

<style>
</style>