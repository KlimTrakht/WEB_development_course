export default {
  data() {
    return {
      isShowing: false
    };
  },
  methods: {
    showAlert() {
      alert(`hello: ${this.title}`);
    }
  },
  mounted() {
    console.log("local mixin output");
  }
};
