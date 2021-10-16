export const state = () => ({
  loading: false
})

export const getters = {
  getLoadingStatus: state => {
    return state.loading
  }
}

export const mutations = {
  setLoadingStatus: (state, status) => {
    state.loading = status
  }
}
