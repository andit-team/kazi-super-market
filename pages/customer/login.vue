<template>
  <div>
    <section class="login-register-page section-b-space">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-lg-6">
            <div class="login-register-content-wrap">
              <ul class="login-register-page-title d-flex align-items-center justify-content-center">
                <li><nuxt-link to="/customer/login">Login</nuxt-link></li>
                <li><nuxt-link to="/customer/register">Register</nuxt-link></li>
              </ul>
              <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-input id="username" v-model="form.username" type="text" required placeholder="Enter name" ></b-form-input>
                <b-form-input id="password" type="password" required placeholder="Password" ></b-form-input>
                <div class="d-flex justify-content-between">
                  <b-form-checkbox id="remember" v-model="form.checked" value="remember">Remember me</b-form-checkbox>
                  <nuxt-link to="/customer/forgot-password" class="text-danger">Forgot password?</nuxt-link>
                </div>
                <button type="submit" class="theme-button mt-4">Login</button>
              </b-form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer1 />  
  </div>
</template>

<script>
export default {
  layout: 'public',
  data() {
      return {
        form: {
          username: '',
          email: '',
          checked: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert('Login Success')
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
    }
  }
</script>