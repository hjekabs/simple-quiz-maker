import Vue from "vue";
import Vuex from "vuex";

const localStorage = window.localStorage;

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    surveyCreated: localStorage.getItem("surveyCreated") || false,
    survey: JSON.parse(localStorage.getItem("survey")) || [],
    answersCreated: localStorage.getItem("answersCreated") || false,
    answers: JSON.parse(localStorage.getItem("answers")) || [],
  },
  getters: {
    hasSurvey: (state) => {
      if (localStorage.getItem("surveyCreated")) return true;
      return state.surveyCreated;
    },
    getSurvey: (state) => {
      if (state.survey.length) {
        return state.survey;
      }
      if (localStorage.getItem("survey").length) {
        return JSON.parse(localStorage.getItem("survey"));
      }
      return [];
    },
    hasAnswers: (state) => {
      if (localStorage.getItem("answersCreated")) return true;
      return state.answersCreated;
    },
    getAnswers: (state) => {
      if (state.answers.length) {
        return state.answers;
      }
      if (localStorage.getItem("answers").length) {
        return JSON.parse(localStorage.getItem("answers"));
      }
      return [];
    },
  },
  mutations: {
    SET_SURVEY(state, survey) {
      state.survey = survey;
      state.surveyCreated = true;
      localStorage.setItem("surveyCreated", true);
      localStorage.setItem("survey", JSON.stringify(survey));
    },
    SET_ANSWERS(state, answers) {
      state.answersCreated = true;
      localStorage.setItem("answersCreated", true);
      let answersArr = [];
      // push to newly created answers arr current asnwer
      answersArr.push(answers);
      const answersFromStorage = JSON.parse(localStorage.getItem("answers"));
      if (answersFromStorage) {
        // push to newly created answers arr localstorage data
        answersFromStorage.map((answ) => answersArr.push(answ));
      }
      localStorage.setItem("answers", JSON.stringify(answersArr));
      //   set state with current answer and from localStorage
      state.answers = answersArr;
    },
  },
  actions: {
    saveSurvey({ commit }, surveyData) {
      commit("SET_SURVEY", surveyData);
    },
    saveAnswers({ commit }, answersData) {
      commit("SET_ANSWERS", answersData);
    },
  },
});
