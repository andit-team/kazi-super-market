<template>
  <div class="categories-nav">
  <h5 class="text-uppercase rounded-top">Categories</h5>
    <!-- Navigation -->
    <b-nav vertical>
      <b-nav-item to="/categories/category-list">Ocean Food<i class="fas fa-angle-right"></i></b-nav-item>
      <b-nav-item to="/categories/category-list">Butter & Eggs<i class="fas fa-angle-right"></i></b-nav-item>
      <b-nav-item to="/categories/category-list">Dried Fruits<i class="fas fa-angle-right"></i></b-nav-item>
      <b-nav-item to="/categories/category-list">Fast Food<i class="fas fa-angle-right"></i></b-nav-item>
      <b-nav-item to="/categories/category-list">Fresh Meat<i class="fas fa-angle-right"></i></b-nav-item>
      <b-nav-item to="/categories/category-list">Fruits<i class="fas fa-angle-right"></i></b-nav-item>
      <b-nav-item to="/categories/category-list">Milk & Cream<i class="fas fa-angle-right"></i></b-nav-item>
      <b-nav-item to="/categories/category-list">Vegetables<i class="fas fa-angle-right"></i></b-nav-item>
      <b-nav-item to="/categories/category-list">Prime Video<i class="fas fa-angle-right"></i></b-nav-item>
  </b-nav>
  <h6><nuxt-link to="/categories/"><b-icon-plus></b-icon-plus> More Categories</nuxt-link></h6>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>