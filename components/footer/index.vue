<template>
  <!-- Footer Start -->
  <footer class="footer-area">
      <!-- Footer Middle Area Start-->
      <div class="footer-top-area section-t-space section-b-40-space">
          <div class="container">
              <div class="row">

                  <!-- Column Start-->
                  <div class="col-12 col-sm-12 col-md-3 col-lg-3">
                      <div class="footer-widget">
                          <h5 class="text-uppercase">Contact Info</h5>
                          <p><b-icon-telephone-fill /> 01458-89-90-52</p>
                          <p class="address">Lorem ipsum dolor sit amet-200, Australia</p>
                          <ul class="social-media d-flex">
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                          </ul>
                      </div>
                  </div>
                  <!-- Column End-->

                  <!-- Column Start-->
                  <div class="col-12 col-sm-12 col-md-3 col-lg-3">
                      <div class="footer-widget">
                          <h5 class="text-uppercase">Information</h5>
                          <ul>                            
                              <li><a href="#">Home</a></li>
                              <li><a href="#">About Us</a></li>
                              <li><a href="#">Quick Contact</a></li>
                              <li><a href="#">Blog Pages</a></li>
                              <li><a href="#">Client Feeds</a></li>
                          </ul>
                      </div>
                  </div>
                  <!-- Column End-->

                  <!-- Column Start-->
                  <div class="col-12 col-sm-12 col-md-3 col-lg-3">
                      <div class="footer-widget">
                          <h5 class="text-uppercase">Extras</h5>
                          <ul>
                              <li><a href="#">Home</a></li>
                              <li><a href="#">About Us</a></li>
                              <li><a href="#">Quick Contact</a></li>
                              <li><a href="#">Blog Pages</a></li>
                              <li><a href="#">Client Feeds</a></li>
                          </ul>
                      </div>
                  </div>
                  <!-- Column End-->

                  <!-- Column Start-->
                  <div class="col-12 col-sm-12 col-md-3 col-lg-3">
                      <div class="footer-widget footer-get-app">
                          <h5 class="text-uppercase">Get the app</h5>
                          <ul>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam veritatis!</p>
                              <li><a href="#"><img :src="btnImg1" alt="google"></a></li>
                              <li><a href="#"><img :src="btnImg2" alt="google"></a></li>
                          </ul>
                      </div>
                  </div>
                  <!-- Column End-->
              </div>
              <div class="subscribe-area">
                <div class="row">              
                    <div class="col-12 col-md-3">
                        <h4>Join our newsletter</h4>
                    </div>
                    <div class="col-12 col-md-4">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, tempore! Amet.</p>
                    </div>
                    <div class="col-12 col-md-5">
                        <form class="form-inline">                   
                            <div class="input-group w-100">
                                <input type="text" class="form-control" placeholder="Your email address">
                                <div class="input-group-append">
                                    <button type="submit" class="btn theme-button">Subscribe</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
              </div>
          </div>
      </div>
      <!--  Footer Middle Area End-->

      <!-- Footer Bottom Area Start-->
      <div class="footer-bottom-area">
          <div class="container">
              <div class="row">
                  <div class="col-sm-12">
                      <div class="footer-bottom-part">
                          <div class="bottom-footer-left d-flex">
                              <ul class="d-flex align-items-center">
                                  <li><a href="#">Terms</a></li>
                                  <li><a href="#">Privacy Policy</a></li>
                                  <li><a href="#">Collection Nocice</a></li>
                                  <li><a href="#">Accessibility</a></li>
                              </ul>
                          </div>
                          <div class="bottom-footer-right">
                            <ul class="payment-images d-flex">
                                <li><a href="#"><img :src="require('@/assets/images/payment-img/1.png')" alt="payment"></a></li>
                                <li><a href="#"><img :src="require('@/assets/images/payment-img/2.png')" alt="payment"></a></li>
                                <li><a href="#"><img :src="require('@/assets/images/payment-img/3.png')" alt="payment"></a></li>
                                <li><a href="#"><img :src="require('@/assets/images/payment-img/4.png')" alt="payment"></a></li>
                                <li><a href="#"><img :src="require('@/assets/images/payment-img/5.png')" alt="payment"></a></li>
                            </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!--  Footer Bottom Area End-->

  </footer>
  <!-- Footer End -->
</template>

<script>
export default {
    data() {
        return {
            btnImg1: require('@/assets/images/button-img/google-app-btn.png'),
            btnImg2: require('@/assets/images/button-img/apple-app-btn.png'),
        }
    }
}
</script>
<style>

</style>