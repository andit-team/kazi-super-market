<template>
  <div>
    <Header />
    <!-- Login Area Start -->
    <section class="login-area register-area section-b-space light-layout">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h3 class="text-center">{{title}}</h3>
                    <ValidationObserver v-slot="{ invalid }">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                          <label for="fullname">সম্পূর্ণ নাম</label>
                          <ValidationProvider rules="required" v-slot="{ errors }" name="Name">
                          <input type="text" class="form-control" id="fullname" v-model="sendRegData.name" name="fullname">
                          <span class="validate-error">{{ errors[0] }}</span>
                          </ValidationProvider>
                        </div>
                        <div class="form-group">
                            <label for="mobile">মোবাইল</label>
                            <ValidationProvider rules="required" v-slot="{ errors }" name="Mobile">
                            <input type="text" class="form-control" id="mobile" v-model="sendRegData.phone" name="mobile">
                            <span class="validate-error">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group">
                            <label for="email">ই-মেইল</label>
                            <ValidationProvider rules="email" v-slot="{ errors }" name="Email">
                            <input type="email" class="form-control" id="email" v-model="sendRegData.email" name="email">
                            <span class="validate-error">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group">
                            <label for="password">পাসওয়ার্ড</label>
                            <ValidationProvider rules="required" v-slot="{ errors }" name="Password">
                            <input type="password" class="form-control" id="password" v-model="sendRegData.password" name="password">
                            <span class="validate-error">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>

                        <div class="privacy-box text-center">
                            <p>অ্যাকাউন্ট খুলুন ক্লিকের মাধ্যমে অ্যান্ড সেবার <a href="terms.html">শর্তাবলী ব্যবহার</a> ও <a href="privacy.html">গোপনীয়তা</a> বজায় রাখতে অঙ্গিকারাব্ধ হলে।</p>
                        </div>

                        <div class="form-group text-center mt-2">
                            <button type="submit" :disabled="invalid" class="btn theme-button">অ্যাকাউন্ট খুলুন</button>
                        </div>
                    </form>
                    </ValidationObserver>
                    <p class="dont-have-account text-center">ইতিমধ্যে কি অ্যাকাউন্ট খোলা আছে? <nuxt-link to="/account/login">লগ ইন</nuxt-link></p>
                </div>
            </div>
        </div>
    </section>
    <!-- Login Area End -->
    <Footer />
  </div>
</template>
<script>
import { mapGetters ,mapActions } from 'vuex'
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full.esm'
import Header from '../../components/header'
import Footer from '../../components/footer'
export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      title: 'আপনার অ্যাকাউন্ট খুলুন',
      sendRegData: {
        name: '',
        phone: '',
        email: '',
        password: '',
      },
    }
  },
  methods: {
    // Registration Start
    ...mapActions(['getRegistrationData']),
    onSubmit(e){
      console.log('Form has been submitted!')
      e.preventDefault();
      this.getRegistrationData(this.sendRegData);
    },
    // Registration End


          // Map Methods
      // Map Methods End
  },



  /*
  ** Headers of the page
  */
  head: {
    title: 'Sign Up on Andgarivara',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'Signup to Andgarivara' }
    ],
  },

}
</script>
