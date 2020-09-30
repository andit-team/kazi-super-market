<template>
  <!-- Home product box Start -->
  <div class="product">
    <div class="imageWrapper">
      <div class="imageWrapperWrapper">
        <div class="tag position-absolute">{{product.tag}}</div>
          <img :src='getImgUrl(imageSrc ? imageSrc : product.productImage)' :alt="product.title">
      </div>
      <div class="discountedPriceSection">
        <div class="discountedPrice">
          <span>$ </span>
          <span>{{product.price}}</span>
        </div>
        <div class="price">
          <span>$ </span>
          <span>{{product.oldPrice}}</span>
        </div>
      </div>
      <div class="name">{{product.title}}</div>
      <div class="overlay text">
        <p class="addText">Add to Shopping Bag</p>
        <span>
          <a href="/tatka-egg-pack-12pcs" class="btnShowDetails">
            <span>Details</span>
            <span>  &gt;</span>
          </a>
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
import { mapState, mapGetters } from 'vuex'
import { log } from 'util'
export default {
  props: ['product', 'index'],
  data(){
    return {
      imageSrc: '',
    }
  },
  computed: {
    ...mapState({
      productslist: state => state.products.productslist
    }),
  },
  methods: {
    getImgUrl(path) {
      return require('@/assets/images/product-img/' + path)
    },
  }
}
</script>

<style>
</style>