<template>
  <div>
    <Header />
    <LoginForm />
    <Footer />
  </div>
</template>
<script>
import Header from '../../components/header'
import LoginForm from '../../components/login/LoginForm'
import Footer from '../../components/footer'
export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Welcome back to Andgarivara',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'Login to Andgarivara' }
    ],
  },

}
</script>
