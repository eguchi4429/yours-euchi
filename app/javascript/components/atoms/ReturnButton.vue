<template>
 <router-link :to="{ name: 'index' }" class="return-button">戻る</router-link>
 <router-view></router-view>
</template>

<script>
</script>

<style>
.return-button{
  background: none rgb(240, 237, 237);
  border-radius: 7px;
  box-shadow: 0 0.2em 0.5em rgba(0, 0, 0, 0.2);
  color: #0c0c0c;
  font-weight: bold;
  text-decoration: none;
  width: 100px;
  height: 8px;
  font-size: 14px;
  text-align:center;
  margin: 0.5em;
  padding: 1em 1em;
  line-height: 0.8;
  white-space: nowrap;
}
</style>

