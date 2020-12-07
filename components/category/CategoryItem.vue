<template>
  <!-- Category Item box Start -->
  <div class="category-box text-center">
    <nuxt-link v-if="parentCat" :to="'/products?parent_category='+this.parentCat.slug+'&category='+categoryItem.slug" class="offer-tile-block-link"></nuxt-link>
    <nuxt-link v-else :to="'/categories/'+categoryItem.slug" class="offer-tile-block-link"></nuxt-link>
    <div class="offer-tile-header d-flex align-items-center justify-content-center">
      <!-- <div class="offer-tile-header-roundel">
        <img :src="categoryItem.offerImage" alt="offer">
      </div> -->
      <div class="offer-tile-header-title">
        <span>{{categoryItem.name}}</span>
      </div>
    </div>
    
    <div class="offer-tile-item-image-wrapper">
      <div class="offer-tile-image-price"></div>
      <div class="offer-tile-image">
          <img :src="categoryItem.thumbnail">
      </div>
    </div>
    <div class="offer-tile-item-description">
        <p class="offer-tile-item-paragraph mb-2 mt-2">{{categoryItem.description}}</p>
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
  props: ['categoryItem', 'index','parentCat'],
}
</script>