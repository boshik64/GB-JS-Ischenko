<template>
  <div class="registration">
    <div class="container">
      <div class="registration__inner">
        <div class="registration__item--left">
          <form class="registration__form" action="#">
            <h2 class="registration__headline">Your Name</h2>
            <input class="reg-input" type="text" placeholder="First Name" />
            <input class="reg-input" type="text" placeholder="Last Name" />

            <div class="registration__sex">
              <label class="sex" for="male">
                <input type="radio" name="sex" id="male" />
                Male</label
              >

              <label class="sex" for="female">
                <input type="radio" name="sex" id="female" />
                Female</label
              >
            </div>

            <h2 class="registration__headline">Login details</h2>
            <input
              class="reg-input"
              type="email"
              placeholder="Email"
              name="email"
              minlength="3"
              required
            />
            <input class="reg-input" type="password" placeholder="Password" />
            <p class="registration__text">
              Please use 8 or more characters, with at least 1 number and a
              mixture of uppercase and lowercase letters
            </p>

            <a class="registration__link" href="#"
              >JOIN NOW <img src="/img/registration/Group.svg" alt=""
            /></a>
          </form>
        </div>

        <div class="registration__item--right">
          <div class="registration__title">LOYALTY HAS ITS PERKS</div>
          <div class="registration__subtitle">
            Copy Get in on the loyalty program where you can earn points and
            unlock serious perks. Starting with these as soon as you join:
          </div>
          <ul class="registration__list">
            <li class="reg-list__item">
              <img
                class="reg-list__img"
                src="img/registration/li__img.png"
                alt=""
              />15% off welcome offer
            </li>
            <li class="reg-list__item">
              <img
                class="reg-list__img"
                src="img/registration/li__img.png"
                alt=""
              />Free shipping, returns and exchanges on all
              <span>orders</span>
            </li>
            <li class="reg-list__item">
              <img
                class="reg-list__img"
                src="img/registration/li__img.png"
                alt=""
              />$10 off a purchase on your birthday
            </li>
            <li class="reg-list__item">
              <img
                class="reg-list__img"
                src="img/registration/li__img.png"
                alt=""
              />Early access to products
            </li>
            <li class="reg-list__item">
              <img
                class="reg-list__img"
                src="img/registration/li__img.png"
                alt=""
              />Exclusive offers & rewards
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistrationInnerComponent",
};
</script>

