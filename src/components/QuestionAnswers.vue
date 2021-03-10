<template>
  <div>
    <div v-for="oneAnswer in getAnswers" :key="oneAnswer.id" class="mb-5">
      <div v-for="answer in oneAnswer" :key="answer.id">
        <h6>{{ answer.label }}</h6>
        <span v-if="answer.type !== 'selection'">{{ answer.value }}</span>
        <span v-else>
          <span v-if="!answer.multiselect">{{ answer.multiValue }}</span>
          <span
            v-else
            v-for="answerValue in answer.multiValue"
            class="badge badge-secondary"
            :key="answerValue.id"
            >{{ answerValue }}</span
          >
        </span>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      getAnswers: "getAnswers",
    }),
  },
};
</script>

<style></style>
