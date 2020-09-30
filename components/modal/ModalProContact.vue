<template>
  <div>
    <b-modal
      id="modal-pro-contact"
      ref="modal"
      title="Business Info Details"
      hide-footer
    >
      <div>
        <ul>
          <li><strong>Address:</strong> {{address}}, {{locality}}</li>
          <li><strong>Mobile:</strong> {{mobile}}</li>
          <li><strong>Email:</strong> {{email}}</li>
        </ul>
        <div class="google-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14709.906425861587!2d89.55918704999999!3d22.82184995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1600593777791!5m2!1sen!2sbd" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>

      </div>

    </b-modal>
  </div>
</template>

<script>
  export default {
    props: {
      address: String,
      locality: String,
      mobile: String,
      email: String
    }
    // data() {
    //   return {
    //     login: false,
    //   }
    // },
  }
</script>

<style>
.modal-content {
	padding: 30px;
}
#modal-pro-contact ul li strong {
	margin-right: 5px;
}
#modal-pro-contact .google-map {
	margin-top: 20px;
}
</style>