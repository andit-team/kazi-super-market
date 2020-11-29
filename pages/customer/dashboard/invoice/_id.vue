<template>
<div>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <!-- Logo & title -->
                    <div class="clearfix">
                        <div class="float-left">
                            <img src="~/assets/admin/images/logo-dark.png" alt height="35" />
                        </div>
                        <!-- <div class="float-right">
                            <h4 class="m-0 d-print-none">Invoice</h4>
                        </div> -->
                    </div>

                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-8">
                        
                          <div class="col-sm-6 mt-3 p-0">
                              <h5 class="mb-1">Billing Address</h5>
                              <address>
                                  Stanley Jones
                                  <br />795 Folsom Ave, Suite 600
                                  <br />San Francisco, CA 94107
                                  <br />
                                  <abbr title="Phone">P:</abbr> (123) 456-7890
                              </address>
                          </div>
                          <!-- end col -->

                          <div class="col-sm-6 p-0">
                              <h5 class="mb-1">Shipping Address</h5>
                              <address>
                                  Stanley Jones
                                  <br />795 Folsom Ave, Suite 600
                                  <br />San Francisco, CA 94107
                                  <br />
                                  <abbr title="Phone">P:</abbr> (123) 456-7890
                              </address>
                          </div>
                          <!-- end col -->
                        </div>
                        <div class="col-12 col-sm-12 col-md-4">
                            <div class="mt-3 invoice-info-box float-left float-sm-left float-md-none float-lg-none">
                                <h5 class="mb-1 d-print-none">Invoice</h5>
                                <p class="m-b-10">
                                    <strong>Order Date :</strong>
                                    <span class="float-right">&nbsp;&nbsp;&nbsp;&nbsp; Jan 17, 2019</span>
                                </p>
                                <p class="m-b-10">
                                    <strong>Order Status :</strong>
                                    <span class="float-right">
                                        <span class="badge badge-danger">Unpaid</span>
                                    </span>
                                </p>
                                <p class="m-b-10">
                                    <strong>Order No. :</strong>
                                    <span class="float-right">000013</span>
                                </p>
                            </div>
                        </div>
                        <!-- end col -->
                    </div>
                    <!-- end row -->

                    <div class="row">
                        <div class="col-12">
                            <div class="table-responsive">
                                <table class="table mt-4 table-centered">
                                    <thead>
                                        <tr>
                                            <th>#SI</th>
                                            <th>Product</th>
                                            <th style="width: 10%">Qty</th>
                                            <th style="width: 10%">Unit</th>
                                            <th style="width: 10%" class="text-right">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Product-1</td>
                                        <td>2</td>
                                        <td>20</td>
                                        <td class="text-right">$660.00</td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>Product-2</td>
                                        <td>112.5</td>
                                        <td>$35</td>
                                        <td class="text-right">$3937.50</td>
                                      </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- end table-responsive -->
                        </div>
                        <!-- end col -->
                    </div>
                    <!-- end row -->

                    <div class="row">
                        <div class="col-sm-6 offset-sm-6">
                            <div class="float-right">
                                <p>
                                    <b>Sub-total:</b>
                                    <span class="float-right">$4597.50</span>
                                </p>
                                <p>
                                    <b>Discount (10%):</b>
                                    <span class="float-right">&nbsp;&nbsp;&nbsp; $459.75</span>
                                </p>
                                <h3>$4137.75 USD</h3>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <!-- end col -->
                    </div>
                    <!-- end row -->

                    <div class="mt-4 mb-1">
                        <div class="text-right d-print-none">
                            <a href="javascript:window.print()" class="btn btn-primary d-inline-flex">
                                <i class="mdi mdi-printer mr-1"></i> Print
                            </a>
                            <a href="javascript: void(0);" class="btn btn-success ml-1">Submit</a>
                        </div>
                    </div>
                </div>
                <!-- end card-box -->
            </div>
        </div>
        <!-- end col -->
    </div>
    <!-- end row -->
</div>
</template>

<script>
/**
 * Invoice component
 */
export default {
  layout: 'customer-dashboard',
  data() {
      return {
          items: [],
      }
  },
  head() {
    return {
      title:'Invoice - Kazissupermarket'
      }
    },
}
</script>
