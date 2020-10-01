<template>
  <div>
    <!-- <h2 class="title">{{ $t('home.title') }}</h2> -->
    <!-- <h2 class="subtitle">{{ $t('home.introduction') }}</h2> -->
    <!-- Home slider -->
    <div class="slide-1 home-slider">
      <div class="container">
        <div class="row">
        <div class="col-12 col-lg-3">
          <CategoriesNav />
        </div>
          <div class="col-12 col-lg-9">
            <div v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in items" :key="index">
                  <div
                    class="home text-center"
                    :class="item.alignclass"
                    v-bind:style="{ 'background-image': 'url(' + item.imagepath + ')' }"
                  >
                    <div class="slider-contain">
                      <div>
                        <h1>{{ item.subtitle }}</h1>
                        <h4>{{ item.title }}</h4>
                        <nuxt-link :to="{ path: '/collection/leftsidebar/all'}" class="btn theme-button mt-20">Read More</nuxt-link>
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
import CategoriesNav from '../header/CategoriesNav'
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
      items: [
        {
          imagepath: require('@/assets/images/banner-img/1.jpg'),
          title: 'Fresh organic Tomatoes',
          subtitle: 'Spring Sale 50% Off',
          alignclass: 'p-left'
        },
        {
          imagepath: require('@/assets/images/banner-img/2.jpg'),
          title: 'Exclusive offer-20% off this week',
          subtitle: 'Double BBQ Bacon Cheese 2019',
          alignclass: 'p-left'
        },
        {
          imagepath: require('@/assets/images/banner-img/3.jpg'),
          title: 'Fresh organic Tomatoes',
          subtitle: 'Spring Sale 50% Off',
          alignclass: 'p-left'
        }
      ]
    }
  }
}
</script>