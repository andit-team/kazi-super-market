<template>
  <div v-if="loaded">
    <div>
      <div class="breadcrumb-section">
          <div class="container">
              <div class="row">         
                  <div class="col-12">
                      <nav aria-label="breadcrumb" class="theme-breadcrumb">
                      <ol class="breadcrumb">
                          <li class="breadcrumb-item">
                              <nuxt-link :to="{ path: '/' }">Home</nuxt-link>
                          </li>
                          <li class="breadcrumb-item active">{{categoryData.data.name}}</li>
                      </ol>
                      </nav>
                      <hr>
                  </div>
              </div>
          </div>
      </div>
    </div>
    <section class="product-page product-search-page section-t-40-space section-b-space">
      <div class="container">
        <div class="row">
          <!-- Search Filter LeftSidebar -->
          <div class="col-12 col-lg-3">
            <div class="filter-left-sidebar mb-30 rounded">
            <div class="filter-box">
              <b-button v-b-toggle.collapse-1 variant="light">Product Categories <b-icon-caret-down-fill></b-icon-caret-down-fill> </b-button>
              <b-collapse visible id="collapse-1" class="mt-2">
                <ul class="category-list">
                  <li v-for="categoryItem in categoriesData.data" :key="categoryItem.id">
                    <nuxt-link :to="'/categories/'+categoryItem.slug">{{categoryItem.name}}<i class="fas fa-angle-right"></i></nuxt-link>
                  </li>
                </ul>
              </b-collapse>
            </div>
            </div>
          </div>
          <!-- Search Filter LeftSidebar -->

          <div class="col-12 col-lg-9">
            <!-- <BannerSmall :bannerImg="bannerImg" /> -->
            <div class="search-page-product-wrap d-flex flex-wrap">

              <div class="no-data-found d-flex align-items-center justify-content-center w-100" v-if="subCategoryData.data == 0"><h4 class="color-light-green">No Data Found</h4></div>

              <div class="col-md-6 col-lg-4 col-sm-12" v-else v-for="subCategoryItem in subCategoryData.data" :key="subCategoryItem.id">
                <CategoryItem :categoryItem = "subCategoryItem" :parentCat = "categoryData.data" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'

export default {
    head() {
        return {
        title: `${this.title} | Kazissupermarket online`,
        };
    },
    data(){
        return{
            loaded : false,
            bannerImg: require('@/assets/images/banner-img/addvartise-1.jpg'),
        }
    },
    name: 'producSearch',
    layout: 'public',
    computed: {
        ...mapGetters({
            categoriesData : 'category/allCategories',
            categoryData : 'category/getCategory',
            subCategoryData : 'category/getSubCategories'
        }),
    },

  methods: {
    ...mapActions({
        allcategory : 'category/getCategories',
        category : 'category/fatchCategory',
        subCat : 'category/getSubCategories',
    }),    
  },
  async created(){
    this.$nuxt.$loading.start()
    await this.allcategory();
    await this.category(this.$route.params.slug);
    await this.subCat(this.$route.params.slug);
    this.$nuxt.$loading.finish()
    this.loaded = true;
  },

//   watch: {
//     'parent_category'(newVal, oldVal) {
//       console.log(oldVal);
//       console.log(newVal);
//     }
//   },

}
</script>

<style>
.loading {
  /* overwrite slider styles */
  width: 150px;
}
</style>