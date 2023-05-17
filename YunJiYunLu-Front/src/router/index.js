import { createRouter, createWebHashHistory } from "vue-router";

const homeChilden = [
  {
    path:"/home",
    redirect: "/home/profile"
  },
  {
    path: "profile",
    name: "profile",
    component: () => import("../views/profile/profile.vue"),
  },
  {
    path: "plan",
    name: "plan",
    component: () => import("../views/plan/plan.vue"),
  },
  {
    path: "notice",
    name: "notice",
    component: () => import("../views/notice/notice.vue"),
  },
  {
    path: "record",
    name: "record",
    component: () => import("../views/record/record.vue"),
  },
  {
    path: "staff",
    name: "staff",
    component: () => import("../views/staff/staff.vue"),
  },
  {
    path: "department",
    name: "department",
    component: () => import("../views/department/department.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login/login.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/home/home.vue"),
      children: homeChilden,
    },
  ],
});

export default router;
