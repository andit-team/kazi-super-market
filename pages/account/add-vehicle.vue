<template>
  <div>
    <Header />
    <!-- Login Area Start -->
    <section class="customer-account-edit-area add-vehicle-area light-layout section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="customer-profile-go-back-btn">
                <nuxt-link to="/account/profile"><i class="fas fa-angle-left mr-1"></i>প্রোফাইলে যান</nuxt-link>
            </div>
            <h3 class="text-center">{{title}}</h3>

            <ValidationObserver v-slot="{ invalid }">
            <form @submit.prevent="onSubmit">

              <div class="form-block card">
                <h5 class="mb-4">গাড়ির শিরোনাম এবং মডেল</h5>
                <div class="form-group">
                  <label for="vehicle_title">Vehicle title</label>
                  <ValidationProvider rules="required" v-slot="{ errors }" name="Vehicle title">
                  <input type="text" class="form-control" id="vehicle_title" v-model="vehicle_title" name="vehicle_title">
                  <span class="validate-error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>

                <div class="form-group">
                  <label for="vehicle_model">Vehicle Model</label>
                  <ValidationProvider rules="required" v-slot="{ errors }" name="Vehicle model">
                  <input type="text" class="form-control" id="vehicle_model" v-model="vehicle_model" name="vehicle_model">
                  <span class="validate-error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>

              </div>

              <div class="form-block card">
                <h5 class="mb-4">গাড়ির ছবি এবং বিবরণ</h5>

                <div class="form-group">
                  <label for="upload_image">Upload Image</label>
                  <b-form-file multiple v-model="upload_image" placeholder="Drop image here..." accept=".jpg, .jpeg, .png, .gif, .svg">
                    <template slot="file-name" slot-scope="{ names }">
                      <b-badge variant="dark">{{ names[0] }}</b-badge>
                      <b-badge v-if="names.length > 1" variant="dark" class="ml-1">
                        + {{ names.length - 1 }} More files
                      </b-badge>
                    </template>
                  </b-form-file>
                  <!-- <div class="mt-3">Selected Image: {{ upload_image ? upload_image.name : '' }}</div> -->
                </div>
                <div class="form-group">
                  <label for="vehicle_description">Vehicle Description</label>
                  <ValidationProvider rules="required" v-slot="{ errors }" name="Vehicle Description">
                  <!-- <input type="text" class="form-control" id="service_description" v-model="service_description" name="service_description"> -->
                  <textarea class="form-control" id="vehicle_description" v-model="vehicle_description" name="vehicle_description" cols="30" rows="3"></textarea>
                  <span class="validate-error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                 
              </div>

              <div class="form-block card">
                <h5 class="mb-4">বাণিজ্য তথ্য</h5>
                <div class="form-group">
                  <label for="address">Address</label>
                  <ValidationProvider rules="required" v-slot="{ errors }" name="Address">
                  <input type="text" class="form-control" id="address" v-model="address" name="address">
                  <span class="validate-error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>

                <div class="form-group">
                  <label for="mobile">Mobile</label>
                  <ValidationProvider rules="required" v-slot="{ errors }" name="Mobile">
                  <input type="text" class="form-control" id="mobile" v-model="mobile" name="mobile">
                  <span class="validate-error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>

                <div class="form-group">
                  <label for="email">Email</label>
                  <ValidationProvider rules="required" v-slot="{ errors }" name="Email">
                  <input type="text" class="form-control" id="email" v-model="email" name="email">
                  <span class="validate-error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>

              </div>
            
              <div class="customer-account-edit-button d-flex mt-4">
                  <button type="submit" :disabled="invalid" class="theme-button">Save Information</button>
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
      title: 'আপনার যানবাহন যুক্ত করুন',
      vehicle_title: '',
      vehicle_model: '',
      upload_image: '',
      vehicle_description: '',
      address: '',
      mobile: '',
      email: '',
      upload_image: [],
    }
  },
  methods: {
    onSubmit() {
      console.log('Form has been submitted!')
    }
  }
}
</script>

<style>
.form-block.card {
	padding: 30px;
	border: none;
	margin-top: 30px;
}
.custom-file {
	height: 43px;
}
input[type="file" i]:focus {
  box-shadow: none;
}
.custom-file-input:focus ~ .custom-file-label {
    /* border-color: #80bdff; */
    box-shadow: none;
}
.custom-file-label {
	height: 43px;
	padding: 0.375rem 0.75rem;
	line-height: 2;
	border-radius: 0;
	margin: 0;
	box-shadow: none;
}
.custom-file-label::after {
	line-height: 2;
	/* height: 41px; */
	height: 100%;
}
</style>