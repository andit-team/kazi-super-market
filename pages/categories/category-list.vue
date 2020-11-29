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
          <div class="col-md-6 col-lg-3 col-sm-12" v-for="subCategoryItem in subCategoryData.data" :key="subCategoryItem.id">
            <CategoryItem :categoryItem = "subCategoryItem" />
          </div>
        </div>
        <!-- Area End -->
      </div>
    </section>
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
    }
  },

  computed: {
    ...mapGetters({
      categoryData : 'category/allCategories',
      subCategoryData : 'category/getSubCategories'
      }),
  },
  methods: {
    ...mapActions({
        cat : 'category/getCategories',
        subCat : 'category/getSubCategories',
      }),
  },
  created(){
      this.cat();
      this.subCat();
  },

}
</script>
<style>
  /* .categories-page .category-box .offer-tile-header {
    display: none !important;
  } */
</style>