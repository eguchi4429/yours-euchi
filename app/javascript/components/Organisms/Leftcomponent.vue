<template>
<div class='leftsidebar'>
   <div class='button'>
    <primary_button></primary_button> 
    <secondary_button></secondary_button> 
   </div>
  <left_text></left_text> 
</div>
</template>

<script>
import primary_button from "../atoms/primary_button.vue";
import secondary_button from "../atoms/secondary_button.vue";
import left_text from "../atoms/left_text.vue";

export default {
  components: {
    primary_button,
    secondary_button,
    left_text,
  }
};

</script>

<style>
 .leftsidebar{ 
   background-color: rgb(253, 251, 251);
   height: 70px;
   text-align:center;
   border-style: solid;
   border-color: black;
 }

 .button{
   display: flex;
   justify-content: space-evenly;
 }
</style>