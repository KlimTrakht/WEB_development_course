import { computed, isReactive, reactive, ref, toRefs, watch } from "vue";

export default function useCounter(argument) {
  console.log("argument", argument);
  // ref
  const counter = ref(0);
  function incrementCounter() {
    counter.value++;
    // counter.value += argument ;
  }

  //reactive
  const counters = reactive({
    counterFirst: 0,
    counterSecond: 0
  });
  function incrementFirstCounter() {
    counters.counterFirst++;
  }

  console.log("isReactive:", isReactive(counters));

  // toRefs
  const { counterFirst } = toRefs(counters);

  // watch
  // watch(counter, (newCounterValue, oldCounterValue) => {
  //   console.log("newCounterValue", newCounterValue);
  //   console.log("oldCounterValue", oldCounterValue);
  // });

  watch([counter, counterFirst], (newCounterValue, oldCounterValue) => {
    console.log("newCounterValue", newCounterValue);
    console.log("oldCounterValue", oldCounterValue);
  });

  const twiceTheCounter = computed(() => counter.value * 2);

  return {
    counter,
    counters,
    incrementCounter,
    incrementFirstCounter,
    counterFirst,
    twiceTheCounter
  };
}
