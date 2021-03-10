<template>
  <div>
    <form @submit="saveSurvey">
      <div
        class="questions-wrapper"
        v-for="(question, index) in questionCount"
        :key="question.id"
      >
        <h6>Question number {{ index + 1 }}</h6>
        <div class="form-group">
          <input
            type="text"
            v-model="form.questions[index].label"
            placeholder="Question label"
            class="form-control"
          />
          <label for="questionType">Question type</label>
          <select
            name="questionType"
            id="questionType"
            class="form-control"
            v-model="form.questions[index].type"
          >
            <option v-for="type in questionTypes" :key="type.id">{{
              type
            }}</option>
          </select>
          <div v-if="form.questions[index].type === 'selection'" class="mt-2">
            <div class="form-check">
              <input
                type="radio"
                v-model="form.questions[index].multiSelect"
                :value="true"
                class="form-check-input"
              />
              <label class="form-check-label">Multiselect</label>
            </div>
          </div>
        </div>
        <div
          v-if="
            form.questions[index].type === 'radio' ||
              form.questions[index].type === 'selection'
          "
          class="form-group"
        >
          <label>Question Options</label>
          <input
            type="text"
            class="form-control mt-1"
            v-for="(option, optionIndex) in form.questions[index].optionsCount"
            v-model="form.questions[index].options[optionIndex]"
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
      <button class="btn btn-secondary" type="button" @click="addQuestion">
        + Add question
      </button>
      <button
        class="btn btn-primary btn-block mt-2"
        type="submit"
        v-if="questionCount > 0"
      >
        Save survey
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questionCount: 0,
      questionTypes: ["text", "radio", "selection"],
      form: {
        questions: [],
      },
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
      this.form.questions.push(obj);
      this.questionCount += 1;
    },
    addQuestionOptions(index) {
      this.form.questions[index].optionsCount += 1;
    },
    saveSurvey(e) {
      this.$store.dispatch("saveSurvey", this.form.questions);
      e.preventDefault();
    },
  },
};
</script>

<style></style>
