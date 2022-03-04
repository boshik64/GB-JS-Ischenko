<template>
  <div class="products__item">
    <img v-bind:src="data.image" alt="" />

    <!-- <router-link to="card.html" class="products__content"> -->
    <h2 class="item__title">{{ data.title }}</h2>
    <h3 class="item__subtitle">{{ data.subtitle }}</h3>
    <p class="item__text">$ {{ data.price }}</p>
    <!-- </router-link> -->
    <router-link to="/card" class="products__mask">
      <button class="mask__link" v-on:click="onBuyBtnClk()">
        <img
          class="mask__img"
          src="img/products/products__button--mask.svg"
          alt=""
        />
        <div class="mask__text">Add to Cart</div>
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ProductItemComponent",
  props: ["data"],
  methods: {
    onBuyBtnClk() {
      this.$store.dispatch("addToCart", this.data);
    },
  },
};
</script>

<style lang="less">
</style>
