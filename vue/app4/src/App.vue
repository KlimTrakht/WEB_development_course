<template>
  <div id="app">
    <h1>Got jokes ?</h1>
    <button @click="initJokes" class="btn btn-primary">Init jokes</button>
    <button @click="addJoke" class="btn btn-primary">Add joke</button>

    <span @click="status = 'false'">Status: {{ status }}</span>

    <br />
    <span v-for="(type, index) in types" :key="'type-' + index">
      <label>
        <input type="checkbox" :value="type" v-model="checkedTypes" />
        {{ type }}
      </label>
    </span>
    <br />

    <div class="col-md-12">
      <div v-for="(joke, index) in jokes" :key="index" class="col-md-6">
        <Joke
          v-if="checkedTypes.includes(joke.type)"
          :joke="joke"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Joke from "@/components/Joke";
export default {
  name: "App",
  components: {
    Joke
  },
  data() {
    return {
      types: ["general", "knock-knock", "programming"],
      checkedTypes: ["general", "knock-knock", "programming"]
    };
  },
  computed: {
    ...mapGetters({
      jokes: "getJokes"
    }),
    status: {
      get() {
        return this.$store.getters["getStatus"];
      },
      set(val) {
        this.$store.commit("setStatus", val);
      }
    }
  },
  methods: {
    ...mapActions(["initJokes", "addJoke"])
    // initJokes() {
    //   this.$store.dispatch("initJokes");
    // }
  }
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
