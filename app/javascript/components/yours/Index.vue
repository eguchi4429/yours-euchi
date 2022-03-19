<template>
  <div class="mypage">
    <Headercomponent class='header'></Headercomponent>
      <div class="parent">
      <div> <Leftcomponent class="leftsidebar"></Leftcomponent> </div>
    </div>
 </div>
</template>

<script>
import Headercomponent from "../Organisms/Headercomponent.vue"; // ヘッダー
import Leftcomponent from "../Organisms/Leftcomponent.vue"; // サイドバー
export default {
  components: {
    Headercomponent,
    Leftcomponent,
  },
}
</script>

<style>
.parent{
  display: flex;
  justify-content:flex-start;
  float: left;
  padding: 0px;
}
.leftsidebar{
  width:230px;
  height:100vh;
  margin: 0;
}
</style>