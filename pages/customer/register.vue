<template>
  <div>
    <section class="login-register-page section-b-space">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-12 col-md-8 col-lg-6">
                  <b-tabs>

                      <b-tab title="Login">
                          
                          <b-form @submit="onSubmit" @reset="onReset" v-if="show">

                              <b-form-input id="username" v-model="form.username" type="text" required placeholder="Enter name" ></b-form-input>
                              <b-form-input id="password" type="password" required placeholder="Password" ></b-form-input>

                              <div class="d-flex justify-content-between">
                                  <b-form-checkbox id="remember" v-model="form.checked" value="remember">Remember me</b-form-checkbox>
                                  <nuxt-link to="/customer/forgot-password" class="text-danger">Forgot password?</nuxt-link>
                              </div>

                              <button type="submit" class="theme-button mt-4">Login</button>
                          </b-form>

                      </b-tab>

                      <b-tab title="Register" active>
                          
                          <b-form @submit="onSubmit" @reset="onReset" v-if="show">

                              <b-form-input id="username" v-model="form.username" type="text" required placeholder="Enter name" ></b-form-input>
                              <b-form-input id="email" v-model="form.email" type="email" required placeholder="Enter email" ></b-form-input>
                              <b-form-input id="password" type="password" required placeholder="Password" ></b-form-input>

                              <button type="submit" class="theme-button mt-4">Register</button>
                          </b-form>

                      </b-tab>

                  </b-tabs>
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
        alert(JSON.stringify(this.form))
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