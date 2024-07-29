export const state = () => ({
  userAuth: false,
  dialogAuth: false
});

export const actions = {
  increment({ commit }) {
    commit("increment");
  },
};

export const mutations = {
  login(state) {
    state.userAuth = true;
  },
  logout(state) {
    state.userAuth = false;
  },
  dialogAuthOn(state) {
    state.dialogAuth = true;
  },
  dialogAuthOff(state) {
    state.dialogAuth = false;
  },
};

export const getters = {
  userAuth: (state) => state.userAuth,
  dialogAuth: (state) => state.dialogAuth,
};
