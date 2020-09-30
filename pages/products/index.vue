<template>
  <div>
    <!-- <BannerPage :bannerImg="bannerImg" /> -->
    <Breadcrumbs title="Product Title" />
    <section class="product-page section-b-space">
      <div class="container">
        <div class="row">
          <div class="col">
            <!-- Home product box Start -->
            <ProductItem :product="product" :index="index"  v-for="(product,index) in products" :key="index" />
            <!-- Home product box End -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

// import BannerPage from '../../components/banner/BannerPage'
import Breadcrumbs from '../../components/widgets/breadcrumbs'
import ProductItem from '../../components/product/ProductItem'
export default {
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
            "images": "1.jpg",
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
            "images": "1.jpg",
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
            "images": "1.jpg",
            "price": "89",
            "oldPrice": "95",
            "tag": "on sale",
            "productImage": "product-1.png"
        },
        {
            "id": 4,
            "title": "Checken Egg(Layer)",
            "description": "Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",
            "type": "popular",
            "alt": "kazis supermarket",
            "images": "1.jpg",
            "price": "89",
            "oldPrice": "95",
            "tag": "on sale",
            "productImage": "product-2.png"
        },
        {
            "id": 4,
            "title": "Checken Egg(Layer)",
            "description": "Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",
            "type": "popular",
            "alt": "kazis supermarket",
            "images": "1.jpg",
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
            "images": "1.jpg",
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
            "images": "1.jpg",
            "price": "89",
            "oldPrice": "95",
            "tag": "on sale",
            "productImage": "product-1.png"
        },
        {
            "id": 7,
            "title": "Tomato",
            "description": "Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",
            "type": "popular",
            "alt": "kazis supermarket",
            "images": "1.jpg",
            "price": "89",
            "oldPrice": "95",
            "tag": "on sale",
            "productImage": "product-1.png"
        },
        {
            "id": 8,
            "title": "Tomato",
            "description": "Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",
            "type": "popular",
            "alt": "kazis supermarket",
            "images": "1.jpg",
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
            "images": "1.jpg",
            "price": "89",
            "oldPrice": "95",
            "tag": "on sale",
            "productImage": "product-1.png"
        },
        {
            "id": 10,
            "title": "Tomato",
            "description": "Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",
            "type": "popular",
            "alt": "kazis supermarket",
            "images": "1.jpg",
            "price": "89",
            "oldPrice": "95",
            "tag": "on sale",
            "productImage": "product-1.png"
        },
        {
            "id": 11,
            "title": "Tomato",
            "description": "Citronella oil in combination with Eucalyptus oil & Peppermint oil acts as a fantastic natural solution to repel mosquito like annoying insects from the body. Purnava Mosquito Repellent repels unwanted insects and safe guard your health with this easy to use product which can be sprayed directly on the skin and clothes. A reliable formula that soothes your skin and makes an environment-conscious choice. ",
            "type": "popular",
            "alt": "kazis supermarket",
            "images": "1.jpg",
            "price": "89",
            "oldPrice": "95",
            "tag": "on sale",
            "productImage": "product-1.png"
        }
    ]
  }
},
  methods: {
    getImgUrl(path) {
      return require('@/assets/images/product-img/' + path)
    },
  },

}
</script>

<style>

</style>