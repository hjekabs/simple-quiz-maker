<template>
  <div v-if="!hasSurvey" class="component text-center">
    <h1>Add your first survey</h1>
    <router-link class="btn btn-primary btn-lg mt-2" to="/create"
      >Add a survey</router-link
    >
  </div>
  <div v-else>
    <h1>Check out answers</h1>
    <router-link class="btn btn-primary btn-lg mt-2" to="/answers"
      >Add a survey</router-link
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      hasSurvey: "hasSurvey",
    }),
  },
  mounted() {
    console.log(this.hasSurvey);
  },
};
</script>

<style></style>
