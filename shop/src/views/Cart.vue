<template>
  <div class="cart">
    <CartMenuComponent></CartMenuComponent>
    <BasketComponent></BasketComponent>
  </div>
</template>

<script>
import CartMenuComponent from ".././components/CartComponents/CartMenuComponent.vue";
import BasketComponent from ".././components/CartComponents/BasketComponent.vue";

export default {
  components: {
    CartMenuComponent,
    BasketComponent,
  },
};
</script>

<style lang="less">
</style>