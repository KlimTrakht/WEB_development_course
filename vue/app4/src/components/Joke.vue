<template>
  <div class="joke-card">
    <div class="card-block">
      <button @click="$store.commit('removeJoke', index)">X</button>
      <p>
        <u>{{ joke.setup }}</u>
      </p>
      <p>
        <em>{{ joke.punchline }}</em>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Joke",
  props: ["joke", "index"]
};
</script>

<style scoped></style>
