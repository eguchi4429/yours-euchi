<template>
<router-link :to="{ name: 'question' }" class="question">質問する</router-link>
</template>

<script>

</script>

<style>
.question{
background-color: #ffffff;
  border-radius: 7px;
  box-shadow: 0 0.2em 0.5em rgba(0, 0, 0, 0.2);
  color: #0c0c0c;
  border-block-style: solid;
  border-color: #FBC300;
  font-weight: bold;
  width: 70px;
  height: 10px;
  font-size: 15px;
  text-align:center;
  margin: 0.5em;
  padding: 1em 1em;
  line-height: 0.8;
  white-space: nowrap;
}
</style>