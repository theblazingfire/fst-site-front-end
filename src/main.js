import { createApp } from "vue";
import store from "./store/store";
import router from "./router/router";
import gsapPlugin from "./utils/plugin/vue-gsap";
import scrollToPlugin from "./utils/plugin/scroll-plugin";

import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "./assets/fontawesome/css/all.min.css";
import "./assets/style/style.css";

import App from "./App.vue";

let app = createApp(App);

app.use(gsapPlugin);
app.use(scrollToPlugin)
app.use(store);
app.use(router);
app.mount("#app");
