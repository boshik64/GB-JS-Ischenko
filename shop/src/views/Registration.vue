<template>
  <div class="registration">
    <RegistrationMenuComponent></RegistrationMenuComponent>
    <RegistrationInnerComponent></RegistrationInnerComponent>
  </div>
</template>

<script>
import RegistrationMenuComponent from "../components/RegistrationComponents/RegistrationMenuComponent.vue";
import RegistrationInnerComponent from "../components/RegistrationComponents/RegistrationInnerComponent.vue";
export default {
  components: { RegistrationMenuComponent, RegistrationInnerComponent },
};
</script>

