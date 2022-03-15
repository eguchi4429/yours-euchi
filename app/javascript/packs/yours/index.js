import { createApp } from "vue";
import router from './router'; // ルーティングのために追加
import App from '../../components/yours/App';

document.addEventListener("DOMContentLoaded", () => {
  const app = createApp(App);
  app.use(router);
  app.mount("#yoursIndex");
});
