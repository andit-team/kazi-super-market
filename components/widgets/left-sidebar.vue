<template>

  <div id="mySidenav" class="sidenav" :class="{ openSide:leftSidebarVal }">
    <a class="sidebar-overlay" @click="closeLeftBar(leftSidebarVal)"></a>
    <nav>
      <div class="brand-logo layout2-logo">
        <nuxt-link :to="{ path: '/'}">
          <img
            :src='"@/assets/images/logo.png"'
            class="img-fluid"
            alt="logo"
          />
        </nuxt-link>
      </div>
      <a @click="closeLeftBar(leftSidebarVal)">
        <div class="sidebar-back text-left">
          ×
        </div>
      </a>

      <!-- E balance Login -->
      <div class="e-vally-login">
        <div class="inner-wallet d-flex justify-content-between align-items-center">
          <!-- <img :src='"@/assets/images/payment-methods-img/evaly-wallet.png"' alt="img">
          <h4>0 t</h4>
        </div>
        <div class="evaly-login-btn">
          <nuxt-link :to="{ path: '/page/account/login-firebase' }" class="btn btn-solid">Login</nuxt-link>
        </div> -->
          <div class="d-flex justify-content-center align-items-center">0 <img :src='"@/assets/images/icon/taka-icon.svg"' alt="img"></div>
          <div class="evaly-login-btn">
            <nuxt-link :to="{ path: '/page/account/login-firebase' }" class="btn btn-solid">Add to wallet</nuxt-link>
          </div>
        </div>
      </div>
      <!-- E balance Login -->

      <!-- Sample menu definition -->
      <ul id="sub-menu" class="sidebar-menu">

        <li v-for="cat in parentCategories" :key="cat.id">
          <a href="javascript:void(0)" @click="setActive('clothing')">{{cat.name}}
            <span class="sub-arrow"></span>
          </a>
          <ul class="mega-menu clothing-menu" :class="{ opensidesubmenu: isActive('clothing') }">
            <li>
              <div class="row m-0">
                <div class="col-xl-4">
                  <div class="link-section">
                    <h5>women's fashion</h5>
                    <ul>
                      <li>
                        <a href="#">dresses</a>
                      </li>
                      <li>
                        <a href="#">skirts</a>
                      </li>
                      <li>
                        <a href="#">westarn wear</a>
                      </li>
                      <li>
                        <a href="#">ethic wear</a>
                      </li>
                      <li>
                        <a href="#">sport wear</a>
                      </li>
                    </ul>
                    <h5>men's fashion</h5>
                    <ul>
                      <li>
                        <a href="#">sports wear</a>
                      </li>
                      <li>
                        <a href="#">western wear</a>
                      </li>
                      <li>
                        <a href="#">ethic wear</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-4">
                  <div class="link-section">
                    <h5>accessories</h5>
                    <ul>
                      <li>
                        <a href="#">fashion jewellery</a>
                      </li>
                      <li>
                        <a href="#">caps and hats</a>
                      </li>
                      <li>
                        <a href="#">precious jewellery</a>
                      </li>
                      <li>
                        <a href="#">necklaces</a>
                      </li>
                      <li>
                        <a href="#">earrings</a>
                      </li>
                      <li>
                        <a href="#">wrist wear</a>
                      </li>
                      <li>
                        <a href="#">ties</a>
                      </li>
                      <li>
                        <a href="#">cufflinks</a>
                      </li>
                      <li>
                        <a href="#">pockets squares</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-4">
                  <a href="#" class="mega-menu-banner">
                    <img :src='"../../assets/images/mega-menu/fashion.jpg"' alt class="img-fluid">
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </li>

        <!-- <li>
          <a href="javascript:void(0)" @click="setActive('clothing')">clothing
            <span class="sub-arrow"></span>
          </a>
          <ul class="mega-menu clothing-menu" :class="{ opensidesubmenu: isActive('clothing') }">
            <li>
              <div class="row m-0">
                <div class="col-xl-4">
                  <div class="link-section">
                    <h5>women's fashion</h5>
                    <ul>
                      <li>
                        <a href="#">dresses</a>
                      </li>
                      <li>
                        <a href="#">skirts</a>
                      </li>
                      <li>
                        <a href="#">westarn wear</a>
                      </li>
                      <li>
                        <a href="#">ethic wear</a>
                      </li>
                      <li>
                        <a href="#">sport wear</a>
                      </li>
                    </ul>
                    <h5>men's fashion</h5>
                    <ul>
                      <li>
                        <a href="#">sports wear</a>
                      </li>
                      <li>
                        <a href="#">western wear</a>
                      </li>
                      <li>
                        <a href="#">ethic wear</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-4">
                  <div class="link-section">
                    <h5>accessories</h5>
                    <ul>
                      <li>
                        <a href="#">fashion jewellery</a>
                      </li>
                      <li>
                        <a href="#">caps and hats</a>
                      </li>
                      <li>
                        <a href="#">precious jewellery</a>
                      </li>
                      <li>
                        <a href="#">necklaces</a>
                      </li>
                      <li>
                        <a href="#">earrings</a>
                      </li>
                      <li>
                        <a href="#">wrist wear</a>
                      </li>
                      <li>
                        <a href="#">ties</a>
                      </li>
                      <li>
                        <a href="#">cufflinks</a>
                      </li>
                      <li>
                        <a href="#">pockets squares</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-4">
                  <a href="#" class="mega-menu-banner">
                    <img :src='"../../assets/images/mega-menu/fashion.jpg"' alt class="img-fluid">
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:void(0)" @click="setActive('bags')">bags
            <span class="sub-arrow"></span>
          </a>
          <ul :class="{ opensub1: isActive('bags') }">
            <li>
              <a href="#">shopper bags</a>
            </li>
            <li>
              <a href="#">laptop bags</a>
            </li>
            <li>
              <a href="#">clutches</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:void(0)" @click="setActive('footwear')">footwear
            <span class="sub-arrow"></span>
          </a>
          <ul :class="{ opensub1: isActive('footwear') }">
            <li>
              <a href="#">sport shoes</a>
            </li>
            <li>
              <a href="#">formal shoes</a>
            </li>
            <li>
              <a href="#">casual shoes</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">watches</a>
        </li>
        <li>
          <a href="javascript:void(0)" @click="setActive('accessories')">Accessories
            <span class="sub-arrow"></span>
          </a>
          <ul :class="{ opensub1: isActive('accessories') }">
            <li>
              <a href="#">fashion jewellery</a>
            </li>
            <li>
              <a href="#">caps and hats</a>
            </li>
            <li>
              <a href="#">precious jewellery</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:void(0)">house of design</a>
        </li>
        <li>
          <a href="javascript:void(0)" @click="setActive('beauty')">beauty & personal care
            <span class="sub-arrow"></span>
          </a>
          <ul :class="{ opensub1: isActive('beauty') }">
            <li>
              <a href="#">makeup</a>
            </li>
            <li>
              <a href="#">skincare</a>
            </li>
            <li>
              <a href="#">premium beaty</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">home & decor</a>
        </li>
        <li>
          <a href="#">kitchen</a>
        </li> -->
      </ul>

      <!-- Hotline and Bkash -->
      <div class="hotline-bkash">
        <div class="d-flex align-items-center">
          <img :src='"@/assets/images/icon/hotline.png"' alt="img">
          <div>
            <h6>Hotline</h6>
            <p>096455116456</p>
          </div>
        </div>
      </div>
      <div class="hotline-bkash">
        <div class="d-flex align-items-center">
          <img :src='"@/assets/images/icon/bkash.png"' alt="img">
          <div>
            <h6>bKash</h6>
            <p>01745860542</p>
          </div>
        </div>
      </div>
      <!-- Hotline and Bkash -->

    </nav>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  props: ['leftSidebarVal'],
  data() {
    return {
      activeItem: 'clothing'
    }
  },
  computed: mapGetters(['parentCategories']),
  methods: {
    ...mapActions(['getParentCategory']),
    closeLeftBar(val) {
      val = false
      this.$emit('closeVal', val)
    },
    isActive: function (menuItem) {
      return this.activeItem === menuItem
    },
    setActive: function (menuItem) {
      if (this.activeItem === menuItem) {
        this.activeItem = ''
      } else {
        this.activeItem = menuItem
      }
    }
  },
  created (){
    this.getParentCategory()
  }
}
</script>
<style>
  #mySidenav .brand-logo.layout2-logo {
    border-bottom: 1px solid #ddd;
    padding: 20px 0;
  }
  #mySidenav .brand-logo.layout2-logo img {
	  margin-left: 26px;
  }
  .e-vally-login {
    padding: 30px 30px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    margin-bottom: 30px;
  }
  .e-vally-login .inner-wallet p {
    margin: 0 0 0 10px;
  }
  .e-vally-login .inner-wallet div{
    font-size: 20px;
    font-weight: 900;
  }
  .e-vally-login .inner-wallet div img{
    margin-left: 4px;
    height: 17px;
  }
  .evaly-login-btn {
    margin-left: 5px;
  }
  .evaly-login-btn a {
    padding: 5px 8px;
    margin: 0 auto;
    background-image: linear-gradient(30deg, #b2040d 50%, transparent 50%);
    border: 2px solid #b2040d;
  }
  .hotline-bkash {
  	padding: 15px 0 0 41px;
  }
  .hotline-bkash div img {
	  margin-right: 10px;
  }
</style>