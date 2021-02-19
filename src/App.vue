<template>
  <div id="app">
    <Header :userInfo="this.$store.state.userInfo"></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
</style>
