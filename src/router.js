import { createRouter, createWebHashHistory } from "vue-router";
import Register from "./pages/Register.vue";
import Login from "./pages/Login.vue";
import Routes from "./pages/Routes.vue";
import Rating from "./pages/Rating.vue";
import Reviews from "./pages/Reviews.vue";
import Route from "./pages/Route.vue";
import Favorites from "./pages/Favorites.vue";
import CreateRoute from "./pages/CreateRoute.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/Register", component: Register },
    { path: "", component: Routes },
    { path: "/Create", component: CreateRoute },
    { path: "/Route", component: Route },
    { path: "/Reviews", component: Reviews },
    { path: "/Rating", component: Rating },
    { path: "/Login", component: Login },
    { path: "/Favorites", component: Favorites },
  ],
});
