import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;


// 引入饿了么
import ElementUI from "element-ui";
import 'assets/scss/element-variables.scss'
import 'assets/style/flex.css'
Vue.use(ElementUI);

// 全局样式
import 'scss/style.scss'

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
