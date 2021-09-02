import Vue from "vue";
import store from "./store";
import App from "./App.vue";

Vue.config.productionTip = false;

import "./components";
import "./assets/style/main.scss";

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
