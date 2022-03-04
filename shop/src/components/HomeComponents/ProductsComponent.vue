<template>
  <div class="products">
    <div class="container">
      <div class="poducts__text">
        <h4 class="products__title">Fetured Items</h4>
        <h5 class="products__subtitle">
          Shop for items based on what we featured in this week
        </h5>
      </div>

      <div class="products__inner">
        <ProductItemComponent
          v-for="item of catalog"
          v-bind:key="item.id"
          v-bind:data="item"
           
        ></ProductItemComponent>
      </div>

      <a class="products__link" href="catalog.html">Browse All Product</a>
    </div>
  </div>
</template>

<script>
import ProductItemComponent from "./ProductItemComponent.vue";

export default {
  components: {
    ProductItemComponent,
  },
  name: "ProductsComponent",
  computed: {
    catalog() {
      return this.$store.getters.getCatalog;
    },
  },
  // methods: {
  //   onBuyBtnClk(product) {
  //     this.$store.dispatch("addToCart", product);
  //   },
  // },
};
</script>
