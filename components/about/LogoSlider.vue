<template>
  <div>
    <!-- products Area Start -->
    <section class="home-deals-product-area different-bg section-b-space">
      <div class="container">
        <!-- product Area Start -->
        <div class="row">
          <div class="col-12 col-md-12">
            <div v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide" v-for="logoItem in clientLogos" :key="logoItem.id"
                >
                  <!-- Logo box Start -->
                  <img :src="logoItem.logoImage" alt="kazis">
                  <!-- Logo box End -->
                </div>
              </div>
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
      swiperOption: {
        slidesPerView: 6,
        spaceBetween: 20,
        freeMode: false,
        breakpoints: {
          1199: {
            slidesPerView: 6,
            spaceBetween: 20
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20
          }
        }
      },

        "clientLogos": [
        {
            "id": 1,
            "logoImage": require('@/assets/images/logo-slider/1.jpg')
        },
        {
            "id": 2,
            "logoImage": require('@/assets/images/logo-slider/2.jpg')
        },
        {
            "id": 3,
            "logoImage": require('@/assets/images/logo-slider/3.jpg')
        },
        {
            "id": 4,
            "logoImage": require('@/assets/images/logo-slider/4.jpg')
        },
        {
            "id": 5,
            "logoImage": require('@/assets/images/logo-slider/5.jpg')
        },
        {
            "id": 6,
            "logoImage": require('@/assets/images/logo-slider/1.jpg')
        },
        {
            "id": 7,
            "logoImage": require('@/assets/images/logo-slider/2.jpg')
        },
    ],

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
.home-deals-product-area .section-title h2{
color: var(--black-color);
}
</style>