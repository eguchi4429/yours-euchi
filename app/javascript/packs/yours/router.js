import { createRouter, createWebHistory } from "vue-router";

import Index from "../../components/yours/Index";
import Headercomponent from "../../Organisms/Headercomponent";
import Question from "../../components/yours/question";

const router = createRouter({
  history: createWebHistory(), // URLにハッシュをつけない
  routes: [
    { path: '/', component: Index, question: 'index' },
    { path: '/question', component: Question, name: 'question' },
    { path: '/headercomponent', component: Headercomponent, name: 'header' },
  ],
})

// 作ったRouterインスタンスをエクスポート
export default router