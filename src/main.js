import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import setupPrimeVue from "./plugins/primevue-setup";
import store from "./store/store";
import router from "./router/router";
import i18n from "./plugins/i18n";
import AnimateOnScroll from "primevue/animateonscroll";
import ToastService from "primevue/toastservice";
const app = createApp(App);

setupPrimeVue(app);
app
  .use(store)
  .use(router)
  .use(i18n)
  .use(ToastService)
  .directive("animateonscroll", AnimateOnScroll);

app.mount("#app");
