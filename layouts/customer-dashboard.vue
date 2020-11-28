<template>
  <div>
    <Header />
    <CategoriesNavMobile />

    <section class="dashboard-home-page section-b-space">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-4 col-lg-3">
            <CustomerDashboardLeftSide />
          </div>
          <div class="col-12 col-sm-12 col-md-8 col-lg-9">
            <!-- Put all content below whice placed in Right side of Dashboard -->
            <nuxt id="body-content" class="customer-dashboard-right-content" />
            <!-- Put all content below whice placed in Right side of Dashboard -->
        </div>
        </div>
      </div>
    </section>

    <div class="tap-top top-cls" v-scroll-to="'#body-content'">
      <div>
        <i class="fa fa-angle-up"></i>
      </div>
    </div>

    <CartSidebar />
    
    <Footer1 />

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Customer Dashboard - Kazissupermarket'
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 3000)
    })
  }
}
</script>