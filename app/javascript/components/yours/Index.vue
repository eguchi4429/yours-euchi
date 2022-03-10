<template>
  <div>
  <Headercomponent class='header'></Headercomponent> 
  </div>
   <div>
  <Leftcomponent class="leftsidebar"></Leftcomponent>
  <Contents v-bind:contents="contents" />
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
.header{
 display: flex; 
 flex-direction: column;
}
.leftsidebar{

}
</style>