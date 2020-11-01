<template>
  <div>
    <Breadcrumbs title="Contact us" />
    <Footer1 />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'public',
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