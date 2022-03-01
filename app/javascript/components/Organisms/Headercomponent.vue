<template>
  <div class='red'>
　　　<ul>
    <li><img src="/assets/images/date_02-(M).png"/></li>
  </ul>
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
   background-color: rgb(199, 243, 4);
 }
</style>
