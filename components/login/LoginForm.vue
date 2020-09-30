<template>
  <div>
    <!-- Login Area Start -->
    <section class="login-area section-b-space light-layout">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h3 class="text-center">{{logintitle}}</h3>
                    <ValidationObserver v-slot="{ invalid }">
                      <form @submit.prevent="onSubmit">
                          <div class="form-group">
                              <label for="mobile">মোবাইল</label>
                              <ValidationProvider rules="required" v-slot="{ errors }" name="Mobile" >
                                <input type="text" class="form-control" id="mobile" v-model="sendLoginData.phone" name="mobile">
                                <span class="validate-error">{{ errors[0] }}</span>
                              </ValidationProvider>
                          </div>
                          <div class="form-group">
                              <label for="password">পাসওয়ার্ড</label>
                              <ValidationProvider rules="required" v-slot="{ errors }" name="Password">
                                <input type="password" class="form-control" id="password" v-model="sendLoginData.password" name="password">
                                <span class="validate-error">{{ errors[0] }}</span>
                              </ValidationProvider>
                          </div>
                          <div class="form-group form-check">
                              <input type="checkbox" class="form-check-input" id="checkbox">
                              <div class="remember-box d-flex justify-content-between">
                                  <label class="form-check-label" for="checkbox">মনে রাখুন</label>
                                  <nuxt-link to="reset-password">পাসওয়ার্ড ভুলে গেছেন?</nuxt-link>
                              </div>
                          </div>

                          <div class="form-group text-center mt-2">
                              <button type="submit" :disabled="invalid" class="btn theme-button">লগ ইন</button>
                          </div>
                      </form>    
                    </ValidationObserver>
                    <p class="dont-have-account text-center">অ্যাকাউন্ট নেই?
                      <nuxt-link :to="{ path: '/account/register'}">{{registertitle}}</nuxt-link>।
                    </p>
                </div>
            </div>
        </div>
    </section>
    <!-- Login Area End -->
  </div>
</template>
<script>
import { mapGetters ,mapActions } from 'vuex'
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full.esm'
export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      logintitle: 'ফিরে আসার জন্য ধন্যবাদ',
      registertitle: 'সাইন আপ করুন',
      sendLoginData: {
        phone: '',
        password: ''
      }
    }
  },
  methods: {
    // Registration Start
    ...mapActions(['getLoginData']),
    onSubmit(e){
      e.preventDefault();
      this.getLoginData(this.sendLoginData);
    },
  },

}
</script>
