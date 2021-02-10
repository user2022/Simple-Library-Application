// https://blog.logrocket.com/how-to-consume-apis-with-vuex-and-axios/

export const state = () => ({
  error: false
});

export const getters = {
  getError(state) {
    return state.error;
  }

}

// Commit mutations
export const actions = {
  showErrorMsg({commit}, er) {
    commit('SET_ERROR', er);
  }
}

export const mutations = {
  SET_ERROR(state, er) {
    state.error = er;
  }

}

