<template>
  <div>
    <BannerHomeSlider />
    <!-- <BannerPage :bannerImg="bannerImg" /> -->
    <Breadcrumbs title="All Categories" />
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
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  layout: 'public',
    head() {
      return {
        title: `${this.title} | Kazissupermarket online`,
      };
    },
  data() {
    return {
      title: 'All Categories',
      bannerImg: require('@/assets/images/banner-img/addvartise-1.jpg'),
      // title: 'Explore this weeks specials',
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
  /* .categories-page .category-box .offer-tile-header {
    display: none !important;
  } */
</style>