<template>
  <div>
    <b-sidebar id="categories-sidebar-mobile" title="Categories" bg-variant="white" shadow backdrop class="categories-sidebar-mobile">
      <div class="px-3 py-2">
        <b-nav vertical class="mt-3">
          <b-nav-item to="/categories/" v-for="categoryItem in categoryData.data" :key="categoryItem.id">{{categoryItem.name}}<i class="fas fa-angle-right"></i></b-nav-item>
      </b-nav>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({categoryData : 'category/allCategories'}),
  },
  methods: {
    ...mapActions({
        cat : 'category/getCategories',
      }),
  },
  created(){
      this.cat();
  },
}
</script>