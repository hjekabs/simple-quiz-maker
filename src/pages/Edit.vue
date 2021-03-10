<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Create survey</h5>
      <QuestionEditor
        :edit="true"
        :questions="getSurvey"
        :questionCount="questionsCount"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import QuestionEditor from "../components/QuestionEditor";

export default {
  components: {
    QuestionEditor,
  },
  computed: {
    ...mapGetters({
      getSurvey: "getSurvey",
    }),
    questionsCount() {
      return this.getSurvey.length;
    },
  },
};
</script>

<style></style>
