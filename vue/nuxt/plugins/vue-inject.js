import Vue from 'vue'

Vue.prototype.$myInjectedFunction = string =>
  console.log('The example string is:', string)
