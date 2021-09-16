import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueSessionStorage from 'vue-sessionstorage'
Vue.use(VueSessionStorage)


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  VueSessionStorage,

  render: (h) => h(App),
}).$mount("#app");
