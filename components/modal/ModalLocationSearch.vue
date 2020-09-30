<template>
  <div>
    <b-modal
      id="modal-location-search"
      ref="modal"
      title="এটি কি আপনার সঠিক অবস্থান?"
      hide-footer
    >
      <form @submit.prevent>
        <div class="form-group">
          <GeoLocation></GeoLocation>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
// import axios from 'axios'
import GeoLocation from '../GeoLocation'

  export default {
    // data() {
    //   return {
    //     // Modal Data
    //     address: "",
    //     error: "",
    //     spinner: false,
    //     imagepath: require('@/assets/images/location.svg'),
    //     // Modal Data end
    //   }
    // },

    // mounted() {
    //   new google.maps.places.Autocomplete(
    //     document.getElementById("autocomplete"),
    //     {
    //       bounds: new google.maps.LatLngBounds(
    //         new google.maps.LatLng(23.684994, 90.356331)
    //       )
    //     }
    //   )
    // },

    // methods: {
    //   // Map Methods
    //   locatorButtonPressed(){

    //     this.spinner = true;

    //     if(navigator.geolocation) {
    //       navigator.geolocation.getCurrentPosition(
    //         position => {
    //           this.getAddressFrom(position.coords.latitude, position.coords.longitude);
    //           // console.log(position.coords.latitude);
    //           // console.log(position.coords.longitude);
    //           this.showUserLocationOnTheMap(position.coords.latitude, position.coords.longitude);
    //         },
    //         error => {
    //           this.error = "Locator is unable to find your address. Please type your address manualy";
    //           // this.error = error.message;
    //           this.spinner = false;
    //           // console.log(error.message);
    //         }
    //       );
    //     } else {
    //       this.error = error.message;
    //       this.spinner = false;
    //       console.log("Your browser does not support geolocation API");
    //     }
    //   },

    //   getAddressFrom(lat, long) {
    //     const apiKey = 'AIzaSyDtygZ5JPTLgwFLA8nU6bb4d_6SSLlTPGw'

    //     this.$cookies.set('lat-cookie',lat);
    //     this.$cookies.set('lng-cookie',long);

    //     axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${apiKey}`).then(response => {
    //       if(response.data.error_message){
    //         this.error = response.data.error_message;
    //         console.log(response.data.error_message);
    //       } else {
    //           this.address = response.data.results[0].formatted_address
    //           // console.log(response.data.results[0].formatted_address);
    //       }
    //       this.spinner = false;
    //       }).catch(error => {
    //         this.error = error.message;
    //         this.spinner = false;
    //         console.log(error.message)
    //       });
    //   },

    //   showUserLocationOnTheMap(latitude, longitude) {
    //     // Create A Map Object
    //     let map = new google.maps.Map(document.getElementById("map"), {
    //       zoom:15,
    //       center: new google.maps.LatLng(latitude, longitude),
    //       mapTypeId: google.maps.MapTypeId.ROADMAP
    //     });

    //     // Add Marker
    //     new google.maps.Marker({
    //       position: new google.maps.LatLng(latitude, longitude),
    //       map:map
    //     })

    //   }
    //   // Map Methods End
    // }
  }
</script>

<style>
#modal-location-search___BV_modal_outer_ {
	z-index: 99 !important;
}
#modal-location-search .modal-dialog {
	max-width: 600px;
}
.modal-content {
	padding: 30px;
}
.modal-footer {
	justify-content: center;
}
/* #modal-location-search form input {
	font-size: 14px;
	border: 1px solid green;
	width: 96%;
	height: 42px;
	padding: 10px;
} */
/* #modal-location-search form .form-group {
  display: flex;
} */
</style>