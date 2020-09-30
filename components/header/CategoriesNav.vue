<template>
  <!-- <div class="categories-sidebar"> -->
    <!-- <b-button v-b-toggle.sidebar-1><i class="fas fa-bars"></i></b-button> -->
    <b-sidebar id="sidebar-1" no-header visible no-close-on-route-change class="categories-sidebar" bg-variant="white" sidebar-class="border-right">
      <template v-slot:default>
        <div class="p-3">
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item-dropdown class="dropdown-box">
                <template v-slot:button-content>
                  <i class="fas fa-tshirt"></i>
                  <span>Ocean Food</span>
                  <i class="fas fa-angle-down"></i>
                </template>
                <b-dropdown-item to="/products">Food Cat 1</b-dropdown-item>
                <b-dropdown-item to="/products">Food Cat 2</b-dropdown-item>
                <b-dropdown-item to="/products">Food Cat 1</b-dropdown-item>
                <b-dropdown-item to="/products">Food Cat 2</b-dropdown-item>
                <b-dropdown-item to="/products">Food Cat 1</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown class="dropdown-box">
                <template v-slot:button-content>
                  <i class="fas fa-birthday-cake"></i>
                  <span>Butter & Eggs</span>
                  <i class="fas fa-angle-down"></i>
                </template>
                <b-dropdown-item to="/products">Food Cat 1</b-dropdown-item>
                <b-dropdown-item to="/products">Food Cat 2</b-dropdown-item>
                <b-dropdown-item to="/products">Food Cat 1</b-dropdown-item>
                <b-dropdown-item to="/products">Food Cat 2</b-dropdown-item>
                <b-dropdown-item to="/products">Food Cat 1</b-dropdown-item>
                <b-dropdown-item to="/products">Food Cat 2</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown class="dropdown-box">
                <template v-slot:button-content>
                  <i class="fas fa-utensils"></i>
                  <span>Dried Fruits</span>
                  <i class="fas fa-angle-down"></i>
                </template>
                <b-dropdown-item to="/products">Food Cat 1</b-dropdown-item>
                <b-dropdown-item to="/products">Food Cat 2</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown class="dropdown-box">
                <template v-slot:button-content>
                  <i class="fas fa-fire"></i>
                  <span>Fast Food</span>
                  <i class="fas fa-angle-down"></i>
                </template>
                <b-dropdown-item to="/products">Food Cat 1</b-dropdown-item>
                <b-dropdown-item to="/products">Food Cat 2</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown class="dropdown-box">
                <template v-slot:button-content>
                  <i class="fas fa-blender"></i>
                  <span>Fresh Meat</span>
                  <i class="fas fa-angle-down"></i>
                </template>
                <b-dropdown-item to="/products">Food Cat 1</b-dropdown-item>
                <b-dropdown-item to="/products">Food Cat 2</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown class="dropdown-box">
                <template v-slot:button-content>
                  <i class="fab fa-apple"></i>
                  <span>Fruits</span>
                  <i class="fas fa-angle-down"></i>
                </template>
                <b-dropdown-item to="/products">Food Cat 1</b-dropdown-item>
                <b-dropdown-item to="/products">Food Cat 2</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown class="dropdown-box">
                <template v-slot:button-content>
                  <i class="fas fa-fish"></i>
                  <span>Milk & Cream</span>
                  <i class="fas fa-angle-down"></i>
                </template>
                <b-dropdown-item to="/products">Food Cat 1</b-dropdown-item>
                <b-dropdown-item to="/products">Food Cat 2</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item href="/products"><i class="fas fa-leaf"></i>Vegetables</b-nav-item>
            </b-nav>
          </nav>
        </div>
      </template>
    </b-sidebar>
  <!-- </div> -->
</template>

<script>
export default {

}
</script>

<style>

</style>