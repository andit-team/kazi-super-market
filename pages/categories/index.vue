<template>
  <div>
    <BannerHomeSlider />
    <!-- <BannerPage :bannerImg="bannerImg" /> -->
    <Breadcrumbs title="Category Title" />
    <!-- Area Start -->
    <section class="categories-page section-b-space">
      <div class="container">

        <div class="row categories-wrap">
          <div class="col-md-6 col-lg-3 col-sm-12" v-for="categoryItem in categories" :key="categoryItem.id">

            <CategoryItem :categoryItem = "categoryItem" :index="index" />

          </div>
        </div>
        <!-- Area End -->
      </div>
    </section>
    <Footer1 />
  </div>
</template>

<script>

export default {
  layout: 'public',
  
  data() {
    return {
      bannerImg: require('@/assets/images/banner-img/addvartise-1.jpg'),
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
          productImage: require('@/assets/images/product-img/product-2.png'),
        },
          { 
          id: 3,
          title: "Freezer",
          subTitle: "Patties Party Pack 1.25kg, Della Rosa Pizza 500g",
          offerImage: require('@/assets/images/product-img/offer.svg'),
          productImage: require('@/assets/images/product-img/product-3.png'),
        },
          { 
          id: 4,  
          title: "Freezer",
          subTitle: "Patties Party Pack 1.25kg, Della Rosa Pizza 500g",
          offerImage: require('@/assets/images/product-img/offer.svg'),
          productImage: require('@/assets/images/product-img/product-4.png'),
        },
    ],

    }
  },

}
</script>
<style>
  .categories-page .category-box .offer-tile-header {
    display: none !important;
  }
</style>