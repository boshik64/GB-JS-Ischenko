<template>
  <div class="home">
    <!-- <PromoComponent></PromoComponent> -->
    <!-- <CategoriesComponent></CategoriesComponent> -->
    <ProductsComponent></ProductsComponent>
    <!-- <FeaturesComponent></FeaturesComponent> -->
  </div>
</template>

<script>
import PromoComponent from "../components/HomeComponents/PromoComponent.vue";
import CategoriesComponent from "../components/HomeComponents/CategoriesComponent.vue";
import ProductsComponent from "../components/HomeComponents/ProductsComponent.vue";
import FeaturesComponent from "../components/HomeComponents/FeaturesComponent.vue";

export default {
  components: {
    PromoComponent,
    CategoriesComponent,
    ProductsComponent,
    FeaturesComponent,
  },

};
</script>

<style lang='less'>
</style>