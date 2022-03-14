<template>
<div class="menu">
  <div class="content">
      <div class=all>
         <div class=images1>
           <img src="../../images/all.png"  alt="全ての投稿" width="25" height="25">
           <span class="text-box">全ての投稿</span> 
         </div>
      </div>
    <div class="content">お気に入り</div>
    <div class="content">自分宛の投稿</div>
    <div class="content">自分の投稿</div>
 </div>
</div>
</template>

<script>

</script>

<style>
.menu{
  color: rgb(175, 173, 173);
  display:flex;
  flex-flow: column;
  justify-content:center;
  text-align: left;
}

.content{
  margin-top: 15px;
  width: 100%;
  }

.all{
  box-sizing: border-box;
   margin: 1px 1px;
   padding: 9px 10px;
   background-color: #FBC300;
   display:flex;
   flex-flow: column;
   justify-content: center;
   text-align: left;
   height: 32px;
   width: 229px;
}

.images1{
box-sizing: border-box;
width: 100%;
height: 200%;
background-color: #f55e5e;
margin: 1px 1px;
}

</style>