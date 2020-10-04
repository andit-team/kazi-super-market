<template>
  <section class="bottom-nav">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <ul class="d-xs-block d-sm-block d-md-block d-lg-none d-xl-none">
            <li><b-button class="cart-small-view mobile-categories-btn" v-b-toggle.categories-sidebar-mobile> <i class="fas fa-bars mr-2"></i>Categories</b-button></li>
          </ul>
          <ul class="d-none d-xs-none d-sm-none d-md-none d-lg-block d-xl-block">
            <li><a href="#">My weekly picks</a></li>
            <li><a href="#">Online only</a></li>
            <li><a href="#">Half price</a></li>
          </ul>
          <ul>
            <li><a href="#">Login</a></li>
            <li><a href="#">Signup</a></li>
            <!-- <li><b-button class="cart-small-view" v-b-toggle.sidebar-right>11 Items</b-button></li> -->
            <li><b-button class="cart-small-view" v-b-toggle.sidebar-right><b-badge variant="success" class="rounded-circle">9+</b-badge><b-icon-bag-fill></b-icon-bag-fill>$120</b-button></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>