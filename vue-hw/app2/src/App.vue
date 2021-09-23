<template>
  <div id="app">
    <h3>{{ title }}</h3>
    <div class="col-md-12">
      <Character v-for="id in initials_ids" :id="id" :key="id" />
    </div>
  </div>
</template>

<script>
import Character from "./components/Character.vue";

export default {
  name: "App",
  components: {
    Character,
  },
  data() {
    return {
      title: "Team generotor",
      initials_ids: [1, 13, 20],
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
