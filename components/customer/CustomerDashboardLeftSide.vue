<template>
  <div class="dashboard-left-bar different-bg rounded pt-4 sticky">
    <!-- Account User Photo -->
    <div class="user-profile-photo-wrap mb-3 rounded-0 border-right-0 border-left-0 border-top-0 border-bottom border-light bg-transparent text-center">
      
      <div class="user-photo-wrap rounded-circle mx-auto">
        <img :src='"@/assets/images/profile-img/owner2.png"' alt="Suraiya Aysha" class="rounded-circle w-100">
      </div> 
      <h4 class="mt-2">Suraiya Aysha</h4>
      <!-- Upload Profile Photo Start -->
      <button class="customer-info-box theme-button position-relative my-2 mx-auto">Edit Photo
        <b-form-file v-model="upload_image" plain accept=".jpg, .jpeg, .png, .gif, .svg"></b-form-file>
      </button>
    </div>
    <!-- Account User Photo -->

    <!-- Left Menu Item List -->
    <div class="dashboard-menu-wrap pb-4 mb-4">
      <ul class="dashboard-left-menu-list">
        <li><nuxt-link to="/customer/dashboard/">Dashboard</nuxt-link></li>
        <li><nuxt-link to="/customer/dashboard/order">Order history</nuxt-link></li>
        <li><nuxt-link to="/customer/dashboard/shipping">Shipping address</nuxt-link></li>
        <li><nuxt-link to="/customer/dashboard/">Billing address</nuxt-link></li>
        <li><nuxt-link to="/customer/dashboard/transaction">Transactions</nuxt-link></li>
        <li><nuxt-link to="/customer/dashboard/profile">Profile</nuxt-link></li>
        <li><nuxt-link to="/">Logout</nuxt-link></li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>