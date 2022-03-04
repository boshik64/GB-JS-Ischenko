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
