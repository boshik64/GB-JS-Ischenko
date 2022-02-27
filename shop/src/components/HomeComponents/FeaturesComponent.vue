<template>
  <div class="features">
    <div class="container">
      <div class="features__inner">
        <div class="features__item">
          <img
            class="features__icon"
            src="img/features/features__delivery.svg"
            alt=""
          />
          <h4 class="features__title">Free Delivery</h4>
          <p class="features__text">
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </p>
        </div>

        <div class="features__item">
          <img
            class="features__icon"
            src="img/features/features__sales.svg"
            alt=""
          />
          <h4 class="features__title features__title--02">Sales & discounts</h4>
          <p class="features__text">
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </p>
        </div>

        <div class="features__item">
          <img
            class="features__icon"
            src="img/features/features__quallity.svg"
            alt=""
          />
          <h4 class="features__title features__title--03">Quality assurance</h4>
          <p class="features__text">
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturesComponent",
};
</script>

<style lang='less'>
.features {
  padding-top: 104px;
  padding-bottom: 104px;
  text-align: center;
  background: #222224;
}

.features__inner {
  display: flex;
  flex-wrap: wrap;
}

.features__item {
  width: 360px;
  margin-left: 30px;
}

.features__item:first-child {
  margin-left: 0;
}

.features__title {
  margin-top: 28px;
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 19.96px;
  line-height: 24px;
  color: #fbfbfb;
}

.features__title--02 {
  margin-top: 21px;
}

.features__title--03 {
  margin-top: 27px;
}

.features__text {
  padding: 0 30px;
  width: 360px;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: #fbfbfb;
}

@media (max-width: 1200px) {
  .features {
    padding: 48px 0 64px 0;
  }
  .features__inner {
    display: block;
    .features__item {
      margin: 0 auto;
      margin-bottom: 48px;
    }
    .features__item:last-child {
      margin-bottom: 0;
    }
  }
}
</style>