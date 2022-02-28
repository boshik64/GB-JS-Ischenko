<template>
  <div>
    <svg style="display: none">
      <symbol id="close" viewBox="0 0 18 18">
        <g>
          <path
            d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
          />
        </g>
      </symbol>
    </svg>

    <div class="basket__item">
      <img v-bind:src="data.image" alt="" />
      <div class="item__info">
        <h2>{{ data.title }}</h2>
        <p>
          Price: <span>${{ data.price }}</span>
        </p>
        <p>Color: Red</p>
        <p>Size: Xl</p>
        <p>Quantity:<input type="number" value="2" /></p>

        <svg>
          <use xlink:href="#close"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasketItemComponent",
  props: ["data"],
};
</script>

<style lang='less'>
.basket__item {
  width: 652px;
  display: flex;
  margin-bottom: 40px;
  // border: 1px solid #EAEAEA;
  box-shadow: 17px 19px 24px 0px #00000021;
  position: relative;
  transition: box-shadow 0.1s linear;

  &:hover {
    box-shadow: 24px 26px 26px 15px #00000021;
  }
}

.item__info {
  margin-left: 30px;
  margin-top: 22px;

  svg {
    width: 18px;
    height: 18px;
    position: absolute;
    top: 28px;
    right: 22px;
    transition: transform 0.2s linear;
  }

  svg:hover {
    transform: scale(1.2);
  }

  h2 {
    font-size: 24;
    font-weight: 400;
    line-height: 28.8px;
    color: #222222;
    margin-bottom: 42px;
  }

  p {
    margin-bottom: 6px;
    font-size: 22px;
    line-height: 26px;
    font-weight: 400;
    color: #575757;

    span {
      color: #f16d7f;
    }

    input {
      margin-left: 24px;
      height: 25px;
      width: 44px;
      text-align: center;
      border: 1px solid #eaeaea;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
}

/* tablet */
@media (max-width: 1200px) {
  .basket__item {
    margin: 0 auto;
    margin-bottom: 40px;
  }
}

/*mobile*/
@media (max-width: 766px) {
  .basket__item {
    width: 358px;
    height: 188px;
  }

  .item__info {
    margin-left: 17px;
    margin-top: 13px;

    h2 {
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 25px;
    }

    p {
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 4px;
    }

    svg {
      width: 9px;
      height: 9px;
      top: 17px;
      right: 12px;
    }
  }

  .basket__content {
    margin-bottom: 96px;
  }
}
</style>