<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <h2 @click="incrementCounter">Counter: {{ counter }}</h2>
    <h2 @click="incrementFirstCounter">FirstCounter{{ counterFirst }}</h2>
    <h3>twiceTheCounter: {{ twiceTheCounter }}</h3>
    <input type="text" ref="textInput" @change="getTextInputValue" />
  </div>
</template>

<script>
import { onMounted, ref, getCurrentInstance } from "vue";
// import {useRouter, useRoute} from 'vue-router';
// import {useStore, createNamespacedHelpers} from 'vuex';
import useCounter from "@/composables/useCounter";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  // data() {
  //   return {
  //     counter: 0
  //   };
  // },
  // methods: {
  // incrementCounter() {
  //   console.log(this.$refs.textInput);
  //   this.counter++;
  // }
  // changeCounter() {
  //   this.incrementCounter();
  // }
  // },
  setup(props, context) {
    // onMounted
    onMounted(() => {
      console.log("onMounted");
      // context.emit();
    });

    // Routing
    // const router = useRouter()
    // const route = useRoute()
    // router.push('/')

    // Store
    // const store = useStore();
    // store.dispatch("getPosts");
    // const { mapActions, mapState } = createNamespacedHelpers("moduleName");
    // const actions = mapActions(["actionA", "actionB"]);
    // const { dataList } = mapState(['dataList'])

    // currentInstance
    const currentInstance = getCurrentInstance();
    console.log("parentProp:", currentInstance.parent.data.parentProp);

    // Атрибуты (нереактивный объект)
    console.log(context.attrs);

    // Слоты (нереактивный объект)
    console.log(context.slots);

    // Генерация событий (метод)
    console.log(context.emit);

    const message = ref(props.msg);
    message.value += "Additional text";

    const {
      counter,
      counters,
      incrementCounter,
      incrementFirstCounter,
      counterFirst,
      twiceTheCounter
    } = useCounter(3);

    const textInput = ref(null);
    function getTextInputValue() {
      console.log("textInputValue", textInput.value.value);
    }

    return {
      counter,
      counters,
      incrementCounter,
      incrementFirstCounter,
      counterFirst,
      twiceTheCounter,
      message,
      textInput,
      getTextInputValue
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
