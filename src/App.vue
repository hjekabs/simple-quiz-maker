<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link
            class="nav-link"
            :class="{ disabled: !hasSurvey }"
            to="/edit"
            >Edit</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :class="{ disabled: !hasSurvey }"
            to="/fill"
            >Fill Survey</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :class="{ disabled: !hasSurvey }"
            to="/answers"
            >Answers</router-link
          >
        </li>
      </ul>
    </nav>
    <div v-if="!hasSurvey" class="component mt-5 text-center">
      <h1>Add your first survey</h1>
      <router-link class="btn btn-primary btn-lg mt-2" to="/create"
        >Add a survey</router-link
      >
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters({
      hasSurvey: "hasSurvey",
    }),
  },
  mounted() {
    console.log(this.$store.state.question);
  },
};
</script>

<style></style>
