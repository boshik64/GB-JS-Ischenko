<template>
  <div class="containter">
    <HeaderComponent></HeaderComponent>
    <router-view />
    <FeedbackComponent></FeedbackComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FeedbackComponent from "./components/FeedbackComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import styles from './assets/less/style.less';

export default {
  
  components: {
    HeaderComponent,
    FeedbackComponent,
    FooterComponent,
  },
  mounted() {
    this.$store.dispatch("loadCatalog");
    this.$store.dispatch("loadCart");
  },
};
</script>

<style lang='less'>
// @import "./assets/less/style.less";

// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// body {
//   font-family: "Lato", sans-serif;
// }

// .container {
//   max-width: 1140px;
//   margin: 0 auto;
//   width: 100%;
// }

// /* tablet */
// @media (max-width: 1200px) {
//   .container {
//     padding: 0 16px;
//   }
// }
// /*mobile*/
// @media (max-width: 766px) {
//   .container {
//     padding: 0 8px;
//   }
// }
</style>