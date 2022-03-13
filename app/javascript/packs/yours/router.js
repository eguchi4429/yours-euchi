import { createRouter, createWebHistory } from "vue-router";

import Index from "../../components/yours/Index";
import Question from "../../components/yours/question";

const router = createRouter({
  history: createWebHistory(), // URLにハッシュをつけない
  routes: [
    { path: '/', component: Index, question: 'index' },
    { path: '/question', component: Question, name: 'question' },
  ],
})

// 作ったRouterインスタンスをエクスポート
export default router