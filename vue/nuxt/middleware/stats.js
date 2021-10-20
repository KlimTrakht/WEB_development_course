export default function(context) {
  // console.log('req', context.req.headers)

  return context.$axios
    .post('http://my-stats-api.com', {
      url: context.route.fullPath
    })
    .then(response => {
      console.log('response', response)
      console.log('context.route.fullPath', context.route.fullPath)
    })
}
