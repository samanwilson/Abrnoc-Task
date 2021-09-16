import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Register.vue";
import Login from '../components/Login'
import Panel from "../views/Panel";
import Deploy from "../views/Deploy";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path:'/Login',
   component : Login
  },
  {
    path:'/Panel',
    component : Panel
  },
  {
    path:'/Deploy',
    component : Deploy
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
