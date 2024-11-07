import { createRouter, createWebHashHistory } from "vue-router";

import ViewNotes from "@/views/ViewNotes.vue";

import ViewStats from "@/views/ViewStats.vue";
import ViewStock from "@/views/ViewStocks.vue";
import ViewStocksRecommend from "@/views/ViewStocksRecommend.vue";
import ViewEditNote from "@/views/ViewEditNote.vue";

const routes = [
  {
    path: "/",
    name: "notes",
    component: ViewNotes,
  },
  {
    path: "/EditNote/:id",
    name: "Edit-Note",
    component: ViewEditNote,
  },

  {
    path: "/status",
    name: "status",
    component: ViewStats,
  },

  {
    path: "/Stocks",
    name: "Stocks",
    component: ViewStock,
  },
  {
    path: "/StocksRecommend",
    name: "StocksRecommend",
    component: ViewStocksRecommend,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
