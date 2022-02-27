<template>
  <div class="promo">
    <div class="container">
      <div class="promo__content">
        <img class="promo__img" src="img/index/promo/promo__img.png" alt="" />
        <div class="promo__title">
          <h1 class="promo__title--normal">
            <span class="promo__title--big">THE BRAND</span><br />
            OF LUXURIOUS
            <span class="promo__title--pink">FASHION</span>
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PromoComponent",
};
</script>

<style lang='less'>
.promo {
  background: #f1e4e6;
  height: 764px;
}

.promo__content {
  display: flex;
  margin-left: -231px;
}

.promo__title {
  padding-left: 91px;
  display: flex;
  align-items: center;
  min-height: 93px;
}

.promo__title--big {
  font-weight: 900;
  font-size: 48px;
  line-height: 58px;
  color: #222222;
}

.promo__title--normal {
  padding-left: 16px;
  border-width: 16px;
  border-color: #f16d7f;
  border-left-style: solid;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #222222;
}

.promo__title--pink {
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #f16d7f;
}

/* tablet */
@media (min-width: 767px) and(max-width: 1200px) {
  .promo {
    height: 100%;

    .promo__content {
      margin: 0;

      img {
        width: 23rem;
        height: 23rem;
      }

      .promo__title {
        padding-left: 0;

        h1 {
          border-width: 12px;

          font-weight: bold;
          font-size: 24px;
          line-height: 29px;

          .promo__title--big {
            font-weight: 900;
            font-size: 44px;
            line-height: 53px;
          }

          .promo__title--pink {
            font-weight: bold;
            font-size: 24px;
            line-height: 29px;
          }
        }
      }
    }
  }
}

/*mobile*/
@media (max-width: 766px) {
  .promo {
    height: 363px;
    display: flex;
    align-items: center;
  }

  .promo__content {
    margin: 0;
    justify-content: center;
    img {
      display: none;
    }
  }

  .promo__title {
    padding: 0;

    h1 {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;

      .promo__title--big {
        font-weight: 900;
        font-size: 38px;
        line-height: 46px;
      }

      .promo__title--pink {
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
      }
    }
  }
}
</style>