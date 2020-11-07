<template>
  <section class="bottom-nav">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <b-nav class="d-xs-block d-sm-block d-md-block d-lg-none d-xl-none">
            <b-button class="cart-small-view mobile-categories-btn" v-b-toggle.categories-sidebar-mobile> <i class="fas fa-bars mr-2"></i>Categories</b-button>
          </b-nav>
          <b-nav class="d-none d-xs-none d-sm-none d-md-none d-lg-block d-xl-block">
            <b-nav-item to="#">My weekly picks</b-nav-item>
            <b-nav-item to="#">Online only</b-nav-item>
            <b-nav-item to="#">Half price</b-nav-item>
          </b-nav>

          <b-nav>
            <b-nav-item><b-button class="cart-small-view" v-b-toggle.sidebar-right><b-badge variant="success" class="rounded-circle">9+</b-badge><b-icon-bag-fill></b-icon-bag-fill>$120</b-button></b-nav-item>
         
            <b-nav-item to="/customer/login">Login</b-nav-item>
            <b-nav-item to="/customer/register">Signup</b-nav-item>

            <b-nav-item-dropdown class="dropdown-box" right v-if="isLogin">
              <template v-slot:button-content>
                <span class="customer-img mr-1"><b-img :src='"@/assets/images/profile-img/owner2.png"' alt="img" height="27" /></span>
                <span class="user-name">Suraiya Aysha</span>
                <i class="fas fa-angle-down"></i>
              </template>
              <b-dropdown-item to="#">Profile</b-dropdown-item>
              <b-dropdown-item to="#">Settings</b-dropdown-item>
              <b-dropdown-item to="/">Logout</b-dropdown-item>
            </b-nav-item-dropdown>

          </b-nav>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false
    }
  },
}
</script>