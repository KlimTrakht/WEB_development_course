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

export const actions = {}
