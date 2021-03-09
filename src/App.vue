<template>
  <div id="app">
    <h1>So cool</h1>
    <router-link to="/foo">Go to Foo</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    console.log(this.$store.state.question);
  },
};
</script>

<style></style>
