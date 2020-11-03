<template>
  <div>
    <!-- <Breadcrumbs title="Contact us" /> -->
    <section class="contact-page-area section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-6">
            <div class="contact-address-wrap">
              <h3 class="contact-title">Our Address</h3>
              <address>
                <h4>Address1</h4>
                <ul>
                  <li> 1355 Market St, Suite 900 San Francisco, CA 94103 P: (123) 456-7890</li>
                  <li><b-icon-telephone-fill />Phone: 9823xxx</li>
                  <li><b-icon-telephone-fill />Fax: 123456789xxx</li>
                  <li><b-icon-envelope-fill />Email: <a href="kazissupermarket@gmail.com" class="color-orange">kazissupermarket@gmail.com</a></li>
                </ul>
              </address>
              <address>
                <h4>Address1</h4>
                <ul>
                  <li> 1355 Market St, Suite 900 San Francisco, CA 94103 P: (123) 456-7890</li>
                  <li><b-icon-telephone-fill />Phone: 9823xxx</li>
                  <li><b-icon-telephone-fill />Fax: 123456789xxx</li>
                  <li><b-icon-envelope-fill />Email: <a href="kazissupermarket@gmail.com" class="color-orange">kazissupermarket@gmail.com</a></li>
                </ul>
              </address>
            </div>
          </div>

          <div class="col-12 col-md-12 col-lg-6">
          
            <h3 class="contact-title">Contact Information</h3>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            
              <b-form-group>
                <label for="name">Name <span class="text-danger">*</span></label>
                <b-form-input
                  id="name"
                  v-model="form.name"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group>
                <label for="email">E-mail <span class="text-danger">*</span></label>
                <b-form-input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group>
                <label for="comment">Comment <span class="text-danger">*</span></label>
                <b-form-textarea
                  id="comment"
                  v-model="form.comment"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>

              <button type="submit" class="theme-button">Submit</button>
            </b-form>
          </div>
        </div>
      </div>
    </section>

    <!-- Map with markers -->
    <gmap-map :center="{ lat: 11, lng: 12 }" :zoom="3">
      <gmap-marker v-for="(m, index) in markers" :key="index" :position="m.position" :clickable="true" :draggable="true" @click="center = m.position"></gmap-marker>
    </gmap-map>

    <Footer1 />
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  layout: 'public',

  data() {
    return {
      form: {
        name: '',
        email: '',
        comment: ''
      },
    show: true,
    markers: [{
      position: {
        lat: 10.0,
        lng: 10.0
      }
    },
    {
      position: {
        lat: 15.0,
        lng: 13.0
      }
    }
      ],

    }
  },
  methods: {

    onSubmit(evt) {
      evt.preventDefault()
      alert('Form Submitted Successfully')
    },

    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.name = ''
      this.form.email = ''
      this.form.comment = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },
  

  /*
  ** Headers of the page
  */
  head: {
    title: 'Contact Us - Kazis Supermarket',
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