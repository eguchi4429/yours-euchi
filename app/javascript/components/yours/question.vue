<template>
<div class="question">
  <div class="header-question">
    <h1>質問を投稿する</h1>
      <ReturnButton></ReturnButton> 
      <PostButton></PostButton> 
  </div>
  <div class="post">
  </div>
</div>

</template>

<script>
import PostButton from "../atoms/PostButton.vue";
import ReturnButton from "../atoms/PostButton.vue";

export default {
  components: {
    PostButton,
    ReturnButton,
  }
};

</script>

<style>

</style>