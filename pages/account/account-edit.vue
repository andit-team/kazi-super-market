<template>
  <div>
    <Header />
    <!-- Login Area Start -->
    <section class="login-area register-area customer-account-edit-area section-b-space light-layout">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="customer-profile-go-back-btn">
                        <nuxt-link to="/account/profile"><i class="fas fa-angle-left mr-1"></i>প্রোফাইলে যান</nuxt-link>
                    </div>
                    <h3 class="text-center">{{title}}</h3>
                    <ValidationObserver v-slot="{ invalid }">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                          <label for="fullname">সম্পূর্ণ নাম</label>
                          <ValidationProvider rules="required" v-slot="{ errors }" name="Name">
                          <input type="text" class="form-control" id="fullname" v-model="sendRegData.name" name="fullname" value="Suraiya">
                          <span class="validate-error">{{ errors[0] }}</span>
                          </ValidationProvider>
                        </div>
                        <div class="form-group">
                            <label for="mobile">মোবাইল</label>
                            <ValidationProvider rules="required" v-slot="{ errors }" name="Mobile">
                            <input type="text" class="form-control" id="mobile" v-model="sendRegData.phone" name="mobile" value="01919 111111">
                            <span class="validate-error">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group">
                            <label for="email">ই-মেইল</label>
                            <ValidationProvider rules="email" v-slot="{ errors }" name="Email">
                            <input type="email" class="form-control" id="email" v-model="sendRegData.email" name="email" value="demo@gmail.com">
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
                        <div class="customer-account-edit-button d-flex">
                            <button type="submit" :disabled="invalid" class="theme-button">Save</button>
                            <button type="reset" class="btn ml-4">Reset</button>
                        </div>

                    </form>
                    </ValidationObserver>
                </div>
            </div>
        </div>
    </section>
    <!-- Login Area End -->
    <Footer />
  </div>
</template>

<script>
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
      title: 'আপনার অ্যাকাউন্ট আপডেট করুন',
      sendRegData: {
        name: 'Suraiya',
        phone: '01911000000',
        email: 'demo@gmail.com',
        password: null,
      },
    }
  },
  methods: {
    onSubmit() {
      console.log('Form has been submitted!')
    }
  }
}
</script>