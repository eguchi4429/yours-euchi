<template>
<div class='leftsidebar'>
    <div class='button'>
   <primary_button></primary_button> 
   <secondary_button></secondary_button> 
   </div>
</div>
</template>

<script>
import primary_button from "../atoms/primary_button.vue";
import secondary_button from "../atoms/secondary_button.vue";
export default {
  components: {
    primary_button,
    secondary_button,
  }
};

</script>

<style>
 .leftsidebar{ 
   background-color: rgb(243, 4, 4);
   height: 70px;
   width: 150px;
   ext-align:center;
 }

 .button{
   display: flex;
  　justify-content: space-evenly;
 }
</style>