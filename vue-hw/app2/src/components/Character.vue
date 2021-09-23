<template>
  <div class="col-md-4" @click="switchCharacter">
    <div class="character-card" v-if="character.name">
      <h4 class="card-title">{{ character.name }}</h4>
      <p class="card-text">Height: {{ character.height }}</p>
      <p class="card-text">Mass: {{ character.mass }}</p>
      <p class="card-text">Birthday: {{ character.birth_year }}</p>
      <p class="card-text">Eye: {{ character.eye_color }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Character",
  data() {
    return {
      character: {},
    };
  },
  props: {
    id: Number,
  },
  methods: {
    fetchCharacter(id) {
      fetch(`https://swapi.dev/api/people/${id}`, { method: "GET" })
        .then((response) => response.json())
        .then((json) => (this.character = json));
    },
    switchCharacter() {
      const randomId = Math.floor(Math.random() * 82) + 1;
      this.fetchCharacter(randomId);
    },
  },
  created() {
    this.fetchCharacter(this.id);
  },
};
</script>
