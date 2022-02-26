import { createApp } from "vue";
import Index from "../../components/yours/Index.vue";

document.addEventListener("DOMContentLoaded", () => {
  const app = createApp(Index)
  app.mount("#yoursIndex");
});