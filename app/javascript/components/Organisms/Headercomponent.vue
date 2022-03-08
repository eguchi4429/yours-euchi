<template>
  <div class='red'>
　　
    <div class='images'>
   </div>
 
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

 .images {
  background-image: url("../../images/yours.png");
}
</style>
