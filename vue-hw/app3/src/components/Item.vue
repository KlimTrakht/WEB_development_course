<template>
  <div class="col-md-4" @click="switchItem">
    <div class="item-card">
      <div class="card-blok">
        <h4 class="card-title">{{ item.name }}</h4>
        <button @click="showAlert">Hello</button>
        <div v-for="(value, key) in item" :key="key">
          <div v-if="key !== 'name'">
            <strong>{{ key }}:</strong> {{ value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import localMixin from "@/mixins/localMixin";
export default {
  name: "Item",
  mixins: [localMixin],
  props: ["passedItem"],
  data() {
    return {
      item: {},
    };
  },
  methods: {
    switchItem() {
      const randomId = Math.floor(Math.random() * 63) + 1;
      fetch(`https://swapi.dev/api/${this.$parent.type}/${randomId}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((json) => (this.item = json));
    },
  },
  created() {
    this.item = this.passedItem;
  },
};
</script>
