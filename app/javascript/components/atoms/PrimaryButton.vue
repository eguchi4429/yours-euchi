<template>
<router-link :to="{ name: 'question' }" class="memo">メモ作成</router-link>
   <router-view></router-view>
</template>

<script>
</script>

<style>
.memo{
background-color: #FBC300;
  border-radius: 7px;
  box-shadow: 0 0.2em 0.5em rgba(0, 0, 0, 0.2);
  color: #0c0c0c;
  font-weight: bold;
  text-decoration: none;
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