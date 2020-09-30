<template>
  <div>
    <b-modal
      id="modal-login"
      ref="modal"
      
      hide-footer
    >
      <LoginForm />

    </b-modal>
  </div>
</template>

<script>
import LoginForm from '../login/LoginForm'
  export default {
    // data() {
    //   return {
    //     login: false,
    //   }
    // },
  }
</script>

<style>
#modal-login section {
	padding: 0;
	border-bottom: none;
}
#modal-login form {
  width: 100%;
}
#modal-login .modal-content, #modal-login .modal-content .modal-body {
	background-color: #f7f8fa;
}
</style>