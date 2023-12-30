import { createApp } from "vue";
import store from "./store/store";
import router from "./router/router"
import "./style.css";
import App from "./App.vue";

let app = createApp(App)
app.use(store)
app.use(router)
app.mount("#app");
