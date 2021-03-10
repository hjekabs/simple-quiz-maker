import Vue from "vue";
import Vuex from "vuex";

const localStorage = window.localStorage;

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    surveyCreated: false,
    survey: [],
  },
  getters: {
    hasSurvey: (state) => {
      if (localStorage.getItem("surveyCreated")) return true;
      return state.surveyCreated;
    },
    getSurvey: () => JSON.parse(localStorage.getItem("survey")),
  },
  mutations: {
    SET_SURVEY(state, survey) {
      state.survey = survey;
      state.surveyCreated = true;
      localStorage.setItem("surveyCreated", true);
      localStorage.setItem("survey", JSON.stringify(survey));
    },
  },
  actions: {
    saveSurvey({ commit }, surveyData) {
      commit("SET_SURVEY", surveyData);
    },
  },
});
