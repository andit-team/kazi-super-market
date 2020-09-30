<template>
  <div>
    <!-- Menu After Login Area Start -->
    <header class="menu-section-area padding-zero">
      <TopBar />
      
      <!-- Navigation -->
      <b-navbar toggleable="lg" type="dark" id="mainNav">
        <b-container>
          <!-- Categories Sidebar Button -->
          <!-- <b-icon icon="list"></b-icon> -->
          <b-button v-b-toggle.sidebar-1 variant="light" @click="clickme()"><b-icon icon="list"></b-icon></b-button>
          <!-- <b-button @click="clickme()">Click Nav</b-button> -->
          <!-- Categories Sidebar Button -->
           
          <b-navbar-brand to="/">
            <b-img :src='"@/assets/images/logo.png"' class="img-fluid" alt="logo" />
          </b-navbar-brand>

          <!-- For Mobile -->
          <b-nav-form inline class="product-search-form">
            <b-form-input size="sm" placeholder="Search product/category"></b-form-input>
            <b-button class="btn-search" size="sm" type="submit"><b-icon-search /></b-button>
          </b-nav-form>
          <!-- For Mobile -->

          <b-navbar-toggle target="nav-collapse">
            <template v-slot:default="{ expanded }">
              <b-icon v-if="expanded" icon="x"></b-icon>
              <b-icon v-else icon="list"></b-icon>
            </template>
          </b-navbar-toggle>

          <!-- Right aligned nav items -->
          <b-collapse id="nav-collapse" is-nav>
          
            <!-- <b-navbar-nav>
              <b-nav-form inline class="product-search-form">
                <b-form-input size="sm" placeholder="Search product/category"></b-form-input>
                <b-button class="btn-search" size="sm" type="submit"><b-icon-search /></b-button>
              </b-nav-form>
            </b-navbar-nav> -->

            <b-navbar-nav class="ml-auto">
              <!-- <b-nav-item to="/account/register" v-if="!isLogin">Signup </b-nav-item>
              <b-nav-item to="/account/login" v-if="!isLogin">Login</b-nav-item> -->

              <b-nav-item-dropdown class="dropdown-box" right v-if="isLogin">
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                  <span class="customer-img"><b-img :src='"@/assets/images/profile-img/owner2.png"' alt="img" /></span>
                  <span>Suraiya Aysha</span>
                  <i class="fas fa-angle-down"></i>
                </template>
                <b-dropdown-item to="/account/profile">Profile</b-dropdown-item>
                <b-dropdown-item to="/">Logout</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item to="/categories" v-if="!isLogin">List</b-nav-item>
              <b-nav-item to="/categories" v-if="!isLogin">Catalogue</b-nav-item>
              <b-nav-item to="#" v-if="!isLogin">Weekly picks</b-nav-item>
              <b-nav-item to="#" v-if="!isLogin">Online only</b-nav-item>
              <b-nav-item to="#" v-if="!isLogin">Half price</b-nav-item>

            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </header>
    <!-- <CategoriesNav /> -->
  </div>
</template>
<script>

import {mapGetters} from 'vuex'
import TopBar from './TopBar'
// import CategoriesNav from './CategoriesNav'
export default {
  components: {
  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters({
    }),
  },
  methods: {
    getImgUrl(path) {
      return require('@/assets/images/' + path)
    },
    clickme() {
      var x = document.querySelector(".b-sidebar-body");
      if (x.style.display === "none") {
        document.querySelector("#body-content").style.marginLeft = "240px";
        x.style.display = "block";
      } else {
        document.querySelector("#body-content").style.marginLeft = "0px";
        x.style.display = "none";
      }
    }
  }
}
</script>