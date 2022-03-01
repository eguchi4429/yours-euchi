<template>
  <div class='red'>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => ""
    },
    description: {
      type: String,
      default: () => ""
    }
  }
};
</script>

<style scoped>
 .red{
   background-color: rgb(238, 24, 24);
 }
</style>
