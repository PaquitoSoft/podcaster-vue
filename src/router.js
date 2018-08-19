import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import { runInNewContext } from "vm";

Vue.use(Router);

export function createRouter(store) {
  const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
      {
        path: "/",
        name: "home",
        component: Home
      },
      {
        path: "/podcast/:podcastId",
        name: "podcast",
        component: () => import(/* webpackChunkName: "podcast" */ "./views/Podcast.vue")
      },
      {
        path: "/podcast/:podcastId/episode/:episodeId",
        name: "episode",
        component: () => import(/* webpackChunkName: "episode" */ "./views/Episode.vue"),
        props: true
      }
    ]
  });

  router.beforeEach((to, from, next) => {
    store.commit('navigationStarted');
    next();
  });

  router.afterEach(() => {
    store.commit('navigationEnded');
    window.scrollTo(0, 0);
  });

  return router;
}
