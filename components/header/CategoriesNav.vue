<template>
  <!-- <div class="categories-sidebar"> -->
    <!-- <b-button v-b-toggle.sidebar-1><i class="fas fa-bars"></i></b-button> -->
    <b-sidebar id="sidebar-1" no-header shadow visible no-close-on-route-change class="categories-sidebar">
      <template v-slot:default>
        <div class="p-3">
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item-dropdown class="dropdown-box">
                <template v-slot:button-content>
                  <span>Ocean Food</span>
                  <i class="fas fa-angle-down"></i>
                </template>
                <b-dropdown-item to="#">Food Cat 1</b-dropdown-item>
                <b-dropdown-item to="#">Food Cat 2</b-dropdown-item>
                <b-dropdown-item to="#">Food Cat 1</b-dropdown-item>
                <b-dropdown-item to="#">Food Cat 2</b-dropdown-item>
                <b-dropdown-item to="#">Food Cat 1</b-dropdown-item>
                <b-dropdown-item to="#">Food Cat 2</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown class="dropdown-box">
                <template v-slot:button-content>
                  <span>Butter & Eggs</span>
                  <i class="fas fa-angle-down"></i>
                </template>
                <b-dropdown-item to="#">Food Cat 1</b-dropdown-item>
                <b-dropdown-item to="#">Food Cat 2</b-dropdown-item>
                <b-dropdown-item to="#">Food Cat 1</b-dropdown-item>
                <b-dropdown-item to="#">Food Cat 2</b-dropdown-item>
                <b-dropdown-item to="#">Food Cat 1</b-dropdown-item>
                <b-dropdown-item to="#">Food Cat 2</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown class="dropdown-box">
                <template v-slot:button-content>
                  <span>Dried Fruits</span>
                  <i class="fas fa-angle-down"></i>
                </template>
                <b-dropdown-item to="#">Food Cat 1</b-dropdown-item>
                <b-dropdown-item to="#">Food Cat 2</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown class="dropdown-box">
                <template v-slot:button-content>
                  <span>Fast Food</span>
                  <i class="fas fa-angle-down"></i>
                </template>
                <b-dropdown-item to="#">Food Cat 1</b-dropdown-item>
                <b-dropdown-item to="#">Food Cat 2</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown class="dropdown-box">
                <template v-slot:button-content>
                  <span>Fresh Meat</span>
                  <i class="fas fa-angle-down"></i>
                </template>
                <b-dropdown-item to="#">Food Cat 1</b-dropdown-item>
                <b-dropdown-item to="#">Food Cat 2</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown class="dropdown-box">
                <template v-slot:button-content>
                  <span>Fruits</span>
                  <i class="fas fa-angle-down"></i>
                </template>
                <b-dropdown-item to="#">Food Cat 1</b-dropdown-item>
                <b-dropdown-item to="#">Food Cat 2</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown class="dropdown-box">
                <template v-slot:button-content>
                  <span>Milk & Cream</span>
                  <i class="fas fa-angle-down"></i>
                </template>
                <b-dropdown-item to="#">Food Cat 1</b-dropdown-item>
                <b-dropdown-item to="#">Food Cat 2</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item href="#">Vegetables</b-nav-item>
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