<template>
  <div>
    <BannerHomeSlider />
    <!-- <BannerPage :bannerImg="bannerImg" /> -->
    <Breadcrumbs title="Category Name Here" />
    <!-- Area Start -->
    <section class="categories-page section-b-space">
      <div class="container">

        <div class="row categories-wrap">

          <!-- <b-nav-item to="/categories/category-list" v-for="categoryItem in categoryData" :key="categoryItem.id">{{categoryItem}}<i class="fas fa-angle-right"></i></b-nav-item> -->


          <div class="col-md-6 col-lg-3 col-sm-12" v-for="categoryItem in categoryData.data" :key="categoryItem.id">

            <CategoryItem :categoryItem = "categoryItem" />

          </div>
        </div>
        <!-- Area End -->
      </div>
    </section>
    <Footer1 />
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  layout: 'public',
  data() {
    return {
      bannerImg: require('@/assets/images/banner-img/addvartise-1.jpg'),
      // title: 'Explore this weeks specials',
      
      // categories:[
      //       { 
      //       id: 1,
      //       title: "Freezer",
      //       subTitle: "Patties Party Pack 1.25kg, Della Rosa Pizza 500g",
      //       offerImage: require('@/assets/images/product-img/offer.svg'),
      //       productImage: require('@/assets/images/product-img/product-1.png'),
      //     },
      //       { 
      //       id: 2,
      //       title: "Freezer",
      //       subTitle: "Patties Party Pack 1.25kg, Della Rosa Pizza 500g",
      //       offerImage: require('@/assets/images/product-img/offer.svg'),
      //       productImage: require('@/assets/images/product-img/product-2.png'),
      //     },
      //       { 
      //       id: 3,
      //       title: "Freezer",
      //       subTitle: "Patties Party Pack 1.25kg, Della Rosa Pizza 500g",
      //       offerImage: require('@/assets/images/product-img/offer.svg'),
      //       productImage: require('@/assets/images/product-img/product-1.png'),
      //     },
      //       { 
      //       id: 4,  
      //       title: "Freezer",
      //       subTitle: "Patties Party Pack 1.25kg, Della Rosa Pizza 500g",
      //       offerImage: require('@/assets/images/product-img/offer.svg'),
      //       productImage: require('@/assets/images/product-img/product-2.png'),
      //     },
      // ],

    }
  },

  computed: {
    ...mapGetters({categoryData : 'category/allCategories'}),
  },
  methods: {
    ...mapActions({
        cat : 'category/getCategories',
      }),
  },
  created(){
      this.cat();
  },

}
</script>
<style>
  .categories-page .category-box .offer-tile-header {
    display: none !important;
  }
</style>