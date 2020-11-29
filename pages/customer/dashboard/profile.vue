<template>
  <div class="login-register-content-wrap profile-update-page bg-darker section-t-space section-b-space">

    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-10">

        <h3>Update Profile</h3>

        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-input id="username" v-model="form.username" type="text" required placeholder="Type new name" ></b-form-input>
          <b-form-input id="email" v-model="form.email" type="email" required  placeholder="Type new email" ></b-form-input>
          <b-form-input id="password" type="password" required placeholder="Type new password" ></b-form-input>
          <button type="submit" class="theme-button mt-4">Update profile</button>
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
          username: 'Suraiya Aysha',
          email: 'example@gmail.com',
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
        this.form.username = ''
        this.form.email = ''
        this.form.checked = ''
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
    title: 'Customer Profile - Kazis Supermarket',
  },

}
</script>
<style lang="scss" scoped>
.login-register-content-wrap.profile-update-page {
  form {
    box-shadow: none;
    background-color: #fff;
      
    .form-control {
      margin-bottom: 15px;
    }
  }
}
</style>