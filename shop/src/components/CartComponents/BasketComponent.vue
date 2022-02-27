<template>
  <div class="basket">
    <div class="container">
      <div class="basket__content">
        <div class="basket__items">
          <div class="basket__item">
            <img src="img/basket/basket1.png" alt="" />
            <div class="item__info">
              <h2>
                MANGO PEOPLE <br />
                T-SHIRT
              </h2>
              <p>Price: <span>$300</span></p>
              <p>Color: Red</p>
              <p>Size: Xl</p>
              <p>Quantity:<input type="number" value="2" /></p>

              <svg>
                <use xlink:href="#close"></use>
              </svg>
            </div>
          </div>

          <div class="basket__item">
            <img src="img/basket/basket2.png" alt="" />
            <div class="item__info">
              <h2>
                MANGO PEOPLE <br />
                T-SHIRT
              </h2>
              <p>Price: <span>$300</span></p>
              <p>Color: Red</p>
              <p>Size: Xl</p>
              <p>Quantity:<input type="number" value="2" /></p>

              <svg>
                <use xlink:href="#close"></use>
              </svg>
            </div>
          </div>

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
              <p>SUB TOTAL <span>$900</span></p>
              <p>GRAND TOTAL <span>$900</span></p>
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
export default {
  name: "BasketComponent",
};
</script>

<style lang='less'>
.basket__content {
  margin-top: 96px;
  margin-bottom: 128px;
  display: flex;
  justify-content: space-between;
}

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

.items__buttons {
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: #000000;
    font-size: 14px;
    line-height: 16.8px;
    font-weight: 300;
    padding: 17px 40px;
    border: 1px solid #a4a4a4;
    transition: box-shadow 0.1s linear;

    &:hover {
      box-shadow: 7px 9px 14px 0px #00000021;
    }
  }
}

.basket__inputs {
  margin-bottom: 57px;

  h2 {
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #222222;
    margin-bottom: 20px;
  }

  input {
    width: 360px;
    height: 45px;
    margin-bottom: 20px;
    border: 1px solid #a4a4a4;
    padding: 17px;
  }

  input[type="button"] {
    margin-bottom: 0;
    width: 101px;
    height: 35px;
    font-weight: 300;
    font-size: 11px;
    line-height: 13px;
    cursor: pointer;
    color: #4a4a4a;
    text-align: center;
    padding: 0;
    background-color: #00000000;
    border: 1px solid #a4a4a4;

    transition: box-shadow 0.2s linear;
    transition: background-color 0.2s linear;

    &:hover {
      background-color: #00000011;
      box-shadow: 7px 9px 14px 0px #00000021;
    }
  }
}

.backet__coast {
  background-color: #f5f3f3;
  height: 214px;
  width: 360px;

  .backet__container {
    padding: 44px;
    text-align: center;

    p:nth-of-type(2) {
      margin-bottom: 21px;
      font-weight: 300;
      font-size: 16px;
      line-height: 19px;

      color: #222222;

      span {
        color: #f16d7f;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
      }
    }

    p {
      text-align: right;
      margin-bottom: 12px;
      font-weight: normal;
      font-size: 11px;
      line-height: 13px;

      color: #4a4a4a;

      span {
        margin-left: 20px;
      }
    }

    hr {
      border-color: #e2e2e2;
    }

    a {
      width: 100%;
      margin-top: 17px;
      display: inline-block;
      vertical-align: top;
      cursor: pointer;

      padding: 16px 30px;
      border: 1px solid #f16d7f;

      text-align: center;

      text-decoration: none;

      font-weight: 400;
      font-size: 14px;
      line-height: 16.8px;

      background: #f16d7f;
      color: #fff;

      transition: background 0.3s linear;

      &:hover {
        color: #f26376;
        background-color: #fff;
      }
    }
  }
}

/* tablet */
@media (max-width: 1200px) {
  .basket__content {
    margin-top: 59px;
    display: block;

    .basket__items {
      .basket__item {
        margin: 0 auto;
        margin-bottom: 40px;
      }

      .items__buttons {
        margin-top: 62px;
      }
    }
  }

  .basket__form {
    margin-top: 64px;
    display: flex;
    justify-content: space-between;

    .basket__inputs {
      margin-bottom: 0;
    }

    .backet__coast {
      margin-top: 39px;
    }
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

  .items__buttons {
    a {
      padding: 9px 18px;
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;

      text-align: center;
    }
  }
  .basket__form {
    display: block;
  }
  .basket__content {
    margin-bottom: 96px;
  }
}
</style>