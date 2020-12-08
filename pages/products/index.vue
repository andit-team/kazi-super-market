<template>
  <div>
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
                            <li class="breadcrumb-item active" v-if="parent_category">{{parent_category}}</li>
                            <li class="breadcrumb-item active" v-else>Products</li>
                            <li class="breadcrumb-item active" v-if="categoryData.data">{{categoryData.data.name}}</li>
                        </ol>
                        </nav>
                        <hr>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="product-page product-search-page section-b-space">
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

                <div class="filter-box price-slider">
                    <b-button v-b-toggle.collapse-2 variant="light">Filter by price <b-icon-caret-down-fill></b-icon-caret-down-fill> </b-button>
                    <b-collapse visible id="collapse-2" class="mt-2">
                    <VueSimpleRangeSlider
                    style="width: auto"
                    activeBarColor="#178841"
                    :min="0"
                    :max="5000"
                    v-model="range"
                    />
                    <p>Price: <strong>${{range[0]}} - ${{range[1]}}</strong></p>
                    <button class="theme-button">Filter</button>
                    </b-collapse>
                </div>

                <div class="filter-box">
                    <b-button v-b-toggle.collapse-3 variant="light">Product Tags <b-icon-caret-down-fill></b-icon-caret-down-fill> </b-button>
                    <b-collapse visible id="collapse-3" class="mt-2">
                    <ul class="tags-list">
                        <li v-for="tagItem in tagData" :key="tagItem.id">
                        <span @click="selectTag(tagItem.name)" :class="checkSelectedTags(tagItem.name) ? 'bg-info' : ''" >{{tagItem.name}}</span>
                        <!-- <nuxt-link to="/">{{tagItem.name}}</nuxt-link> -->
                        </li>
                    </ul>
                    </b-collapse>
                </div>
                </div>
            </div>
          <!-- Search Filter LeftSidebar -->

          <div class="col-12 col-lg-9">
            <!-- <BannerSmall :bannerImg="bannerImg" /> -->
            <div class="search-page-sort d-flex align-items-center">
                <label>Sort By:&nbsp;</label>
                <b-form-select v-model="perPage" :options="pageOptions" selected="Asa">
                </b-form-select>
            </div>
            <div class="search-page-product-wrap d-flex flex-wrap">
              <ProductItem :product="product" :index="index"  v-for="(product,index) in products" :key="index" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
import VueSimpleRangeSlider from 'vue-simple-range-slider';

export default {
    name: 'producSearch',
    head() {
        return {
        title: `${this.title} | Kazissupermarket online`,
        };
    },
  layout: 'public',
  components: {
    VueSimpleRangeSlider
  },
  data() {
    return {
        bannerImg: require('@/assets/images/banner-img/addvartise-1.jpg'),
        range: [20,1000],
        perPage:10,
        pageOptions: ['New', 'Old', 'Low to high', 'High to low'],
        searchOptions:{
          tags : [],
          key : '',
          min_price : '',
          max_price: ''
        },
    }
  },
  computed: {
    ...mapGetters({
        categoriesData : 'category/allCategories',
        categoryData : 'category/getCategory',
        tagData : 'product/allTags',
        products : 'product/category_wise_product',
        products : 'product/category_wise_product',
      }),
      parent_category(){
          return this.$route.query.parent_category;
      },
      category(){
          return this.$route.query.category;
      },
      
  },

  methods: {
    ...mapActions({
      allParentCategories : 'category/getCategories',
      Tags : 'product/getTags',
      category_wise_products : 'product/categoryWiseProduct',
      getCategory : 'category/fatchCategory',
    }),
    sliderRange(){
      console.log(this.range);
    },
    getImgUrl(path) {
      return require('@/assets/images/product-img/' + path)
    },
    checkSelectedTags(name){
      return this.searchOptions.tags.includes(name)
    },
    selectTag(tag){
      if(this.searchOptions.tags.includes(tag)){
        const index = this.searchOptions.tags.indexOf(tag);
        if (index > -1) {
          this.searchOptions.tags.splice(index, 1);
        }
        this.searchProduct()
      }else{
        this.searchOptions.tags.push(tag);
        this.searchProduct()
      }
    },

    searchProduct(){
        this.category_wise_products({category: this.categoryData.data._id,options:this.searchOptions});
    }
    
    
  },

  async created(){
    await this.getCategory(this.category)
    await this.allParentCategories();
    await this.Tags();
    await this.category_wise_products({category: this.categoryData.data._id});

    // this.min = min
    // this.max = max
  },
  // watch: {
  //   'selectTag'(newVal, oldVal) {
  //     console.log(this.searchOptions.tags);
  //   }
  // },

    /*
  ** Headers of the page
  */


}
</script>

<style>
.slider {
  /* overwrite slider styles */
  width: 150px;
}
</style>