<template>
  <div class="col-md-12">
    {{ type }} <br />
    <Item v-for="item in items" :passed-item="item" :key="item.name" />
  </div>
</template>
<script>
import Item from "@/components/Item.vue";
export default {
  name: "Data",
  components: {
    Item,
  },
  data() {
    return {
      type: this.$route.params.type,
      items: [],
    };
  },
  watch: {
    $route: function (newValue) {
      this.type = newValue.params.type;
      this.fetchItems();
    },
  },
  methods: {
    fetchItems() {
      let initial_ids = [1, 13, 14];
      this.items = [];
      for (const i in initial_ids) {
        const id = initial_ids[i];
        fetch(`https://swapi.dev/api/${this.type}/${id}`, { method: "GET" })
          .then((response) => response.json())
          .then((json) => this.items.push(json));
      }
    },
  },
  created() {
    this.fetchItems();
  },
};
</script>
