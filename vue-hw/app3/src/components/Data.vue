<template>
  <div>
    {{ type }} <br />
    {{ items }}
  </div>
</template>
<script>
export default {
  name: "Data",
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
      for (const i in initial_ids) {
        const id = initial_ids[i];
        fetch(`https://swapi.dev/api/${this.type}/${id}`, { method: "GET" })
          .then((response) => response.json())
          .then((json) => this.items.push(json));
      }
    },
  },
  created() {
    // console.log();
  },
};
</script>
