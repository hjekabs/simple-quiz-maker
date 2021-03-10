<template>
  <div>
    <form @submit="saveAnswers">
      <div v-for="(question, questionIndex) in getSurvey" :key="question.id">
        <h6>{{ question.label }}</h6>
        <input
          type="text"
          class="form-control"
          v-if="question.type === 'text'"
          v-model="answers[questionIndex].value"
        />
        <div v-if="question.type === 'radio'">
          <div
            class="form-check"
            v-for="(optionRadio, radioIndex) in question.options"
            :key="optionRadio.id"
          >
            <input
              type="radio"
              :id="`question-radio-${questionIndex}-${radioIndex}`"
              class="form-check-input"
              v-model="answers[questionIndex].value"
              :value="optionRadio"
            />
            <label
              :for="`question-radio-${questionIndex}-${radioIndex}`"
              class="form-check-label"
              >{{ optionRadio }}</label
            >
          </div>
        </div>
        <div v-if="question.type === 'selection'">
          <select
            class="form-control"
            :multiple="question.multiSelect"
            v-model="answers[questionIndex].multiValue"
          >
            <option
              :value="optionSelect"
              v-for="optionSelect in question.options"
              :key="optionSelect.id"
              >{{ optionSelect }}</option
            >
          </select>
        </div>
        <hr />
      </div>
      <button class="btn btn-primary btn-block mt-2" type="submit">
        Save Answers
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      answers: [],
    };
  },
  computed: {
    ...mapGetters({
      getSurvey: "getSurvey",
    }),
  },
  methods: {
    saveAnswers(e) {
      this.$store.dispatch("saveAnswers", this.answers);
      this.$router.push("/");
      e.preventDefault();
    },
  },
  created() {
    //   create data object
    this.getSurvey.map((question) => {
      this.answers.push({
        label: question.label,
        type: question.type,
        multiselect: question.multiSelect,
        multiValue: [],
        value: null,
      });
    });
  },
};
</script>

<style></style>
