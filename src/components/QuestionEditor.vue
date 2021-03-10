<template>
  <div>
    <form @submit="saveSurvey">
      <div
        class="questions-wrapper"
        v-for="(question, index) in numberOfQuestions"
        :key="question.id"
      >
        <h6>Question number {{ index + 1 }}</h6>
        <div class="form-group">
          <input
            type="text"
            v-model="questions[index].label"
            placeholder="Question label"
            class="form-control"
          />
          <label for="questionType">Question type</label>
          <select
            name="questionType"
            id="questionType"
            class="form-control"
            v-model="questions[index].type"
          >
            <option v-for="type in questionTypes" :key="type.id">{{
              type
            }}</option>
          </select>
          <div v-if="questions[index].type === 'selection'" class="mt-2">
            <div class="form-check">
              <input
                type="radio"
                v-model="questions[index].multiSelect"
                :value="true"
                class="form-check-input"
              />
              <label class="form-check-label">Multiselect</label>
            </div>
          </div>
        </div>
        <div
          v-if="
            questions[index].type === 'radio' ||
              questions[index].type === 'selection'
          "
          class="form-group"
        >
          <label>Question Options</label>
          <input
            type="text"
            class="form-control mt-1"
            v-for="(option, optionIndex) in questions[index].optionsCount"
            v-model="questions[index].options[optionIndex]"
            :key="option.id"
          />
          <button
            type="button"
            class="btn btn-sm btn-secondary d-block mt-1"
            @click="addQuestionOptions(index)"
          >
            + Add option
          </button>
        </div>
        <hr />
      </div>
      <span class="btn btn-secondary" @click="addQuestion">
        + Add question
      </span>
      <button
        class="btn btn-primary btn-block mt-2"
        type="submit"
        v-if="numberOfQuestions > 0"
      >
        Save survey
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    editMode: {
      type: Boolean,
    },
    questions: {
      type: Array,
      default: () => [],
    },
    questionCount: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      questionTypes: ["text", "radio", "selection"],
      numberOfQuestions: 0,
    };
  },
  methods: {
    addQuestion() {
      // object for question
      const obj = {
        label: "",
        type: "text",
        options: [],
        optionsCount: 0,
        multiSelect: false,
      };
      // add question object to data
      this.questions.push(obj);
      this.numberOfQuestions += 1;
    },
    addQuestionOptions(index) {
      this.questions[index].optionsCount += 1;
    },
    saveSurvey(e) {
      this.$store.dispatch("saveSurvey", this.questions);
      this.$router.push("/");
      e.preventDefault();
    },
  },
  created() {
    if (this.questionCount !== 0) {
      this.numberOfQuestions = this.questionCount;
    }
  },
};
</script>

<style></style>
