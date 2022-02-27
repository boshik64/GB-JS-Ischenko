<template>
  <div class="categories">
    <div class="container">
      <div class="categories__inner">
        <div class="categories__items">
          <a href="/" class="categories__item">
            <img
              class="cotigories__img"
              src="img/index/categories/categories__item-woman.png"
              alt=""
            />
            <div class="categories__content">
              <h2 class="categories__title">30% OFF</h2>
              <h3 class="categories__subtitle">FOR WOMEN</h3>
            </div>
          </a>

          <a href="/" class="categories__item">
            <img
              class="cotigories__img"
              src="img/index/categories/categories__item-man.png"
              alt=""
            />
            <div class="categories__content">
              <h2 class="categories__title">HOT DEAL</h2>
              <h3 class="categories__subtitle">FOR MEN</h3>
            </div>
          </a>

          <a href="/" class="categories__item">
            <img
              class="cotigories__img"
              src="img/index/categories/categories__item-kids.png"
              alt=""
            />
            <div class="categories__content">
              <h2 class="categories__title">NEW ARRIVALS</h2>
              <h3 class="categories__subtitle">FOR KIDS</h3>
            </div>
          </a>
        </div>

        <a href="/" class="categories__item--long">
          <img src="img/index/categories/categories__accesories.png" alt="" />
          <div class="categories__content">
            <h2 class="categories__title">LUXIROUS & TRENDY</h2>
            <h3 class="categories__subtitle">ACCESORIES</h3>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesComponent",
};
</script>

<style lang='less'>
.categories {
  padding-top: 65px;
  padding-bottom: 49px;
}

.categories__inner {
  display: flex;
  flex-direction: column;
}

.categories__items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 30px;
}

.categories__item {
  cursor: pointer;

  width: 360px;
  height: 260px;

  position: relative;
}

.categories__item--long {
  position: relative;
  cursor: pointer;
}

.cotigories__img {
  position: absolute;
  z-index: 1;
}

.categories__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  width: 100%;
  height: 100%;

  top: 0;
  left: 0;

  background: rgba(33, 22, 22, 0.7);

  position: absolute;
  z-index: 2;

  transition: background 0.2s linear;
}

.categories__content:hover {
  background: rgba(33, 22, 22, 0.5);
}

.categories__title {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #fff;
}

.categories__subtitle {
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #f16d7f;
}

/* tablet */
@media (min-width: 767px) and(max-width: 1200px) {
  .categories {
    padding-top: 20px;
  }

  .categories__items {
    padding-bottom: 19px;

    a {
      width: 232.44px;
      height: 167.62px;

      img {
        width: 232.44px;
        height: 167.62px;
      }
    }
  }

  .categories__inner {
    .categories__item--long {
      width: 734.94px;
      height: 116.09px;

      img {
        width: 734.94px;
        height: 116.09px;
      }
    }
  }
}

/*mobile*/
@media (max-width: 766px) {
  .categories {
    padding-top: 64px;
    padding-bottom: 0;
  }

  .categories__items {
    padding-bottom: 0;
    justify-content: center;

    a {
      margin-bottom: 32px;
      width: 344px;
      height: 249px;

      img {
        width: 344px;
        height: 249px;
      }
    }
  }

  .categories__item--long {
    width: 343.26px;
    height: 111px;

    img {
      width: 343.26px;
      height: 111px;
    }
  }
  .categories__inner {
    align-items: center;
  }
}
</style>