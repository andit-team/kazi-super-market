<template>
  <div>
    <div class="breadcrumb-section">
      <div class="container">
        <div class="row">         
          <div class="col-12">
            <nav aria-label="breadcrumb" class="theme-breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <nuxt-link :to="{ path: '/' }">Home</nuxt-link>
                </li>
                <li class="breadcrumb-item active" v-if="title">{{ title }}</li>
              </ol>
            </nav>
          </div>
          <div class="col-12 breadcrumb-title">
            <hr>
            <h4>{{ title }}</h4>
            <hr>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // props: ['title']
  props: {
    title: String,
  }
}
</script>