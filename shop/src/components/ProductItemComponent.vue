<template>
  <div class="products__item">
    <img v-bind:src="data.image" alt="" />

    <!-- <router-link to="card.html" class="products__content"> -->
    <h2 class="item__title">{{ data.title }}</h2>
    <h3 class="item__subtitle">{{ data.subtitle }}</h3>
    <p class="item__text">{{ data.price }}</p>
    <!-- </router-link> -->

    <div class="products__mask">
      <button class="mask__link" v-on:click="onBuyBtnClk(item)">
        <img
          class="mask__img"
          src="img/products/products__button--mask.svg"
          alt=""
        />
        <div class="mask__text">Add to Cart</div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItemComponent",
  props: ["data"],
  computed: {
    catalog() {
      return this.$store.getters.getCatalog;
    },
  },
  methods: {
    onBuyBtnClk(product) {
      this.$store.dispatch("addToCart", product);
    },
  },
};
</script>

<style lang='less'>
.products__item {
  display: flex;
  flex-direction: column;
  justify-content: end;

  cursor: pointer;

  width: 360px;
  height: 581px;

  margin-bottom: 30px;
  background: #f8f8f8;

  text-align: left;

  transition: box-shadow 0.3s linear;
}

.products__item:hover {
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.295);
}

.products__content {
  text-decoration: none;
}

.item__title {
  padding: 25px 28px 13px 16px;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #000000;
}

.item__subtitle {
  padding-bottom: 18px;
  padding-left: 16px;
  padding-right: 28px;

  font-weight: 300;
  font-size: 14px;
  line-height: 17px;

  color: #5d5d5d;
}

.item__text {
  padding-bottom: 20px;
  padding-left: 16px;
  padding-right: 28px;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #f16d7f;
}

.products__mask {
  opacity: 0;

  margin-bottom: 161px;

  width: 360px;
  height: 420px;

  text-align: center;

  position: absolute;
  background: rgba(58, 56, 56, 0.76);

  transition: opacity 0.3s linear;
}

.products__mask:hover {
  opacity: 1;
}

.mask__link {
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;

  margin-top: 188.5px;
  margin-left: 111.5px;

  padding: 11px 16px 8px 13px;

  text-decoration: none;

  cursor: pointer;

  width: 138px;
  height: 43px;
  border: 1px solid #f8f8f8;

  transition: background 0.2s linear;
}

.mask__link:hover {
  background: rgba(58, 56, 56, 0.76);

  .mask__img {
    transform: rotate(28800deg);
    transition: transform 80s linear;
  }
}

.mask__img {
  width: 26px;
  height: 24px;
}

.mask__text {
  margin-left: 9px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #ffffff;
}

.products__link {
  display: inline-block;
  vertical-align: top;
  cursor: pointer;

  padding: 14px 38px;
  border: 1px solid #f16d7f;

  text-align: center;
  background-color: #f8f8f8;

  text-decoration: none;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #f26376;

  transition: background 0.3s linear;
  transition: transform 0.3s linear;
}

.products__link:hover {
  background: #f16d7f;
  color: #ffffff;
  transform: scale(1.5);
}

/* tablet */
@media (max-width: 1200px) {
  .products__item:nth-of-type(3) {
    display: none;
  }
}
</style>