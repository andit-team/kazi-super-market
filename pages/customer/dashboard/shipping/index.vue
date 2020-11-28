<template>
  <div class="login-register-content-wrap update-shipping-address-page different-bg section-t-space section-b-space">

    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6">

        <h3>Add Shipping Address</h3>

        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-input id="house_no" v-model="form.house_no" type="text" required placeholder="Type house no." ></b-form-input>
          <b-form-input id="road_no" v-model="form.road_no" type="text" required placeholder="Type road no." ></b-form-input>
          <b-form-textarea id="full_address" v-model="form.full_address" required placeholder="Type full address" ></b-form-textarea>
          <button type="submit" class="theme-button mt-4">Submit shipping address</button>
        </b-form>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  layout: 'customer-dashboard',
    data() {
      return {
        form: {
          house_no: '',
          road_no: '',
          full_address: '',
        },
        show: true
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
        this.form.house_no = ''
        this.form.road_no = ''
        this.form.full_address = ''
        // Trick to reset/clear native browser form validation state
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
    title: 'Update Shipping Address - Kazis Supermarket',
  },

}
</script>