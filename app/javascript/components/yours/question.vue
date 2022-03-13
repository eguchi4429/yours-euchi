<template>
  <div id="app">
    <!-- 追記 -->
  <router-view />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      message: "Hello Vue!",
    };
  }
};
</script>