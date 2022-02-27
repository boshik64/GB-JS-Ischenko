<template>
  <div class="menu">
    <div class="container">
      <div class="menu__inner">
        <h2 class="menu__title">NEW ARRIVALS</h2>

        <nav class="menu__items">
          <router-link to="/" class="menu__item">HOME</router-link>
          <router-link to="catalog.html" class="menu__item menu__item--slash">MEN</router-link>
          <router-link to="catalog.html" class="menu__item">NEW ARRIVALS</router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartMenuComponent",
};
</script>

<style lang='less'>
// main: ../style.less

.menu {
  height: 148px;
  background-color: #f8f3f4;
}
.menu__inner {
  display: flex;
  justify-content: space-between;
  padding-top: 59px;
}

.menu__title {
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  color: #F16D7F;
}

.menu__title--minor {
  padding-top: 59px;
}

.menu__item {
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;

  text-decoration: none;

  color: #636363;

  transition: color 0.2s linear;
}

.menu__item:hover {
  font-weight: 700;
  color: #F16D7F;
}

.menu__item:last-child {
  font-weight: 700;
  color: #F16D7F;
}

.menu__item--slash {
  text-decoration: none;
}

.menu__item--slash::before,
.menu__item--slash::after {
  content: "/";
  font-weight: 300;
  margin-right: 7px;
  margin-left: 7px;
  color: #636363;
}

/*mobile*/
@media (max-width: 766px) {
  .menu__inner {
    display: block;
    text-align: center;
    padding-top: 24px;
    .menu__title {
      margin-bottom: 32px;
    }
  }
  .menu__title--minor {
    text-align: center;
  }
}
</style>