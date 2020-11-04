<template>
  <div>
    <Breadcrumbs title="Product Title" />
    <section class="product-page section-b-space">
      <div class="container">
        <div class="row">

          <!-- Search Filter LeftSidebar -->
          <div class="col-12 col-lg-3">

            <div class="filter-left-sidebar">

              <div class="filter-box">
                <b-button v-b-toggle.collapse-1 variant="light">Product Categories <b-icon-caret-down-fill></b-icon-caret-down-fill> </b-button>
                <b-collapse visible id="collapse-1" class="mt-2">

                    <ul class="category-list">
                        
                      <li v-for="categoryItem in categoryData.data" :key="categoryItem.id">
                        <nuxt-link to="/">{{categoryItem.name}}<i class="fas fa-angle-right"></i></nuxt-link>
                      </li>

                    </ul>
                </b-collapse>
              </div>

              <div class="filter-box">
                <b-button v-b-toggle.collapse-2 variant="light">Filter by price <b-icon-caret-down-fill></b-icon-caret-down-fill> </b-button>
                <b-collapse visible id="collapse-2" class="mt-2">
                  <VueSimpleRangeSlider
                  style="width: auto"
                  activeBarColor="#178841"
                  :min="0"
                  :max="100000000"
                  :logarithmic="true"
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
                        
                      <li v-for="categoryItem in categoryData.data" :key="categoryItem.id">
                        <nuxt-link to="/">{{categoryItem.name}}</nuxt-link>
                      </li>

                    </ul>
                </b-collapse>
              </div>

            </div>

          </div>
          <!-- Search Filter LeftSidebar -->

          <div class="col-12 col-lg-9">
          
            <BannerPage :bannerImg="bannerImg" />

            <!-- Home product box Start -->
            <ProductItem :product="product" :index="index"  v-for="(product,index) in products" :key="index" />
            <!-- Home product box End -->
          </div>
        </div>
      </div>
    </section>
    <Footer1 />
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
import VueSimpleRangeSlider from 'vue-simple-range-slider';

export default {
  layout: 'public',

  components: {
    VueSimpleRangeSlider
  },
  data() {
    return {
      bannerImg: require('@/assets/images/banner-img/addvartise-1.jpg'),

      range: [20,1000],

      "products": [
          {
              "id": 1,
              "title": "Elsha Fish",
              "description": "Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",
              "type": "popular",
              "alt": "kazis supermarket",
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
              "price": "89",
              "oldPrice": "95",
              "tag": "on sale",
              "productImage": "product-3.png"
          },
          {
              "id": 4,
              "title": "Checken Egg(Layer)",
              "description": "Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",
              "type": "popular",
              "alt": "kazis supermarket",
              "price": "89",
              "oldPrice": "95",
              "tag": "on sale",
              "productImage": "product-3.png"
          },
          {
              "id": 4,
              "title": "Checken Egg(Layer)",
              "description": "Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",
              "type": "popular",
              "alt": "kazis supermarket",
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
              "price": "89",
              "oldPrice": "95",
              "tag": "on sale",
              "productImage": "product-3.png"
          },
          {
              "id": 7,
              "title": "Tomato",
              "description": "Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",
              "type": "popular",
              "alt": "kazis supermarket",
              "price": "89",
              "oldPrice": "95",
              "tag": "on sale",
              "productImage": "product-4.png"
          },
          {
              "id": 8,
              "title": "Tomato",
              "description": "Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",
              "type": "popular",
              "alt": "kazis supermarket",
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
              "price": "89",
              "oldPrice": "95",
              "tag": "on sale",
              "productImage": "product-2.png"
          },
          {
              "id": 10,
              "title": "Tomato",
              "description": "Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",
              "type": "popular",
              "alt": "kazis supermarket",
              "price": "89",
              "oldPrice": "95",
              "tag": "on sale",
              "productImage": "product-3.png"
          },
          {
              "id": 11,
              "title": "Horlics",
              "description": "Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",
              "type": "popular",
              "alt": "kazis supermarket",
              "price": "89",
              "oldPrice": "95",
              "tag": "on sale",
              "productImage": "product-4.png"
          },
          {
              "id": 12,
              "title": "Chingri",
              "description": "Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",
              "type": "popular",
              "alt": "kazis supermarket",
              "price": "89",
              "oldPrice": "95",
              "tag": "on sale",
              "productImage": "product-1.png"
          },
          {
              "id": 13,
              "title": "Meat",
              "description": "Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",
              "type": "popular",
              "alt": "kazis supermarket",
              "price": "89",
              "oldPrice": "95",
              "tag": "on sale",
              "productImage": "product-4.png"
          },
          {
              "id": 14,
              "title": "Tomato",
              "description": "Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",
              "type": "popular",
              "alt": "kazis supermarket",
              "price": "89",
              "oldPrice": "95",
              "tag": "on sale",
              "productImage": "product-2.png"
          }
      ]
    }
  },
  computed: {
    ...mapGetters({categoryData : 'category/allCategories'}),
  },

  methods: {
    ...mapActions({
      cat : 'category/getCategories',
    }),
    getImgUrl(path) {
      return require('@/assets/images/product-img/' + path)
    },
    
  },

  created(){
    this.cat();

    // this.min = min
    // this.max = max
  },

    /*
  ** Headers of the page
  */
  head() {
    return {
      title: `${this.title} | Kazissupermarket online`,
    };
  },

}
</script>

<style>
.slider {
  /* overwrite slider styles */
  width: 150px;
}
</style>