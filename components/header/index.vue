<template>
  <div>
    <MainNav />
  </div>
</template>
<script>

import MainNav from './MainNav'
export default {

}
</script>
<style>
.dropdown-toggle::after {
	display: none;
}
#mainNav .navbar-toggler {
	color: var(--heading-color);
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
    top: -6px;
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