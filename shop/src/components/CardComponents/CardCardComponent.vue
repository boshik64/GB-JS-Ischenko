<template>
  <div class="card">
    <div class="container card__box">
      <div class="card__inner">
        <div class="card__item--up">
          <div class="card__category">WOMEN COLLECTION</div>
          <img class="card__dash" src="img/card/card__dash.svg" alt="" />
          <h2 class="card__name">MOSCHINO CHEAP AND CHIC</h2>
          <h3 class="card__description">
            Compellingly actualize fully researched processes before proactive
            outsourcing. Progressively syndicate collaborative architectures
            before cutting-edge services. Completely visualize parallel core
            competencies rather than exceptional portals.
          </h3>
          <p class="card__price">$561</p>
        </div>

        <div class="card__item--down">
          <div class="card__filter">
            <!--color-->
            <div class="filter__item">
              <div class="filter__name">CHOOSE COLOR</div>
              <img src="img/card/card__arrow.svg" alt="" />
            </div>

            <!--size-->
            <div class="filter__item">
              <div class="filter__name">CHOOSE SIZE</div>
              <img src="img/card/card__arrow.svg" alt="" />
            </div>

            <!--quantity-->
            <div class="filter__item">
              <div class="filter__name">QUANTITY</div>
              <img src="img/card/card__arrow.svg" alt="" />
            </div>
          </div>

          <a class="card__button" href="basket.html">
            <img class="card__img" src="img/card/card__basket.svg" alt="" />
            <div class="card__text">Add to Cart</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardCardComponent",
  props: ["data"],
};
</script>

<style>
</style>