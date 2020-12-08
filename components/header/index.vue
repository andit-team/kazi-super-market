<template>
  <div>
    <!-- Menu After Login Area Start -->
    <header class="menu-section-area padding-zero" >
      <TopBar />
      
      <!-- Navigation -->
      <b-navbar toggleable="lg" type="dark" id="mainNav" :class="{classNotSticky: scrollPosition < 100, classSticky: scrollPosition > 100}">
        <b-container>
            
          <b-navbar-brand to="/">
            <b-img :src='"@/assets/images/logo.png"' class="img-fluid desktop-logo" alt="logo" />
            <b-img :src='"@/assets/images/logo-mobile.png"' class="img-fluid mobile-logo" alt="logo" />
          </b-navbar-brand>

          <!-- For Mobile Search -->
          <b-navbar-nav class="d-xs-block d-sm-block d-md-block d-lg-none d-xl-none">
            <b-nav-form inline class="product-search-form">
              <b-form-input size="sm" placeholder="Search product/category"></b-form-input>
              <b-button class="btn-search" size="sm" type="submit"><b-icon-search /></b-button>
            </b-nav-form>
          </b-navbar-nav>
          <!-- For Mobile Search -->

          <!-- For Desktop Device Only -->
          <div class="middle-nav-wrap align-items-center w-100 d-xs-none d-sm-none d-md-none d-lg-flex d-xl-flex">
            <b-navbar-nav class="middle-nav-desktop middle-nav-left-list">
              <b-nav-item to="/categories/category-list">List</b-nav-item>
              <b-nav-item to="/categories/category-list">Catalogue</b-nav-item>
            </b-navbar-nav>

            <b-nav-form inline class="product-search-form ml-auto">
              <div class="input-group">
                <input type="text" class="form-control" v-model="searchKeyWord" placeholder="Search product/category">
                <div class="input-group-append">
                  <button type="submit" class="btn btn-search theme-button"><b-icon-search /></button>
                </div>
              </div>
              <!-- </form> -->
            </b-nav-form>

            <b-navbar-nav class="ml-auto middle-nav-desktop middle-nav-right-list">
              <li class="rounded-circle"><b-icon-check-circle-fill></b-icon-check-circle-fill>Free delivery</li>
              <li class="rounded-circle"><b-icon-lock-fill></b-icon-lock-fill>Safe payment</li>
              <li class="rounded-circle"><b-icon-bell-fill></b-icon-bell-fill>24/7 Support</li>
            </b-navbar-nav>

          </div>
          <!-- For Desktop Device Only -->

          <!-- For Mobile/Small Device Only -->
          <b-navbar-toggle target="nav-collapse">
            <template v-slot:default="{ expanded }">
              <b-icon v-if="expanded" icon="x"></b-icon>
              <b-icon v-else icon="list"></b-icon>
            </template>
          </b-navbar-toggle>

          <!-- Right aligned nav items -->
          <b-collapse id="nav-collapse" is-nav>

            <b-navbar-nav class="ml-auto d-xs-block d-sm-block d-md-block d-lg-none d-xl-none">

              <b-nav-item to="#">Shopping</b-nav-item>
              <b-nav-item to="#">Stores</b-nav-item>
              <b-nav-item to="#">Everyday rewards</b-nav-item>
              <b-nav-item to="/categories">List</b-nav-item>
              <b-nav-item to="/categories">Catalogue</b-nav-item>
              <b-nav-item to="#">My Weekly picks</b-nav-item>
              <b-nav-item to="#">Online only</b-nav-item>
              <b-nav-item to="#">Half price</b-nav-item>

            </b-navbar-nav>

          </b-collapse>
        </b-container>
      </b-navbar>
      <BottomNav />
    </header>
  </div>
</template>
<script>

import {mapGetters} from 'vuex'
import TopBar from './TopBar'
import BottomNav from './BottomNav'
export default {
  components: {
  },
  data() {
    return {
      scrollPosition: null,
      searchKeyWord : null
    }
  },
  computed: {
    ...mapGetters({}),

  },
  methods: {
    // getImgUrl(path) {
    //   return require('@/assets/images/' + path)
    // },

    updateScroll() {
      this.scrollPosition = window.scrollY
    },

  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  destroy() {
    window.removeEventListener('scroll', this.updateScroll)
  }

}
</script>
<style>
.dropdown-toggle::after {
	display: none;
}
#mainNav .navbar-toggler {
	color: var(--black-color);
	font-size: 30px;
	padding: 0.15rem 2px;
	margin: 0 30px 0 0;
}
.dropdown-item.active, .dropdown-item:active {
	color: var(--color-blue);
	background-color: transparent;
}
/* Search Box CSS only for Header Section */
header #mainNav .search-box h1 {
	display: none;
}
header #mainNav .search-box .vs__selected {
	/* margin: 0; */
	padding: 0 0 0 5px;
	/* width: 100%; */
	height: 43px;
	/* font-size: 14px; */
}

/* Mobile Menu CSS */
@media only screen and (max-width: 991px) {
  #nav-collapse ul.navbar-nav .search-box {
	padding: 15px 0 0 15px;
}
  #nav-collapse.navbar-collapse {
    /* height: 100vh;
    min-height: 100%;
    max-height: 100%; */
    background-color: #fff;
  }
  #nav-collapse ul.navbar-nav {
    background-color: #fff;
    /* max-height: 100%; */
    top: 0;
    position: relative;
    align-items: flex-start;
    /* height: 100vh; */
    /* min-height: 100%; */
    box-shadow: 0 7px 14px 2px rgba(0,0,0,.05);
    border-top: 1px solid var(--border-color);
    padding: 0 15px 15px;
  }
  #nav-collapse ul li {
    width: 100%;
  }
  #mainNav .navbar-nav .nav-item .nav-link {
	padding: 1em 22px;
	border-bottom: 1px solid var(--border-color);
}
}

</style>