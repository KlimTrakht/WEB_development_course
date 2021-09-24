<template>
  <div id="app">
    <h3>{{ title }}</h3>
    <button @click="showAlert">Hello</button>
    <h4>
      <router-link to="/about" class="link">About us</router-link> |
      <router-link to="/data/people" class="link">People</router-link> |
      <router-link to="/data/planets" class="link">Planets</router-link>
    </h4>
    <router-view></router-view>
  </div>
</template>

<script>
import localMixin from "@/mixins/localMixin";

export default {
  name: "App",
  mixins: [localMixin],
  data() {
    return {
      title: "Starwars router",
    };
  },
  mounted() {
    console.log("component output");
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
