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
    survey: [],
  },
  getters: {
    hasSurvey: (state) => state.surveyCreated,
  },
  mutations: {
    SET_SURVEY(state, survey) {
      state.survey = survey;
      state.surveyCreated = true;
    },
  },
  actions: {
    saveSurvey({ commit }, surveyData) {
      commit("SET_SURVEY", surveyData);
    },
  },
  pluins: [vuexLocal.plugin],
});
