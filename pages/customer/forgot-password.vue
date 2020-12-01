<template>
  <div>
    <section class="login-register-page section-b-space">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-12 col-md-8 col-lg-6">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="text-center">
                <h2 class="mb-3">Reset your password</h2>
                  <b-form-input id="email" v-model="form.email" type="email" required placeholder="Enter email" ></b-form-input>
                    <button type="submit" class="theme-button mt-3">Submit</button>
                </b-form>
              </div>
          </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'public',
  data() {
      return {
        form: {
          email: ''
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
        this.form.email = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>