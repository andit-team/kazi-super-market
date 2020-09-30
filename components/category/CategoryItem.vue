<template>
  <!-- Category Item box Start -->
         <div class="category-box text-center">
                <nuxt-link to="/products" class="offer-tile-block-link"></nuxt-link>
                <div class="offer-tile-header d-flex align-items-center">
                    <div class="offer-tile-header-roundel">
                    <img :src="categoryItem.offerImage" alt="offer">
                  </div>
                  <div class="offer-tile-header-title">
                    <span>{{categoryItem.title}}</span>
                  </div>
                </div>
                
                <div class="offer-tile-item-image-wrapper">
                  <div class="offer-tile-image-price"></div>
                  <div class="offer-tile-image">
                      <img :src="categoryItem.productImage">
                  </div>
                </div>
                <div class="offer-tile-item-description">
                    <p class="offer-tile-item-paragraph mb-2">{{categoryItem.subTitle}}</p>
                </div>
                <nuxt-link class="button theme-button" to="/products">
                  Shop now<i class="fas fa-chevron-right pl-2"></i>
                </nuxt-link>
              </div>
  <!-- Category Item box End -->
</template>

<script>
export default {
  // props: {
  //   offerImage: String,
  //   title: String,
  //   productImage: String,
  //   subTitle: String

  // },
  props: ['categoryItem', 'index'],
}
</script>

<style>
</style>