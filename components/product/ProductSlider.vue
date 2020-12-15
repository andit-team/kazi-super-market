<template>
  <div>
    <!-- products Area Start -->
    <section class="product-slider-area section-b-40-space">
      <div class="container">
        <!-- product Area Start -->
        <div class="row">
            <div class="col-12 mb-30">
                <div class="section-title d-flex justify-content-between align-content-center">
                  <h4>{{title}}</h4>
                  <nuxt-link :to="linkUrl" class="d-flex align-items-center">{{btnValue}}<i class="fas fa-angle-right ml-2"></i></nuxt-link>
                </div>
            </div>
        </div>
        <div class="row">
          <div class="col">
            <div v-swiper:mySwiper="swiperOption" v-if="recentlyViewedProduct">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(product,index) in recentlyViewedProduct"
                  :key="index"
                >
                  <!-- product box Start -->
                  <!-- <ProductItem  v-for="productItem in product" :key="productItem._id"
                  :product="productItem"
                  /> -->
                  <ProductItem
                  :product="product"
                  :index="index"
                  />
                  <!-- product box End -->
                </div>
              </div>
              <div class="swiper-button-prev testi_prev" slot="button-prev"><i class="fas fa-angle-left"></i></div>
              <div class="swiper-button-next testi_next" slot="button-next"><i class="fas fa-angle-right"></i></div>
            </div>

            <!-- If no recentlyViewedProduct -->
            <div class="no-recently-product text-center d-flex justify-content-center align-items-center" v-else>
              <p class="font-21 color-green pb-20">You have no recently viewed product.</p>
            </div>

          </div>
        </div>
        <!-- product Area End -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recentlyViewedProduct : JSON.parse(localStorage.getItem('recently_view_products')),
      title: 'Recently Viewed Products',
      btnValue: 'View all',
      linkUrl: '/products',
      swiperOption: {
        slidesPerView: 5,
        navigation: {
          nextEl: '.testi_next',
          prevEl: '.testi_prev'
        },
        spaceBetween: 20,
        freeMode: false,
        breakpoints: {
          1199: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 20
          }
        }
      },

    // recentlyViewedProduct: false,

    }
  },

}
</script>
<style>
.swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled {
	pointer-events: auto;
}
.swiper-button-prev, .swiper-container-rtl .swiper-button-next, .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
	background-image: none;
}
.swiper-button-next i, .swiper-button-prev i {
	font-size: 19px;
	color: var(--orange-color);
}
.swiper-button-prev, .swiper-button-next {
	width: 30px;
	height: 30px;
	background-color: #fff;
}
</style>