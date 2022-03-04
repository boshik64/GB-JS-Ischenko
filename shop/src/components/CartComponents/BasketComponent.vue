<template>
  <div class="basket">
    <div class="container">
      <div class="basket__content">
        <div class="basket__items">
          <BasketItemComponent
            class="basket__item"
            v-for="item of cart"
            v-bind:key="item.id"
            v-bind:data="item"
          ></BasketItemComponent>

          <div class="items__buttons">
            <a href="#" class="item__btn">CLEAR SHOPPING CART</a>
            <a href="#" class="item__btn">CONTINUE SHOPPING</a>
          </div>
        </div>

        <div class="basket__form">
          <div class="basket__inputs">
            <h2>SHIPPING ADRESS</h2>
            <input type="text" name="country" placeholder="Bangladesh" />
            <br />
            <input type="text" name="state" placeholder="State" />
            <br />
            <input type="number" name="postcode" placeholder="Postcode/Zip" />
            <br />
            <input type="button" value="GET A QUOTE" />
          </div>

          <div class="backet__coast">
            <div class="backet__container">
              <p v-for="item of cart" v-bind:key="item.id" v-bind:data="item">
                {{item.title}} <span>({{ item.quantity }})</span><span>${{ item.price }}</span>
              </p>

              <p>
                GRAND TOTAL <span>${{ totalPrice }}</span>
              </p>
              <hr />
              <a href="#"> PROCEED TO CHECKOUT </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BasketItemComponent from "./BasketItemComponent.vue";

export default {
  components: {
    BasketItemComponent,
  },
  props: ["data"],
  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
    totalPrice() {
      return this.$store.getters.getTotal;
    },
  },
};
</script>
