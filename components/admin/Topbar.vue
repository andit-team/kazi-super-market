<script>
/**
 * Topbar component
 */
export default {
    data() {
        return {
        };
    },
    mounted() {
    },
    methods: {
        /**
         * Toggle menu
         */
        toggleMenu() {
            this.$parent.toggleMenu();
        },

        /**
         * Horizontal-toggle menu
         */
        horizonalmenu() {
            let element = document.getElementById("topnav-menu-content");
            element.classList.toggle("show");
        },
        /**
         * Logout user
         */
        logoutUser() {
            if (process.env.auth === "firebase") {
                this.$store.dispatch("auth/logOut");
            } else if (process.env.auth === "fakebackend") {
                this.$store.dispatch("authfack/logout");
            }
            this.$router.push({
                path: "/account/login",
            });
        },
    },
};
</script>

<template>
<!-- Topbar Start -->
<div class="navbar-custom">
    <div class="container-fluid">
        <ul class="list-unstyled topnav-menu float-right mb-0">


            <b-nav-item-dropdown right class="notification-list topbar-dropdown" menu-class="profile-dropdown" toggle-class="p-0">
                <template slot="button-content" class="nav-link dropdown-toggle">
                    <div class="nav-user mr-0">
                        <img src="~/assets/admin/images/users/avatar-1.jpg" alt="user-image" class="rounded-circle" />
                        <span class="pro-user-name ml-1">
                            {{ $t('navbar.dropdown.name.text') }}
                            <i class="mdi mdi-chevron-down"></i>
                        </span>
                    </div>
                </template>

                <b-dropdown-header>
                    <h6 class="text-overflow m-0 py-2">{{ $t('navbar.dropdown.name.list.greet') }}</h6>
                </b-dropdown-header>

                <b-dropdown-item href="#">
                    <i class="remixicon-account-circle-line"></i>
                    <span>{{ $t('navbar.dropdown.name.list.account') }}</span>
                </b-dropdown-item>

                <b-dropdown-item href="#">
                    <i class="remixicon-settings-3-line"></i>
                    <span>{{ $t('navbar.dropdown.name.list.settings') }}</span>
                </b-dropdown-item>



                <b-dropdown-divider></b-dropdown-divider>
                <a class="dropdown-item" @click="logoutUser" href="jvascript: void(0);">
                    <i class="fe-log-out mr-1"></i>
                    <span>{{ $t('navbar.dropdown.name.list.logout') }}</span>
                </a>
            </b-nav-item-dropdown>
        </ul>

        <!-- LOGO -->
        <div class="logo-box">
            <nuxt-link to="/" class="logo logo-dark text-center">
                <span class="logo-sm">
                    <img src="~/assets/admin/images/logo-sm-dark.png" alt height="35" />
                    <!-- <span class="logo-lg-text-light">Kazissupermarket</span> -->
                </span>
                <span class="logo-lg">
                    <img src="~/assets/admin/images/logo-dark.png" alt height="35" />
                    <!-- <span class="logo-lg-text-light">M</span> -->
                </span>
            </nuxt-link>

            <nuxt-link to="/" class="logo logo-light text-center">
                <span class="logo-sm">
                    <img src="~/assets/admin/images/logo-sm.png" alt height="35" />
                </span>
                <span class="logo-lg">
                    <img src="~/assets/admin/images/logo-light.png" alt height="35" />
                </span>
            </nuxt-link>
        </div>

        <ul class="list-unstyled topnav-menu topnav-menu-left m-0">
            <li>
                <button class="button-menu-mobile waves-effect waves-light" @click="toggleMenu">
                    <i class="fe-menu"></i>
                </button>
            </li>

            <li>
                <!-- Mobile menu toggle (Horizontal Layout)-->
                <a class="navbar-toggle nav-link" data-toggle="collapse" @click="horizonalmenu()" data-target="#topnav-menu-content">
                    <div class="lines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </a>
                <!-- End mobile menu toggle-->
            </li>
        </ul>
        <div class="clearfix"></div>
    </div>
</div>
<!-- end Topbar -->
</template>
