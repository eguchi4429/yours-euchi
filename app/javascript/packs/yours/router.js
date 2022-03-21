import { createRouter, createWebHistory } from "vue-router";

import Index from "../../components/yours/Index";
import Question from "../../components/yours/Question";

//ここでルーティングの設定
const router = createRouter({
  history: createWebHistory(), // URLにハッシュをつけない
  routes: [
    { path: '/', component: Index, name: 'index' },// このパスにアクセスしたら指定したコンポーネントを呼ぶようになっている
    { path: '/question', component: Question, name: 'question' },
  ],
})


// 作ったRouterインスタンスをエクスポート
export default router