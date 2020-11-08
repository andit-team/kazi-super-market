<template>
  <div>
    <Breadcrumbs title="Product Details" />
    <section class="product-page product-details-page section-b-space">
      <div class="container">
        <div class="row">
            <div class="col-lg-7">
                <div class="row justify-content-center">
                  <div class="col-xl-8">

                  <b-card no-body class="product-details-photo-tab">
                    <h4 class="content-title">{{title}}</h4>
                    <b-tabs end>
                      <b-tab v-for="(photo, index) in photos" :key="index">
                        <div><b-card-img bottom :src="photo.photo"></b-card-img></div>
                        <template v-slot:title>
                          <b-card-img bottom :src="photo.photo"></b-card-img>
                        </template>
                      </b-tab>
                    </b-tabs>
                  </b-card>

                  </div>
                </div>
            </div>

            <div class="col-lg-5">
                <div>
                    <div>
                        <a href="#" class="color-orange">Ocean Food</a>
                    </div>
                    <h4 class="mb-1">
                        Chingri
                    </h4>

                    <p class="text-muted mr-3 font-16">
                        <span class="mdi mdi-star text-warning"></span>
                        <span class="mdi mdi-star text-warning"></span>
                        <span class="mdi mdi-star text-warning"></span>
                        <span class="mdi mdi-star text-warning"></span>
                        <span class="mdi mdi-star"></span>
                    </p>

                    <div class="mt-3">
                        <h6 class="text-danger text-uppercase">10 % Off</h6>
                        <h4>
                            Price :
                            <span class="text-muted mr-2">
                                <del>$ 50</del>
                            </span>
                            <b>$ 45</b>
                        </h4>
                    </div>
                    <hr />

                    <div>
                        <p>
                            If several languages coalesce, the grammar of the resulting
                            language is more simple and regular than that of the individual
                            new common simple and regular than existing
                        </p>

                        <div class="mt-3 mb-2">
                            <h5 class="font-size-14 mb-2">Specification :</h5>
                            <div class="row">
                                <div class="col-md-6">
                                    <ul class="list-unstyled product-desc-list">
                                        <li>
                                            <i class="mdi mdi-circle-medium mr-1 align-middle"></i>
                                            Full Sleeve
                                        </li>
                                        <li>
                                            <i class="mdi mdi-circle-medium mr-1 align-middle"></i>
                                            Cotton
                                        </li>
                                        <li>
                                            <i class="mdi mdi-circle-medium mr-1 align-middle"></i>
                                            All Sizes available
                                        </li>
                                        <li>
                                            <i class="mdi mdi-circle-medium mr-1 align-middle"></i>
                                            4 Different Color
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <ul class="list-unstyled product-desc-list">
                                        <li>
                                            <i class="mdi mdi-circle-medium mr-1 align-middle"></i>
                                            All Sizes available
                                        </li>
                                        <li>
                                            <i class="mdi mdi-circle-medium mr-1 align-middle"></i>
                                            4 Different Color
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <form class="form-inline mb-3">
                                <label class="my-1 mr-2" for="quantityinput">Quantity</label>
                                <select class="custom-select my-1 mr-sm-3" id="quantityinput">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                </select>
                            </form>

                            <div>
                                <button type="button" class="btn bg-light-green text-white waves-effect waves-light">
                                    <span class="btn-label">
                                        <i class="mdi mdi-cart"></i>
                                    </span>Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end row -->

        <div class="row">
          <div class="col">
           <b-card no-body class="mt-5">
              <b-tabs card>
                <b-tab title="Description" active>
                  <div class="product-details-content-box">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sint provident ducimus consequuntur culpa porro recusandae quod 
                    unde molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sint provident ducimus consequuntur culpa. <br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sint provident ducimus consequuntur culpa porro recusandae quod 
                    unde molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sint provident ducimus consequuntur culpa porro recusandae quod 
                    unde molestias abculpa porro recusandae quod 
                    unde molestias ab. </p>
                  </div>
                </b-tab>
                <b-tab title="Reviews">

                  <div class="product-details-content-box">
                    <div class="media comment-box mb-3">
                      <img :src="require('@/assets/images/profile-img/owner2.png')" class="mr-3" alt="author" height="50px">
                      <div class="media-body">
                        <h5 class="mt-0">Suraiya Aysha</h5>
                        <div class="given-rating">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </div>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </div>
                    </div>
                    <div class="media comment-box mb-3">
                      <img :src="require('@/assets/images/profile-img/owner2.png')" class="mr-3" alt="author" height="50px">
                      <div class="media-body">
                        <h5 class="mt-0">Suraiya Aysha</h5>
                        <div class="given-rating">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </div>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </div>
                    </div>
                    <div class="media comment-box mb-3">
                      <img :src="require('@/assets/images/profile-img/owner2.png')" class="mr-3" alt="author" height="50px">
                      <div class="media-body">
                        <h5 class="mt-0">Suraiya Aysha</h5>
                        <div class="given-rating">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </div>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </div>
                    </div>
                  </div>

                  <div class="product-details-content-box write-review mt-4">
                    <h4 class="mb-2">Submit review:</h4>

                    <div v-if="!isLogin">
                      <p>To submit review <nuxt-link to="/customer/login">Login</nuxt-link> please!</p>
                      <h5 class="d-block mt-4"><nuxt-link to="/customer/login" class="theme-button">Login</nuxt-link></h5>
                    </div>
                    
                    <form v-else>
                      <textarea id="textarea-default" placeholder="Write review here..." rows="2" class="mb-2 form-control" wrap="soft"></textarea>
                      <b-form-rating v-model="ratingValue" id="rating-inline" inline color="#ff8800" class="mb-2"></b-form-rating>
                      <button type="submit" class="theme-button d-block">Submit Review</button>
                    </form>
                  </div>

                </b-tab>
              </b-tabs>
            </b-card>
          </div>
        </div>
      </div>
    </section>
    <!-- Related Product Slider Area -->
    <RelatedProductSlider />

    <Footer1 />
  </div>
</template>

<script>
export default {
  layout: 'public',

  data() {
    return {
      ratingValue: 4, 
      isLogin: true,

      photos: [
        {
          photo: 'https://cdn.pixabay.com/photo/2016/08/01/17/08/tomatoes-1561565_960_720.jpg'
        },
        {
          photo: 'https://cdn.pixabay.com/photo/2016/03/26/16/44/tomatoes-1280859_960_720.jpg'
        },
        {
          photo: 'https://cdn.pixabay.com/photo/2018/07/06/08/49/tomato-3520004_960_720.jpg'
        },
        {
          photo: 'https://cdn.pixabay.com/photo/2014/12/20/14/03/vegetables-573961_960_720.jpg'
        }
      ]
    }
  },
  methods: {
  },

}
</script>

<style>

</style>