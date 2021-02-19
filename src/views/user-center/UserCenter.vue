<template>
  <div>
    <UserHeaderBar />
    <div class="main">
      <UserAside />
    </div>
  </div>
</template>

<script>
import UserHeaderBar from "./components/UserHeaderBar";
import UserAside from "./components/UserAside.vue";
export default {
  components: {
    UserHeaderBar,
    UserAside
  },
};
</script>

<style scoped>
.main {
  margin-left: 78px;
}
</style>