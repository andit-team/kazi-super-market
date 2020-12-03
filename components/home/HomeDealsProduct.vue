<template>
  <div>
    <!-- products Area Start -->
    <section class="home-deals-product-area product-slider-area section-b-40-space" :style="{ 'background-image': 'url(' + bannerImg + ')' }">
      <div class="container">
        <!-- product Area Start -->
        <div class="row">
          <div class="col-12 col-md-4 col-lg-3">
            <div class="section-title d-flex flex-column justify-content-center align-content-center h-100">
              <h2>{{title}}</h2>
              <p>{{subTitle}}</p>
            </div>
          </div>
          <div class="col-12 col-md-8 col-lg-9">
            <div v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(product,index) in products"
                  :key="index"
                >
                  <!-- product box Start -->
                  <ProductItemOnlyStatic
                  :product="product"
                  :index="index"
                  />
                  <!-- product box End -->
                </div>
              </div>
              <div class="swiper-button-prev testi_prev" slot="button-prev"><i class="fas fa-angle-left"></i></div>
              <div class="swiper-button-next testi_next" slot="button-next"><i class="fas fa-angle-right"></i></div>
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
      bannerImg: require('@/assets/images/banner-img/deal-banner.jpg'),
      title: 'Deals of the Day',
      subTitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, dolore. Lorem ipsum dolor sit.',
      swiperOption: {
        slidesPerView: 4,
        navigation: {
          nextEl: '.testi_next',
          prevEl: '.testi_prev'
        },
        spaceBetween: 20,
        freeMode: false,
        breakpoints: {
          1199: {
            slidesPerView: 3,
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

        "products": [
        {
            "id": 1,
            "title": "Elsha Fish",
            "description": "Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",
            "type": "popular",
            "alt": "kazis supermarket",
            "images": "1.jpg",
            "price": "89",
            "oldPrice": "95",
            "tag": "on sale",
            "productImage": "product-1.png"
        },
        {
            "id": 2,
            "title": "Potato",
            "description": "Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",
            "type": "popular",
            "alt": "kazis supermarket",
            "images": "1.jpg",
            "price": "89",
            "oldPrice": "95",
            "tag": "on sale",
            "productImage": "product-2.png"
        },
        {
            "id": 3,
            "title": "Ice-cream",
            "description": "Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",
            "type": "popular",
            "alt": "kazis supermarket",
            "images": "1.jpg",
            "price": "89",
            "oldPrice": "95",
            "tag": "on sale",
            "productImage": "product-1.png"
        },
        {
            "id": 4,
            "title": "Checken Egg(Layer)",
            "description": "Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",
            "type": "popular",
            "alt": "kazis supermarket",
            "images": "1.jpg",
            "price": "89",
            "oldPrice": "95",
            "tag": "on sale",
            "productImage": "product-2.png"
        },
        {
            "id": 4,
            "title": "Checken Egg(Layer)",
            "description": "Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",
            "type": "popular",
            "alt": "kazis supermarket",
            "images": "1.jpg",
            "price": "89",
            "oldPrice": "95",
            "tag": "on sale",
            "productImage": "product-1.png"
        },
        {
            "id": 5,
            "title": "Checken Egg(Layer)",
            "description": "Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",
            "type": "popular",
            "alt": "kazis supermarket",
            "images": "1.jpg",
            "price": "89",
            "oldPrice": "95",
            "tag": "on sale",
            "productImage": "product-2.png"
        },
        {
            "id": 6,
            "title": "Checken Egg(Layer)",
            "description": "Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",
            "type": "popular",
            "alt": "kazis supermarket",
            "images": "1.jpg",
            "price": "89",
            "oldPrice": "95",
            "tag": "on sale",
            "productImage": "product-1.png"
        },
        {
            "id": 7,
            "title": "Tomato",
            "description": "Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",
            "type": "popular",
            "alt": "kazis supermarket",
            "images": "1.jpg",
            "price": "89",
            "oldPrice": "95",
            "tag": "on sale",
            "productImage": "product-1.png"
        },
        {
            "id": 8,
            "title": "Tomato",
            "description": "Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",
            "type": "popular",
            "alt": "kazis supermarket",
            "images": "1.jpg",
            "price": "89",
            "oldPrice": "95",
            "tag": "on sale",
            "productImage": "product-1.png"
        },
        {
            "id": 9,
            "title": "Tomato",
            "description": "Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",
            "type": "popular",
            "alt": "kazis supermarket",
            "images": "1.jpg",
            "price": "89",
            "oldPrice": "95",
            "tag": "on sale",
            "productImage": "product-1.png"
        },
        {
            "id": 10,
            "title": "Tomato",
            "description": "Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",
            "type": "popular",
            "alt": "kazis supermarket",
            "images": "1.jpg",
            "price": "89",
            "oldPrice": "95",
            "tag": "on sale",
            "productImage": "product-1.png"
        },
        {
            "id": 11,
            "title": "Tomato",
            "description": "Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",
            "type": "popular",
            "alt": "kazis supermarket",
            "images": "1.jpg",
            "price": "89",
            "oldPrice": "95",
            "tag": "on sale",
            "productImage": "product-1.png"
        }
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