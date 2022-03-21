<template>
  <div class="question-post">
    <!-- ヘッダー -->
    <div class="header-question">
      <div class="header-left">
        <ReturnButton></ReturnButton>
      </div>
      <h3>質問を投稿する</h3>
      <div class="header-right">
        <PostButton></PostButton>
      </div>
    </div>

    <!-- ヘッダーここまで -->

    <!-- 投稿画面 -->
    <div class="question-body">
      <!-- 投稿者情報 -->
      <div class="user-information">
        <div class="user-image">
          <img
            src="../../images/human.png"
            alt="投稿者"
            width="40"
            height="40"
          />
        </div>
      </div>
      <!-- 投稿者名 -->
      <div>
        <div class="body-right">
          <!-- 画面右側 -->
          <div class="title-area">
            <!-- タイトルエリア -->
            タイトル
            <div>
              <input
                type="text"
                placeholder="タイトル入力"
                v-model="textInput"
                class="title-input"
              />
            </div>
          </div>
          <div class="input-area">
            <!-- 投稿エリア-->
            投稿内容
            <div>
              <textarea
                placeholder="質問内容入力"
                class="textarea"
                v-model="content"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostButton from "../atoms/PostButton.vue";
import ReturnButton from "../atoms/ReturnButton.vue";

export default {
  components: {
    PostButton,
    ReturnButton,
  },
};
</script>

<style>
.question-post {
  height: 100vh;
}

.header-question {
  background-color: white(248, 245, 245);
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0px;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(236, 236, 236);
}

.header-left {
  margin: 33px;
}

.header-right {
  margin: 33px;
}

.question-body {
  /* background-color: red; */
  height: 100vh;
  display: flex;
}

.user-information {
  background-color: yellow;
  width: 400px;
  height: 340px;
  text-align: center;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.body-right {
  width: 700px;
  height: 100vh;
  padding: 50px;
}

.title-area {
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 300px;
}

.title-input {
  width: 659px;
  height: 42px;
  margin: 10px;
  background: none rgb(252, 252, 252);
  font-size: 16px;
  padding: 0px 10px;
  border: 1px solid rgb(162, 162, 162);
  border-radius: 6px;
}

textarea {
  width: 659px;
  height: 380px;
  margin: 10px;
  font-size: 16px;
  padding: 10px 10px;
  border: 1px solid rgb(162, 162, 162);
  border-radius: 6px;
}
</style>
