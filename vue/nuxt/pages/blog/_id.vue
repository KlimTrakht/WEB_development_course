<template>
  <v-row>
    <v-col class="text-center">
      <h1>Blog Post</h1>
      <p>Post id: {{ $route.params.id }}</p>
      <nuxt-link to="/">Home</nuxt-link>

      {{ name }}

      <p>
        <button @click="$myInjectedFunction('hello')">Test plugin</button>
      </p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'BlogPostPage',
  layout: 'nobar',
  middleware: 'stats',
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  scrollToTop: true,
  // asyncData({ params, app, error }) {
  //   return app.$axios
  //     .get(`https://swapi.dev/api/people/${params.id}`)
  //     .then(response => {
  //       return { name: response.data.name }
  //     })
  //     .catch(e => {
  //       error({ statusCode: 404, message: 'Post not found' })
  //     })
  // },
  async asyncData({ params, app, error }) {
    const response = await app.$axios.get(
      `https://swapi.dev/api/people/${params.id}`
    )
    return { name: response.data.name }
  },
  data() {
    return {
      name: 'Skywalker'
    }
  },
  head: {
    meta: [
      { charset: 'koi8r' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto'
      }
    ]
  }
}
</script>
