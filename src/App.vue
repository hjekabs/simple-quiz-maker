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
    <div class="container justify-content-center mt-5">
      <div class="row justify-content-center">
        <div class="col"><router-view></router-view></div>
      </div>
    </div>
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
};
</script>

<style></style>
