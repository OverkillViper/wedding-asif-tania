import { createWebHistory, createRouter } from "vue-router";
import Landing        from "../pages/Landing.vue";
import BrideAndGroom  from "../pages/BrideAndGroom.vue";
import Wedding        from "../pages/Wedding.vue";
import Reception      from "../pages/Reception.vue";

const routes = [
  {
    path: "/wedding-asif-tania/invitation",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/wedding-asif-tania/bride-and-groom",
    name: "BrideAndGroom",
    component: BrideAndGroom,
  },
  {
    path: "/wedding-asif-tania/wedding",
    name: "Wedding",
    component: Wedding,
  },
  {
    path: "/wedding-asif-tania/reception",
    name: "Reception",
    component: Reception,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;