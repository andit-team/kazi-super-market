<template>
  <div>
    <!-- Top List Box -->
    <ul class="list-unstyled top-list d-flex justify-content-start">
      <li class="media bg-darker rounded border-left border-left-5 border-danger p-3 mr-3 w-100" style="border-width: 3px !important">
        <img :src='"@/assets/images/all-icon/dashboard-list-1.svg"' class="mr-3" alt="andgarivara" style="height: 50px">
        <div class="media-body">
          <h5 class="mt-0 mb-1">25</h5>
          <p class="text-black-color">Total order</p>
          </div>
      </li>
      <li class="media bg-darker rounded border-left border-left-5 border-danger p-3 mr-3 w-100" style="border-width: 3px !important">
        <img :src='"@/assets/images/all-icon/dashboard-list-2.svg"' class="mr-3" alt="andgarivara" style="height: 50px">
        <div class="media-body">
          <h5 class="mt-0 mb-1">1225</h5>
          <p class="text-black-color">Total Sale</p>
          </div>
      </li>
      <li class="media bg-darker rounded border-left border-left-5 border-danger p-3 mr-3 w-100" style="border-width: 3px !important">
        <img :src='"@/assets/images/all-icon/dashboard-list-3.svg"' class="mr-3" alt="andgarivara" style="height: 50px">
        <div class="media-body">
          <h5 class="mt-0 mb-1">285</h5>
          <p class="text-black-color">Order Pending</p>
          </div>
      </li>
    </ul>
    <!-- Top List Box -->

    <!-- Graphical stasticks -->
    <div class="row">
      <div class="col-12 col-md-12 col-lg-12">
        <TotalRevenue class="mt-4" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'customer-dashboard',
  data() {
    return {
    }
  }

}
</script>

<style>

</style>