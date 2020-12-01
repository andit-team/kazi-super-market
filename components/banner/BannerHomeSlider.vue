<template>
  <div>
    <!-- <h2 class="title">{{ $t('home.title') }}</h2> -->
    <!-- <h2 class="subtitle">{{ $t('home.introduction') }}</h2> -->
    <!-- Home slider -->
    <div class="slide-1 home-slider">
      <div class="container">
        <div class="row">
        <div class="col-12 col-lg-3 d-xs-none d-sm-none d-md-none d-lg-block d-xl-block">
          <CategoriesNav />
        </div>
          <div class="col-12 col-lg-9">

            <div v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="sliderItem in sliderData.data" :key="sliderItem.id">
                  <!-- <div
                    class="home text-center"
                    :class="item.alignclass"
                    v-bind:style="{ 'background-image': 'url(' + sliderItem.thumbnail + ')' }"
                  > -->
                  
                  <div
                    class="home text-center"
                    v-bind:style="{ 'background-image': 'url(' + sliderItem.thumbnail + ')' }"
                  >
                    <div class="slider-contain">
                      <div>
                        <h1>{{ sliderItem.slider_title }}</h1>
                        <h4>{{ sliderItem.slider_subtitle }}</h4>
                        <nuxt-link :to="sliderItem.btn_link" class="btn theme-button mt-20">Read More</nuxt-link>
                        <!-- <nuxt-link :to="{ path: '/collection/leftsidebar/all'}" class="btn theme-button mt-20">Read More</nuxt-link> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Home slider end -->
  </div>
</template>
<script type="text/javascript">
import { mapGetters,mapActions } from 'vuex'
// import CategoriesNav from '../header/CategoriesNav'
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      // items: [
      //   {
      //     imagepath: require('@/assets/images/banner-img/1.jpg'),
      //     subtitle: 'Fresh organic Tomatoes',
      //     title: 'Spring Sale 50% Off',
      //     alignclass: 'p-left'
      //   },
      //   {
      //     imagepath: require('@/assets/images/banner-img/2.jpg'),
      //     subtitle: 'Exclusive offer-20% off this week',
      //     title: 'Double BBQ Bacon Cheese 2019',
      //     alignclass: 'p-left'
      //   },
      //   {
      //     imagepath: require('@/assets/images/banner-img/3.jpg'),
      //     subtitle: 'Fresh organic Tomatoes',
      //     title: 'Spring Sale 50% Off',
      //     alignclass: 'p-left'
      //   }
      // ]
    }
  },
  computed: {
    ...mapGetters({
      sliderData : 'main_slider/getMainSliders'
    })
  },
  methods: {
    ...mapActions({
      mainSliders : 'main_slider/getMainSliders',
    })
  },
  created() {
    this.mainSliders();
  }
}
</script>