import Vue from "vue";
import VueRouter from "vue-router";
import VueMeta from "vue-meta";
import store from "../store";

import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import portfolio from "../views/portfolio.vue";

Vue.use(VueRouter, VueMeta);
// Vue.use(VueMeta)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/portfolio",
    name: "portfolio",
    component: portfolio,
  },

  {
    path: "/blog",
    name: "Blog",
    component: () => import("../views/Blog.vue"),
  },

  {
    path: "/about",
    name: "About",
    component: () => import("../views/aboutComponent.vue"),
  },

  {
    path: "/articulo/:id",
    name: "Articulo",
    component: () => import("../components/articuloComponent.vue"),
  },

  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },

  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: { requiereAcceso: true },
  },

  {
    path: "/editar/:id",
    name: "Editar",
    component: () => import("../components/editarComponent.vue"),
    meta: { requiereAcceso: true },
  },

  {
    path: "/nuevo",
    name: "NuevoComponent",
    component: () => import("../components/nuevoComponent.vue"),
    meta: { requiereAcceso: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiereAcceso) {
    let auth = store.getters.autenticado;
    if (auth) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
