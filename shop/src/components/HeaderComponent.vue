<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <nav class="header__left">
          <router-link to='/'><img src="img/header/header__logo.png" alt=""
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

          <router-link class="header__item--registration" to="registration.html"
            ><img src="img/header/header__profile.svg" alt=""
          /></router-link>
          <router-link class="header__item--basket" to="/cart"
            ><img src="img/header/header__basket.svg" alt=""
          /></router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style lang='less'>


.header {
  background: #222222;
  width: 100%;
}

.header__inner {
  display: flex;
  justify-content: space-between;

  padding-top: 18px;
  padding-bottom: 19px;
}

.header__left {
  display: flex;
}

.header__form {
  margin-top: 10px;
  display: flex;
  padding-left: 41px;
}

.header__button {
  background-color: #222222;
  border: 0;
  cursor: pointer;
  height: 26px;
  padding-right: 15px;
}

.header__item--burger {
  padding-right: 33px;
}

.header__item--registration {
  padding-right: 33px;
}

.header__item {
  padding-right: 0;
}

// Burger

#menu__toggle {
  opacity: 0;
}

#menu__toggle:checked ~ .menu__box {
  visibility: visible;
  right: 0;
}

.menu__btn {
  cursor: pointer;

  svg {
    height: 13px;
    width: 13px;
  }
}

.menu__box {
  display: block;
  position: fixed;
  visibility: hidden;
  top: 78px;
  right: -100%;

  width: 232px;
  height: 765px;

  margin: 0;
  padding: 37px 35px;

  list-style: none;
  text-decoration: none;

  background: #ffffff;
  box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
  transition-duration: 0.25s;
  z-index: 5;

  li ul li a {
    text-decoration: none;
    padding-inline-start: 20px;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.8px;
    color: #6f6e6e;
  }
}

.close__burger {
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 1;
}

.submnu__box {
  list-style: none;
}

.submnu__box li {
  padding-bottom: 11px;
}

.burger__title {
  font-size: 14px;
  font-weight: 700;
  line-height: 16.8px;
  color: #000;
  padding-bottom: 24px;
}

.burger__menu__item {
  display: block;
  padding-top: 20px;
  padding-bottom: 12px;

  color: #f16d7f;
  font-size: 14px;
  font-weight: 400;

  text-decoration: none;

  transition-duration: 0.25s;
}

/*mobile*/
@media (max-width: 766px) {
  .header__right {
    display: flex;
    align-items: end;
    span {
      padding-right: 0;
    }
    .header__item--registration {
      display: none;
    }
    .header__item--basket {
      display: none;
    }
  }
}
</style>