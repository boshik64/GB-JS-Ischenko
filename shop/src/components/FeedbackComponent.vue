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
