import Vue from "vue";

import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAuo-_NYLqOIQdCkQoInC-Z8bvE0NVMuC8",
    libraries: "places"
  },
  installComponents: true
});
