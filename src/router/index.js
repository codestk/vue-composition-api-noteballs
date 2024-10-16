import { createRouter, createWebHashHistory } from "vue-router";

import ViewNotes from "@/views/ViewNotes.vue";

import ViewStats from "@/views/ViewStats.vue";

const routes = [
  {
    path: "/",
    name: "notes",
    component: ViewNotes,
  },
  {
    path: "/status",
    name: "status",
    component: ViewStats,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
