<template>
  <div>
    <!-- <Breadcrumbs title="Contact us" /> -->
    <section class="contact-page-area section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-6">
            <div class="contact-address-wrap" v-if="loaded">
              <h3 class="contact-title">Our Address</h3>
              <address>
                <h4>Address</h4>
                <ul>
                  <li>{{tableData[0].address.address}}</li>
                  <li><b-icon-telephone-fill />Phone: {{tableData[0].address.Phone}}</li>
                  <li><b-icon-telephone-fill />Fax: {{tableData[0].address.fax}}</li>
                  <li><b-icon-envelope-fill />Email: <span class="color-orange">{{tableData[0].address.email}}</span></li>
                </ul>
              </address>
              <!-- <address>
                <h4>Address1</h4>
                <ul>
                  <li> 1355 Market St, Suite 900 San Francisco, CA 94103 P: (123) 456-7890</li>
                  <li><b-icon-telephone-fill />Phone: 9823xxx</li>
                  <li><b-icon-telephone-fill />Fax: 123456789xxx</li>
                  <li><b-icon-envelope-fill />Email: <a href="kazissupermarket@gmail.com" class="color-orange">kazissupermarket@gmail.com</a></li>
                </ul>
              </address> -->
            </div>
          </div>

          <div class="col-12 col-md-12 col-lg-6">
          
            <h3 class="contact-title">Contact Information</h3>
            <b-form @submit.prevent="SaveContact">
            
              <b-form-group>
                <label for="name">Name <span class="text-danger">*</span></label>
                <b-form-input
                  id="name"
                  v-model="form.name"
                  v-focus name="name"
                  :class="{ 'is-invalid': submitted && $v.form.name.$error }"
                ></b-form-input>
                <div v-if="submitted && !$v.form.name.required" class="invalid-feedback">This value is required.</div> 
              </b-form-group>

              <b-form-group>
                <label for="email">E-mail <span class="text-danger">*</span></label>
                <b-form-input
                  id="email"
                  v-model="form.email"
                  type="email"
                  v-focus name="email"
                  :class="{ 'is-invalid': submitted && $v.form.email.$error }"
                ></b-form-input>
                <div v-if="submitted && !$v.form.email.required" class="invalid-feedback">This value is required.</div> 
              </b-form-group>
              
              <b-form-group>
                <label for="subject">Subject <span class="text-danger">*</span></label>
                <b-form-input
                  id="subject"
                  v-model="form.subject"
                  v-focus name="subject"
                  :class="{ 'is-invalid': submitted && $v.form.subject.$error }"
                ></b-form-input>
                <div v-if="submitted && !$v.form.subject.required" class="invalid-feedback">This value is required.</div> 
              </b-form-group>

              <b-form-group>
                <label for="message">Message <span class="text-danger">*</span></label>
                <b-form-textarea
                  id="message"
                  v-model="form.message"
                  rows="3"
                  max-rows="6"
                  v-focus name="message"
                  :class="{ 'is-invalid': submitted && $v.form.message.$error }"
                ></b-form-textarea>
                <div v-if="submitted && !$v.form.message.required" class="invalid-feedback">This value is required.</div> 
              </b-form-group>

              <button class="theme-button" :class="{ 'disabled': submit}" id="submit" type="submit" v-if="!form.id">Submit</button>
            </b-form>
          </div>
        </div>
      </div>
    </section>

    <!-- Map with markers -->
    <gmap-map :center="{ lat: 22.821849999999998, lng: 89.559187 }" :zoom="3">
      <gmap-marker v-for="(m, index) in markers" :key="index" :position="m.position" :clickable="true" :draggable="true" @click="center = m.position"></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>

import {
    required
} from 'vuelidate/lib/validators'
import Swal from "sweetalert2";
import { helper } from '../helpers/helper'
/**
 * Form Validation component
 */
import { mapGetters,mapActions } from 'vuex'
import axios from 'axios'

export default {
  layout: 'public',

  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      submitted: false,
      submit: false,

      markers: [{
        position: {
          lat: 22.821849999999998,
          lng: 89.559187
        }
      },],

      loaded: false,

    }
  },
  validations: {
      form: {
        name: {
          required
        },
        email: {
          required
        },
        subject: {
          required
        },
        message: {
          required
        },
      }
  },
  computed: {
    ...mapGetters({tableData : 'settings/allAddress'}),
  },
  methods: {
    ...mapActions({
          newContact : 'settings/createContact',
          // For Show Address
          AddressData : 'settings/getAddress',
        }),
    SaveContact(e) {
        this.submitted = true
        this.$v.$touch()
        if (this.$v.$invalid) {
            console.log('error submit');
        } else {
            this.submit = true
            this.newContact(this.form).then(res => {
                if(res.error === false){
                    helper.SuccessMsg(res.msg);
                    this.form = {
                        id: '',
                        name: '',
                        email: '',
                        subject: '',
                        message: '',
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

  async created(){
    await this.AddressData();
    this.loaded = true
  },

  directives: {
    focus: {
      // directive definition
      inserted: function (el) {
      el.focus()
      }
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