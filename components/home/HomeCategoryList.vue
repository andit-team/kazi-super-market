<template>
  <div>
    <!-- Area Start -->
    <section class="categories-area section-b-space">
      <div class="container">
        <!-- Area Start -->
        <div class="row">
          <div class="col-12 mb-30">
            <div class="section-title d-flex justify-content-between align-content-center">
              <h4>{{title}}</h4>
            </div>
          </div>
        </div>
        <div class="row categories-wrap">

          <div class="col-md-6 col-lg-3 col-sm-12" v-for="categoryItem in categoryData.data.slice(0, 4)" :key="categoryItem.id">

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
// import CategoryItem from '../category/CategoryItem'
export default {
  data() {
    return {
      title: 'Explore this weeks specials',
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
    //       productImage: require('@/assets/images/product-img/product-3.png'),
    //     },
    //       { 
    //       id: 4,  
    //       title: "Freezer",
    //       subTitle: "Patties Party Pack 1.25kg, Della Rosa Pizza 500g",
    //       offerImage: require('@/assets/images/product-img/offer.svg'),
    //       productImage: require('@/assets/images/product-img/product-4.png'),
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