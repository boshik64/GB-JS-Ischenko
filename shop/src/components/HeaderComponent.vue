<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <nav class="header__left">
          <router-link to="/"
            ><img src="img/header/header__logo.png" alt=""
          /></router-link>

          <form class="header__form">
            <button class="header__button">
              <img src="img/header/header__search.svg" alt="" />
            </button>
          </form>
        </nav>

        <div class="header__right">
          <span class="header__item--burger">
            <input id="menu__toggle" type="checkbox" />
            <label class="menu__btn" for="menu__toggle">
              <img src="img/header/header__burger.svg" alt="" />
            </label>

            <ul class="menu__box">
              <div class="close__burger">
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                  <svg>
                    <use xlink:href="#close__burger"></use>
                  </svg>
                </label>
              </div>

              <h2 class="burger__title">MENU</h2>
              <li>
                <a class="burger__menu__item" href="#">MAN</a>
                <ul class="submnu__box">
                  <li><a href="#">Accessories</a></li>
                  <li><a href="#">Bags</a></li>
                  <li><a href="#">Denim</a></li>
                  <li><a href="#">Shirts</a></li>
                </ul>
              </li>
              <li>
                <a class="burger__menu__item" href="#">WOMAN</a>
                <ul class="submnu__box">
                  <li><a href="#">Accessories</a></li>
                  <li><a href="#">Jackets & Coats</a></li>
                  <li><a href="#">Polos</a></li>
                  <li><a href="#">T-Shirts</a></li>
                  <li><a href="#">Shirts</a></li>
                </ul>
              </li>
              <li>
                <a class="burger__menu__item" href="#">KIDS</a>
                <ul class="submnu__box">
                  <li><a href="#">Accessories</a></li>
                  <li><a href="#">Jackets & Coats</a></li>
                  <li><a href="#">Polos</a></li>
                  <li><a href="#">T-Shirts</a></li>
                  <li><a href="#">Shirts</a></li>
                  <li><a href="#">Bags</a></li>
                </ul>
              </li>
            </ul>
          </span>

          <router-link class="header__item--registration" to="/registration"
            ><img src="img/header/header__profile.svg" alt=""
          /></router-link>
          <router-link class="header__item--basket" to="/cart">
            <img src="img/header/header__basket.svg" alt="" />
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: ["data"],
  computed: {
    cartCount() {
      return this.$store.getters("getCartCount");
    },
  },
};
</script>

