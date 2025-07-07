import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path:'',
    redirect:'/Home'
  },
   

  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/course",
    name: "Course",
    component: () =>
      import(/* webpackChunkName: "course" */ "../views/Courser1.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "course" */ "../views/Login.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () =>
      import(/* webpackChunkName: "course" */ "../views/Cart.vue"),
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () =>
      import(/* webpackChunkName: "course" */ "../views/Detail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;