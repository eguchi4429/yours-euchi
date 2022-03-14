<template>
  <div class="mypage">
    <Headercomponent class='header'></Headercomponent>
    <div class="parent">
      <div> <Leftcomponent class="leftsidebar"></Leftcomponent> </div>
      <div><Contents class="contents" v-bind:contents="contents" /></div>
    </div>
  <router-view></router-view>
  </div>
</template>

<script>
import Headercomponent from "../Organisms/Headercomponent.vue"; // ヘッダー
import Leftcomponent from "../Organisms/Leftcomponent.vue"; // サイドバー
import Contents from "./Contents.vue";
import Axios from "axios";

export default {
  components: {
    Headercomponent,
    Leftcomponent,
    Contents
  },
  data: function() {
    return {
      title: "title",
      description: "description",
      contents: []
    };
  },

  created: function() {
    this.updateContents();
  },

  methods: {
    updateContents() {
      Axios.get("/api/v1/yours/index.json").then(
          response => {
            const responseData = response.data;
            this.title = responseData.title;
            this.description = responseData.description;
            this.contents = responseData.contents;
          }
      );
    }
  }
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