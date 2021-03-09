import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    surveyCreated: false,
    question: "tests",
  },
  getters: {
    hasSurvey: (state) => state.surveyCreated,
  },
  mutations: {},
  actions: {},
  pluins: [vuexLocal.plugin],
});
