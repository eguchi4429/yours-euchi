<template>
  <div class="leftsidebar">
    <div class="button">
      <PrimaryButton></PrimaryButton>
      <SecondaryButton></SecondaryButton>
    </div>
    <LeftText></LeftText>
  </div>
</template>

<script>
import PrimaryButton from "../atoms/PrimaryButton.vue";
import SecondaryButton from "../atoms/SecondaryButton.vue";
import LeftText from "../atoms/LeftText.vue";

export default {
  components: {
    PrimaryButton,
    SecondaryButton,
    LeftText,
  },
};
</script>

<style>
.leftsidebar {
  background-color: rgb(253, 251, 251);
  height: 70px;
  text-align: center;
  border-style: solid;
  border-color: black;
}

.button {
  display: flex;
  justify-content: space-evenly;
}
</style>