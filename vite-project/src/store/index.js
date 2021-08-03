import { createStore } from 'vuex'


const store = createStore({
  state: {
    hoge: 'Hog'
  },
  mutations: {
    changeHoge(state, changeText) {
      state.hoge = changeText
    }
  },
  // actions: {},
  // getters: {},
  // modules: {},
})

export default store