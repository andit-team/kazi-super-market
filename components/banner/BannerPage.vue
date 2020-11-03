<template>
  <div>
    <!-- Page Banner Area Start -->
    <section class="page-banner-area p-0 pb-4">
        <div class="page-banner-overlay d-flex">
            <div class="container">
                <div class="row page-banner-wrap h-100">
                    <div class="col-12">
                        <div class="page-banner-content text-center mt-8">
                            <img :src="bannerImg" alt="banner" class="w-100">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Page Banner Area End -->
  </div>
</template>

<script>
export default {
    props: {
        bannerImg: String,
    }
}
</script>

<style>

</style>