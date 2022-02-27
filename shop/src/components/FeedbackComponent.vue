<template>
  <div class="feedback">
    <div class="container">
      <div class="feedback__inner">
        <div class="feedback__review">
          <img src="img/feedback/feedback__img.png" alt="" />
          <p class="feedback__text">
            “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar
            purus condimentum“
          </p>
        </div>

        <div class="feedback__subscribe">
          <h4 class="feedback__title">SUBSCRIBE</h4>
          <h5 class="feedback__subtitle">FOR OUR NEWLETTER AND PROMOTION</h5>

          <form class="feedback__form">
            <input
              class="feedback__input"
              type="email"
              placeholder="Enter Your Email"
              name="email"
              id="email"
              minlength="3"
              required
            />
            <button class="feedback__button" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeedbackComponent",
};
</script>

<style lang='less'>

.feedback {
  padding-top: 87px;
  padding-bottom: 126px;
  background: rgba(244, 244, 244, 0.7) 
    center no-repeat;

  background-size: cover;

  text-align: center;
}

.feedback__inner {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.feedback__review {
  width: 360px;
}

.feedback__text {
  padding-top: 30px;

  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  font-style: italic;

  color: #222224;
}

.feedback__subscribe {
  width: 557px;
}

.feedback__title {
  padding-top: 63px;
  padding-bottom: 3px;

  font-weight: 700;
  font-size: 24px;
  line-height: 40px;

  color: #222224;
}

.feedback__subtitle {
  padding-bottom: 32px;

  font-weight: 400;
  font-size: 18px;
  line-height: 30px;

  color: #222224;
}

.feedback__input {
  width: 256px;
  padding: 18px 64px 16px 22px;
  margin-right: 0;
  border-radius: 22px 0 0 22px;
  border: 0;
  outline: none;
  color: #222224;
  opacity: 0.67;
  background: #e1e1e1;
}

.feedback__button {
  margin-left: -4px;
  width: 100px;
  padding: 18px 7px 16px 8px;

  border-radius: 0 22px 22px 0;
  border: 0;
  cursor: pointer;

  color:#fff;

  background: #F16D7F;

  transition: background 0.2s linear;
}

.feedback__button:hover {
  background: #e05c6e;
}

/* tablet */
@media (max-width: 1200px) {
  .feedback {
    padding-top: 64px;
    padding-bottom: 140px;
    background: rgba(244, 244, 244, 0.7)
      no-repeat;
    background-size: cover;
  }
  .feedback__inner {
    div {
      margin: 0 auto;
    }
  }
  .feedback__title {
    padding-top: 48px;
  }
}

/*mobile*/
@media (max-width: 766px) {
  .feedback {
    padding-bottom: 109px;
  }
}
</style>