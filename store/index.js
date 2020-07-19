import Vuex from 'vuex'

const createUserStore = () => {
  return new Vuex.Store({
    state: {
      user: [],
    },
    mutations: {
      add(state, payload) {
        state.user = payload
      },
    },
  })
}

export default createUserStore
