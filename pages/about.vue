<template>
  <div>
    <Breadcrumbs title="About us" />
    <section class="about-banner-area section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="about-banner-content">
              <img :src="require('@/assets/images/banner-img/addvartise-2.jpg')" alt="kazisupermarket" class="w-100 mb-4">

              <div class="media">
                <div class="media-body text-center">
                  <h2 class="mb-4">We are Kazissupermarket. Know more about us!</h2>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about-support-area different-bg section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="card about-support-box text-center">
              <div class="card-body">
                <i class="far fa-object-ungroup"></i>
                <h5 class="card-title">Creative Design</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="card about-support-box text-center">
              <div class="card-body">
                <i class="far fa-object-ungroup"></i>
                <h5 class="card-title">100% Money-back guarantee</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="card about-support-box text-center">
              <div class="card-body">
                <i class="far fa-object-ungroup"></i>
                <h5 class="card-title">Online support 24/7</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about-features-area section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="card about-feature-box text-center">
              <img src="https://media.istockphoto.com/photos/closeup-of-a-touchscreen-social-media-concept-picture-id1221653457" class="card-img-top" alt="kazissupermarket">
              <div class="card-body">
                <h5 class="card-title">What do we do?</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="card about-feature-box text-center">
              <img src="https://media.istockphoto.com/photos/passionate-about-their-project-picture-id1066557736" class="card-img-top" alt="kazissupermarket">
              <div class="card-body">
                <h5 class="card-title">What do we do?</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="card about-feature-box text-center">
              <img src="https://media.istockphoto.com/photos/business-people-meeting-planning-strategy-analysis-concept-on-future-picture-id1033011074" class="card-img-top" alt="kazissupermarket">
              <div class="card-body">
                <h5 class="card-title">What do we do?</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <LogoSlider />

    <Footer1 />
  </div>
</template>

<script>

import { mapState } from 'vuex'
export default {
  layout: 'public',

  data() {
    return {
    }
  },
  
  /*
  ** Headers of the page
  */
  head: {
    title: 'About Us - Kazis Supermarket',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'Your Smart shopping point' }
    ],
  },

}
</script>
<style>
#map {
  height: 400px;
  /* The height is 400 pixels */
  width: 100%;
  /* The width is the width of the web page */
}
</style>