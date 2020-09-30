<template>
  <div>
    <!-- Andgarivara vehicles Showcase Area Start -->
    <section class="categories-area section-b-40-space">
      <div class="container">
        <!-- vehicle Showcase Wrap/Rental Cars Area Start -->
        <div class="row">
          <div class="col-12 mb-30">
            <div class="section-title d-flex justify-content-between align-content-center">
              <h4>{{title}}</h4>
            </div>
          </div>
        </div>
        <div class="row categories-wrap">
          <div class="col-md-3 col-sm-12" v-for="categoryItem in categories" :key="categoryItem.id">

              <div class="offer-tile-item-link text-center">
                <a href="#" class="offer-tile-block-link"></a>
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
                    <a href="#">
                      <img :src="categoryItem.productImage">
                    </a>
                  </div>
                </div>
                <div class="offer-tile-item-description">
                  <a href="#">
                    <p class="offer-tile-item-paragraph mb-2">{{categoryItem.subTitle}}</p>
                  </a>
                </div>
                <a class="button theme-button" href="#">
                  Shop now<i class="fas fa-chevron-right pl-2"></i>
                </a>
              </div>

          </div>
        </div>
        <!-- vehicle Showcase Wrap/Rental Cars Area End -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Explore this weeks specials',
    categories:[
          { 
          id: 1,
          title: "Freezer",
          subTitle: "Patties Party Pack 1.25kg, Della Rosa Pizza 500g",
          offerImage: require('@/assets/images/product-img/offer.svg'),
          productImage: require('@/assets/images/product-img/product-1.png'),
        },
          { 
          id: 2,
          title: "Freezer",
          subTitle: "Patties Party Pack 1.25kg, Della Rosa Pizza 500g",
          offerImage: require('@/assets/images/product-img/offer.svg'),
          productImage: require('@/assets/images/product-img/product-1.png'),
        },
          { 
          id: 3,
          title: "Freezer",
          subTitle: "Patties Party Pack 1.25kg, Della Rosa Pizza 500g",
          offerImage: require('@/assets/images/product-img/offer.svg'),
          productImage: require('@/assets/images/product-img/product-1.png'),
        },
          { 
          id: 4,  
          title: "Freezer",
          subTitle: "Patties Party Pack 1.25kg, Della Rosa Pizza 500g",
          offerImage: require('@/assets/images/product-img/offer.svg'),
          productImage: require('@/assets/images/product-img/product-1.png'),
        },
    ],

    }
  },
  //   methods: {
  //   getImgUrl(path) {
  //     return require('@/assets/images/blog-img/' + path)
  //   },
  // }

}
</script>