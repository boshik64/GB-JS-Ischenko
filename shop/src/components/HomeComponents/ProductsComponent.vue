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
import ProductItemComponent from ".././ProductItemComponent.vue";

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
  
};
</script>

<style lang='less'>
.products {
  padding-top: 31px;
  padding-bottom: 96px;

  text-align: center;
}

.poducts__text {
  padding-bottom: 48px;
  text-align: center;
}

.products__title {
  padding-bottom: 6px;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  color: #222222;
}

.products__subtitle {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #9f9f9f;
}

.products__inner {
  margin-top: 19px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 19px;
}

/* tablet */
@media (max-width: 1200px) {
  .products {
    padding-top: 101px;
    padding-bottom: 64px;
  }

  .products__item:nth-of-type(3) {
    display: none;
  }
}

/*mobile*/
@media (max-width: 766px) {
  .products {
    padding-top: 0;
  }
}
</style>