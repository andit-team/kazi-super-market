<template>
  <div>
    <!-- Top List Box -->
    <ul class="list-unstyled top-list d-flex justify-content-start">
      <li class="media different-bg rounded border-left border-left-5 border-danger p-3 mr-3 w-100" style="border-width: 3px !important">
        <img :src='"@/assets/images/all-icon/dashboard-list-1.svg"' class="mr-3" alt="andgarivara" style="height: 50px">
        <div class="media-body">
          <h5 class="mt-0 mb-1">25</h5>
          <p class="text-black-color">Total order</p>
          </div>
      </li>
      <li class="media different-bg rounded border-left border-left-5 border-danger p-3 mr-3 w-100" style="border-width: 3px !important">
        <img :src='"@/assets/images/all-icon/dashboard-list-2.svg"' class="mr-3" alt="andgarivara" style="height: 50px">
        <div class="media-body">
          <h5 class="mt-0 mb-1">1225</h5>
          <p class="text-black-color">Total Sale</p>
          </div>
      </li>
      <li class="media different-bg rounded border-left border-left-5 border-danger p-3 mr-3 w-100" style="border-width: 3px !important">
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
      <div class="col-12 col-md-12 col-lg-6">
        <TotalRevenue class="mt-4" />
      </div>
      <div class="col-12 col-md-12 col-lg-6">
        <OverallOrder class="mt-4" />
      </div>
    </div>

    <div class="row">
      <!-- product List Data Table -->
      <div class="col-12 col-md-12 col-lg-6">
        <div class="trending-products rounded different-bg mt-4 p-3">
          <h5 class="table-title mb-4">Trending products</h5>
          <b-table
            :items="items"
            :fields="fields"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            responsive="sm"
          >
            <template #cell(product_img)>
              <!-- {{ row.product_img }} -->
              <img :src="require('@/assets/images/product-img/product-1.png')" alt="product" style="height: 50px">
            </template>
          </b-table>
        </div>
      </div>
      <!-- product List Data Table -->

      <!-- product List Data Table -->
      <div class="col-12 col-md-12 col-lg-6">
        <div class="trending-products rounded different-bg mt-4 p-3">
          <h5 class="table-title mb-4">Trending products</h5>
          <b-table
            :items="items"
            :fields="fields"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            responsive="sm"
          >
            <template #cell(product_img)>
              <!-- {{ row.product_img }} -->
              <img :src="require('@/assets/images/product-img/product-2.png')" alt="product" style="height: 50px">
            </template>
          </b-table>
        </div>
      </div>
      <!-- product List Data Table -->
    </div>
  </div>
</template>

<script>
export default {
  layout: 'customer-dashboard',
  data() {
    return {
      sortBy: 'product_name',
      sortDesc: false,
      fields: [
        { key: 'product_img', sortable: false },
        { key: 'product_name', sortable: true },
        { key: 'product_price', sortable: true },
        { key: 'total_rent', sortable: false }
      ],
      items: [
        { product_img: 'Image here', product_name: 'Audi', product_price: '450', total_rent: '20' },
        { product_img: 'Image here', product_name: 'Toyota', product_price: '5550', total_rent: '10' },
        { product_img: 'Image here', product_name: 'Audi', product_price: '450', total_rent: '50' },
        { product_img: 'Image here', product_name: 'Toyota', product_price: '350', total_rent: '20' },
        { product_img: 'Image here', product_name: 'Audi', product_price: '4501', total_rent: '8' },
      ]
    }
  }

}
</script>

<style>

</style>