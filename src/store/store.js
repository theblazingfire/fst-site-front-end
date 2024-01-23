import { createStore } from "vuex";

let store = createStore({
  state() {
    return {
      pageAtTop: "true",
    };
  },
  mutations: {
    changePageAtTop(state, payload) {
      state.pageAtTop = payload;
    },
  },
});

export default store;
