import { createApp } from "vue";
import router from './router';
import App from '../../components/yours/App';

document.addEventListener("DOMContentLoaded", () => {
  const app = createApp(App);
  app.use(router);
  app.mount("#yoursIndex");
});