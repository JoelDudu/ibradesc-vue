import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import QuemSomos from "../views/QuemSomos.vue";
import Cursos from "../views/Cursos.vue";
import Contatos from "../views/Contatos.vue";
import ProEduca from "../views/ProEduca.vue";
import OutrosServicos from "../views/OutrosServicos.vue";
import Noticias from "../views/Noticias.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/quemsomos",
    name: "QuemSomos",
    component: QuemSomos,
  },
  {
    path: "/cursos",
    name: "Cursos",
    component: Cursos
  },
  {
    path: "/contatos",
    name: "Contatos",
    component: Contatos,
  },
  {
    path: "/proeduca",
    name: "ProEduca",
    component: ProEduca,
  },
  {
    path: "/outrosservicos",
    name: "OutrosServicos",
    component: OutrosServicos,
  },
  {
    path: "/noticias",
    name: "Noticias",
    component: Noticias,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
