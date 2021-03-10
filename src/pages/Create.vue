<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Create survey</h5>
      <QuestionEditor />
    </div>
  </div>
</template>

<script>
import QuestionEditor from "../components/QuestionEditor";

export default {
  components: {
    QuestionEditor,
  },
};
</script>

<style></style>
