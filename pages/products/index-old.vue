<template>
  <div>
    <BannerHomeSlider />
    <!-- <BannerPage :bannerImg="bannerImg" /> -->
    <Breadcrumbs title="Product Title" />
    <section class="product-page section-b-space">
      <div class="container">
        <div class="row">
          <div class="col">
            <!-- Home product box Start -->
            <ProductItem  v-for="productItem in productItems" :key="productItem._id"
            :product="productItem"
            />
            <!-- Home product box End -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  layout: 'public',

  data() {
    return {
        bannerImg: require('@/assets/images/banner-img/addvartise-1.jpg'),
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
        ]
    }
  },
  computed: {
    ...mapGetters({productItems : 'product/allProducts'})
  },
  created() {
    this.FetchProduct();
  },
  methods: {
    ...mapActions({
      FetchProduct: 'product/getProducts',
    }),
    getImgUrl(path) {
      return require('@/assets/images/product-img/' + path)
    },
  },

}
</script>

<style>

</style>