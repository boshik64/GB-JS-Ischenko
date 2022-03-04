<template>
  <div>
      <CardMenuComponent></CardMenuComponent>
      <CardIllustrationComponent></CardIllustrationComponent>
      <CardCardComponent></CardCardComponent>
      <CardProductsComponent></CardProductsComponent>
  </div>
</template>

<script>
import CardMenuComponent from "../components/CardComponents/CardMenuComponent.vue";
import CardIllustrationComponent from "../components/CardComponents/CardIllustrationComponent.vue";
import CardCardComponent from "../components/CardComponents/CardCardComponent.vue";
import CardProductsComponent from "../components/CardComponents/CardProductsComponent.vue";
export default {
  components: {CardMenuComponent,CardIllustrationComponent,CardCardComponent,CardProductsComponent},
};
</script>

