import Vue from "vue";
import App from "./App";
import router from "./router";
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'YOUR_APP_KEY'
})
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
