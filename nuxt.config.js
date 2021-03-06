export default {
  // loading: "~/components/admin/loading.vue",
  loading: {
    color: '#e76732',
    height: '5px'
  },
  router: {
    extendRoutes(routes) {
      routes.push({
        path: "/"
      });
    }
  },
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  ssr: false,
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    script: [
      // { src: 'https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyAuo-_NYLqOIQdCkQoInC-Z8bvE0NVMuC8'}
      // { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDtygZ5JPTLgwFLA8nU6bb4d_6SSLlTPGw&callback=initMap'},
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    "~/assets/admin/scss/app.scss",
    'quill/dist/quill.core.css',
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    '@/assets/scss/app.scss',
    'swiper/dist/css/swiper.css',
    // 'vue-simple-range-slider/dist/vueSimpleRangeSlider.css',
    ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    "~/plugins/admin/fireauth.js",
    "~/plugins/admin/fakeauth.js",
    "~/plugins/admin/simplebar.js",
    "~/plugins/admin/vue-click-outside.js",
    "~/plugins/admin/vuelidate.js",
    "~/plugins/admin/draggable.js",
    "~/plugins/admin/vue-slidebar.js",
    "~/plugins/admin/tour.js",
    "~/plugins/admin/vue-lightbox.js",
    "~/plugins/admin/mask.js",
    "~/plugins/admin/quill-editor.js",
    "~/plugins/admin/chartist.js",
    "~/plugins/admin/vue-googlemap.js",
    "~/plugins/admin/string-filter",
    "~/plugins/plugin.js"
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    '@nuxtjs/dotenv',
    'bootstrap-vue/nuxt',
    'nuxt-i18n'
  ],
  i18n: {
    locales: ['en', 'fr', 'es', 'ar'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./locales/en.json'),
        fr: require('./locales/fr.json'),
        es: require('./locales/es.json'),
        ar: require('./locales/ar.json'),
        zh: require('./locales/zh.json')
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
 build: {
  babel: {
    compact: true
  }
},
  env: {
    auth: process.env.VUE_APP_DEFAULT_AUTH,
    apikey: process.env.VUE_APP_APIKEY,
    authdomain: process.env.VUE_APP_AUTHDOMAIN,
    databaseurl: process.env.VUE_APP_DATABASEURL,
    projectid: process.env.VUE_APP_PROJECTId,
    storgebucket: process.env.VUE_APP_STORAGEBUCKET,
    message: process.env.VUE_APP_MESSAGINGSENDERID,
    appid: process.env.VUE_APP_APPId,
    measurement: process.env.VUE_APP_MEASUREMENTID,
  }
}