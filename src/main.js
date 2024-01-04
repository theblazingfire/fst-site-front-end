import { createApp } from "vue";
import store from "./store/store";
import router from "./router/router";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "./assets/fontawesome/css/all.min.css";
import "./font.css";
import "./main.css";
import App from "./App.vue";

let app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
