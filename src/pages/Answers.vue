<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Complete survey</h5>
      <QuestionAnswers />
    </div>
  </div>
</template>

<script>
import QuestionAnswers from "../components/QuestionAnswers";

export default {
  components: {
    QuestionAnswers,
  },
};
</script>

<style></style>
