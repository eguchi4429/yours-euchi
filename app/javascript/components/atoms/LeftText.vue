<template>
  <div class="menu">
    <div class="content">
      <div class="box">
        <div class="text-box">
          <img
            src="../../images/all.png"
            alt="全ての投稿"
            width="25"
            height="25"
          />
          <div class="text">全ての投稿</div>
        </div>
      </div>
      <div class="box">
        <div class="text-box">
          <img
            src="../../images/like.png"
            alt="お気に入り"
            width="25"
            height="25"
          />
          <div class="text">お気に入り</div>
        </div>
      </div>
      <div class="box">
        <div class="text-box">
          <img
            src="../../images/tome.png"
            alt="自分宛の投稿"
            width="25"
            height="25"
          />
          <div class="text">自分宛の投稿</div>
        </div>
      </div>
      <div class="box">
        <div class="text-box">
          <img
            src="../../images/human.png"
            alt="自分の投稿"
            width="25"
            height="25"
          />
          <div class="text">自分の投稿</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.menu {
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: left;
}

.content {
  margin-top: 15px;
  width: 100%;
}

.box {
  box-sizing: border-box;
  margin: 1px 1px;
  padding: 9px 10px;
  background-color: white;
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: left;
  height: 32px;
  width: 229px;
  border-color: white;
}

.box:hover {
  background-color: #efeded;
}

.text-box {
  display: flex;
  width: 100%;
  height: 200%;
}

.text {
  line-height: normal;
  margin: 1px 9px;
  color: rgb(7, 7, 7);
}
</style>