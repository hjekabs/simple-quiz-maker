import Vue from "vue";
import VueRouter from "vue-router";
import Create from "../pages/Create.vue";
import Edit from "../pages/Edit.vue";
import FillSurvey from "../pages/FillSurvey.vue";
import Answers from "../pages/Answers.vue";
// import store from "../store/index.js";

// const hasSurvey = store.getters["hasSurvey"];

Vue.use(VueRouter);

const routes = [
  { path: "/create", component: Create },
  { path: "/edit", component: Edit },
  { path: "/fill", component: FillSurvey },
  { path: "/answers", component: Answers },
];

const router = new VueRouter({ mode: "history", routes });

// router.beforeEach((to, from, next) => {
//   if (!hasSurvey) {
//     next({ path: "/" });
//     return;
//   } else next();
// });

export default router;
