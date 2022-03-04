<template>
  <div class="products">
    <div class="container">
      <div class="products__inner">
        <ProductItemComponent
          v-for="item of catalog"
          :if="item.id = 4"
          v-bind:key="item.id"
          v-bind:data="item"
         
        ></ProductItemComponent>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItemComponent from "../HomeComponents/ProductItemComponent.vue";

export default {
  name: "CardProductsComponent",
  components: {
    ProductItemComponent,
  },
  computed: {
    catalog() {
      return this.$store.getters.getCatalog;
    },
  },
};
</script>
