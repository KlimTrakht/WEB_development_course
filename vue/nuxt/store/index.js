export const state = () => ({
  pageTitle: ''
})

export const getters = {
  getPageTitle(state) {
    return state.pageTitle
  }
}

export const mutations = {
  setPageTitle(state, title) {
    state.pageTitle = title
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    console.log('nuxtServerInit')
    // if (req.session.user) {
    //   commit('user', req.session.user)
    // }
  }
}
