<template>
  <div class="col-md-4" @click="switchItem">
    <div class="item-card">
      <div class="card-block">
        <h4 class="card-title">{{ item.name }}</h4>
        <button @click="showAlert">Hello</button>
        <button @click="emitMethod">Emit event</button>
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
import { EventBus } from "../main.js";
export default {
  name: "Item",
  mixins: [localMixin],
  props: ["passedItem"],
  data() {
    return {
      item: {},
      isShowing: "some string"
    };
  },
  methods: {
    switchItem() {
      const randomId = Math.floor(Math.random() * 63) + 1;
      fetch(`https://swapi.dev/api/${this.$parent.type}/${randomId}`, {
        method: "GET"
      })
        .then(response => response.json())
        .then(json => (this.item = json));
    },
    emitMethod() {
      EventBus.$emit("customevent", "eventdata");
    }
  },
  created() {
    this.item = this.passedItem;
  },
  mounted() {
    EventBus.$on("customevent", data => {
      console.log("custom event from Item", data);
    });
  },
  beforeDestroy() {
    EventBus.$off("customevent");
  }
};
</script>
