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
                            <li><nuxt-link to="/">Home</nuxt-link></li>
                            <li><nuxt-link to="/about">About Us</nuxt-link></li>
                            <li><nuxt-link to="/contact">Contact Us</nuxt-link></li>
                          </ul>
                      </div>
                  </div>
                  <!-- Column End-->

                  <!-- Column Start-->
                  <div class="col-12 col-sm-12 col-md-3 col-lg-3">
                      <div class="footer-widget">
                          <h5 class="text-uppercase">Extras</h5>
                          <ul>
                            <li><nuxt-link to="#">Terms</nuxt-link></li>
                            <li><nuxt-link to="#">Privacy policy</nuxt-link></li>
                            <li><nuxt-link to="#">Collection notice</nuxt-link></li>
                          </ul>
                      </div>
                  </div>
                  <!-- Column End-->

                  <!-- Column Start-->
                  <div class="col-12 col-sm-12 col-md-3 col-lg-3">
                      <div class="footer-widget footer-get-app">
                        <h5 class="text-uppercase">Get the app</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam veritatis!</p>
                        <ul>
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
                        <form class="form-inline" @submit.prevent="SaveSubscriber">                   
                            <div class="input-group w-100">
                                <input type="text" class="form-control" v-model="form.email" v-focus name="email" :class="{ 'is-invalid': submitted && $v.form.email.$error }" placeholder="Your email address">
                                <!-- <div v-if="submitted && !$v.form.email.required" class="invalid-feedback">This value is required.</div>  -->
                                <div class="input-group-append">
                                    <button class="btn theme-button" :class="{ 'disabled': submit}" id="submit" type="submit" v-if="!form.id">Subscribe</button>
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
                                  <li><a href="#">Collection Notice</a></li>
                                  <li><a href="#">Accessibility</a></li>
                              </ul>
                          </div>
                          <div class="bottom-footer-right">
                            <ul class="payment-images d-flex">
                                <li><img :src="require('@/assets/images/payment-img/1.png')" alt="payment"></li>
                                <li><img :src="require('@/assets/images/payment-img/2.png')" alt="payment"></li>
                                <li><img :src="require('@/assets/images/payment-img/3.png')" alt="payment"></li>
                                <li><img :src="require('@/assets/images/payment-img/4.png')" alt="payment"></li>
                                <li><img :src="require('@/assets/images/payment-img/5.png')" alt="payment"></li>
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
import {
    required
} from 'vuelidate/lib/validators'
import Swal from "sweetalert2";
import { helper } from '../../helpers/helper'
/**
 * Form Validation component
 */
import { mapGetters,mapActions } from 'vuex'
import axios from 'axios'
export default {
    data() {
        return {
            btnImg1: require('@/assets/images/button-img/google-app-btn.png'),
            btnImg2: require('@/assets/images/button-img/apple-app-btn.png'),
            form: {
                email: '',
            },
            submitted: false,
            submit: false,
        }
    },

  validations: {
    form: {
        email: {
            required
        },

    }
  },

    methods: {
        ...mapActions({
            newSubscriber : 'subscribers/createSubscriber',
            }),
        SaveSubscriber(e) {
            this.submitted = true
            this.$v.$touch()
            if (this.$v.$invalid) {
                console.log('error submit');
            } else {
                this.submit = true
                this.newSubscriber(this.form).then(res => {
                    if(res.error === false){
                        helper.SuccessMsg(res.msg);
                        this.form = {
                            id: '',
                            email: '',
                        }
                    }else{
                        helper.WarningMsg(res.msg);
                    }
                    this.submit = false
                }).catch(err => {
                    helper.WarningMsg(err.msg);
                });
            }
        },

  },
    directives: {
    focus: {
      // directive definition
      inserted: function (el) {
      el.focus()
      }
    }
  },
}
</script>
<style>

</style>