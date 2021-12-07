<template>
  <v-row>
    <v-col class="text-center">
      <h1>About</h1>
      <nuxt-link to="/">Home</nuxt-link>
      <test-slot class="mb-8">
        <p>Устаревший синтаксис с использованием директивы "slot"</p>
        <h2>По дефолту слот без имени</h2>
        <h3 slot="header">Именнованный слот с именем header</h3>
        <h4 slot="subTitle">Именнованный слот с именем subTitle</h4>
      </test-slot>
      <v-divider></v-divider>
      <test-slot-new class="mt-8">
        <template v-slot:default>
          <p>Новый синтаксис с использованием директивы "v-slot"</p>
          <h2>
            По дефолту слот без имени (в template можно указывать двумя
            способами v-slot или v-slot:default)
          </h2>
        </template>
        <template v-slot:header>
          <h3>
            Именнованный слот с именем header (в template указываем
            v-slot:header)
          </h3>
        </template>
        <template #subTitle>
          <h4>
            Именнованный слот с именем subTitle (в template можно использовать
            короткую запись #subTitle = v-slot:subTitle)
          </h4>
        </template>
      </test-slot-new>
    </v-col>
  </v-row>
</template>

<script>
import TestSlot from '@/components/TestSlot.vue'
import TestSlotNew from '../components/TestSlotNew.vue'
export default {
  name: 'AboutPage',
  layout: 'nobar',
  components: {
    TestSlot,
    TestSlotNew,
  },
}
</script>
