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
                  <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </p>
                  <img :src="require('~/assets/images/others-img/signature.png')" alt="signature" class="mt-4">
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
                <h4 class="card-title">What do we do?</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="card about-feature-box text-center">
              <img src="https://media.istockphoto.com/photos/passionate-about-their-project-picture-id1066557736" class="card-img-top" alt="kazissupermarket">
              <div class="card-body">
                <h4 class="card-title">Our mission</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="card about-feature-box text-center">
              <img src="https://media.istockphoto.com/photos/business-people-meeting-planning-strategy-analysis-concept-on-future-picture-id1033011074" class="card-img-top" alt="kazissupermarket">
              <div class="card-body">
                <h4 class="card-title">History of us</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="why-choose-area section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <div role="tablist">
              <h3 class="mb-4">Why choose us?</h3>
              <b-card no-body class="mb-0 custom-accordion">
                  <b-card-header header-tag="header" role="tab">
                      <h5 class="m-0 position-relative text-white">
                          <a v-b-toggle.accordion-1 class="text-reset" href="javascript: void(0);">
                              First free delivery
                              <i class="mdi mdi-chevron-down accordion-arrow"></i>
                          </a>
                      </h5>
                  </b-card-header>
                  <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                          <b-card-text>
                              Yup, the marketplace license allows you to use this theme
                              in any end products.
                              For more information on licenses, please refere
                          </b-card-text>
                      </b-card-body>
                  </b-collapse>
              </b-card>

              <b-card no-body class="mb-0 custom-accordion">
                  <b-card-header header-tag="header" role="tab">
                      <h5 class="m-0 position-relative text-white">
                          <a v-b-toggle.accordion-2 class="text-reset" href="javascript: void(0);">
                              More than 10 years in the business
                              <i class="mdi mdi-chevron-down accordion-arrow"></i>
                          </a>
                      </h5>
                  </b-card-header>
                  <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                          <b-card-text>
                              No. This is a vue js template. It won't directly with
                              WordPress, though you can convert this into WordPress
                              compatible theme
                          </b-card-text>
                      </b-card-body>
                  </b-collapse>
              </b-card>

              <b-card no-body class="mb-0 custom-accordion">
                  <b-card-header header-tag="header" role="tab">
                      <h5 class="m-0 position-relative text-white">
                          <a v-b-toggle.accordion-3 class="text-reset" href="javascript: void(0);">
                              100% organic foods
                              <i class="mdi mdi-chevron-down accordion-arrow"></i>
                          </a>
                      </h5>
                  </b-card-header>
                  <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                          <b-card-text>Use our dedicated support email to send your issues or feedback. We are here to help anytime</b-card-text>
                      </b-card-body>
                  </b-collapse>
              </b-card>
              <b-card no-body class="mb-0 custom-accordion">
                  <b-card-header header-tag="header" role="tab">
                      <h5 class="m-0 position-relative text-white">
                          <a v-b-toggle.accordion-4 class="text-reset" href="javascript: void(0);">
                              Best shopping strategies
                              <i class="mdi mdi-chevron-down accordion-arrow"></i>
                          </a>
                      </h5>
                  </b-card-header>
                  <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                          <b-card-text>Yes, We will update the regularly. All the future updates would be available without any cost</b-card-text>
                      </b-card-body>
                  </b-collapse>
              </b-card>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="what-clients-say-slider">
              <h3 class="mb-4">What clients say</h3>
              <b-carousel fade>

                <b-carousel-slide>
                  <div class="slide-content">
                    <img :src="require('~/assets/images/testimonial-slider/1.png')" alt="client" class="rounded-circle mb-3">
                    <h5 class="client-name text-uppercase">Suraiya Aysha</h5>
                    <p class="client-designation">CEO of Own Company</p>
                    <i class="fas fa-quote-right"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, temporibus. Quaerat ducimus natus assumenda architecto dolor sint nisi quod esse?</p>
                  </div>
                </b-carousel-slide>

                <b-carousel-slide>
                  <div class="slide-content">                   
                    <img :src="require('~/assets/images/testimonial-slider/2.png')" alt="client" class="rounded-circle mb-3">
                    <h5 class="client-name text-uppercase">Tama Sarkar</h5>
                    <p class="client-designation">CEO of Own Company</p>
                    <i class="fas fa-quote-right"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, temporibus. Quaerat ducimus natus assumenda architecto dolor sint nisi quod esse?</p>  
                  </div> 
                </b-carousel-slide>

                <b-carousel-slide>
                  <div class="slide-content">
                    <img :src="require('~/assets/images/testimonial-slider/3.png')" alt="client" class="rounded-circle mb-3">
                    <h5 class="client-name text-uppercase">Rupa Sarkar</h5>
                    <p class="client-designation">CEO of Own Company</p>
                    <i class="fas fa-quote-right"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, temporibus. Quaerat ducimus natus assumenda architecto dolor sint nisi quod esse?</p>
                  </div> 
                </b-carousel-slide>

              </b-carousel>
            </div>
          </div>
        </div>
      </div>
    </section>

    <LogoSlider />
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