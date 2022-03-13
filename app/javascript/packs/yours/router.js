import Vue from 'vue';
import Router from "vue-router";

// ルート用のコンポーネントを読み込む
import question from "../../components/yours/question.vue";

// プラグインとして登録。これでRouterを使用できる。
Vue.use(Router)

const router = new Router({
  mode: 'history',　// URLにハッシュをつけない
  routes: [
    {
      path: '/',
      component: question,
      name: "question", // 名前付きルート
    },
      ],
    })

// 作ったRouterインスタンスをエクスポート
export default router