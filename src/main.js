import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import LoadingState from "@/components/LoadingState";
import MButton from "@/components/Button";

createApp(App)
  .component("LoadingState", LoadingState)
  .component("MButton", MButton)
  .use(store)
  .use(router)
  .mount("#app");
