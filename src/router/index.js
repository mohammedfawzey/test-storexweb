import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    beforeEnter: (to, from, next) => {
      checkIfUserLoggedIn(to, from, next);
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/RegisterView.vue"),
  },
  {
    path: "/create-new-movie",
    name: "create-new-movie",
    component: () => import("@/views/CreateNewMovieView.vue"),
  },
  {
    path: "/movies/:id",
    name: "single-movie",
    component: () => import("@/views/ShowSingleMovieView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
const checkIfUserLoggedIn = (to, from, next) => {
  const isUserLoggedIn = localStorage.getItem("storexweb_token");
  if (isUserLoggedIn) {
    next();
  } else {
    if (router.history.current.name == "login") return;
    router.push({ path: "/login" });
  }
};
export default router;
