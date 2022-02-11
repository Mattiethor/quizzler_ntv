import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    userName: "User",
    highScore: 0,
    category: undefined,
    url: "https://api.trivia.willfry.co.uk/questions?categories=",
    // test questions
    userQuestions:[],
    selectedUserQuiz: [],
  },

  getters: {
    getUsername(state) {
      return state.userName
    },
    getCategory(state) {
      return state.category
    },
    getUrl(state) {
      return state.url
    },
    getHighScore(state){
      return state.highScore
    },
    getUserQuestions(state){
      return state.userQuestions
    },
    getCurrentUserQuiz(state){
      return state.selectedUserQuiz
    }

  },
  mutations: {
    SET_USERNAME(state, payload) {
      state.userName = payload
    },
    SET_CATEGORY(state, payload) {
      state.category = payload
      console.log("does this work ", payload)
    },
    SET_HIGHSCORE(state, payload){
      state.highScore = payload
      console.log( "highscore",payload)
    },
    SET_QUESTIONS(state, payload){
      state.userQuestions.push(payload)
      console.log(payload)
    },
    SET_CURRENT_QUIZ(state, payload){
      state.selectedUserQuiz = payload
      console.log(payload)
      
    }
  },
  actions: {
    setUsername({ commit }, payload) {
      commit("SET_USERNAME", payload)
    },

    setHighScore({commit}, payload){
      commit("SET_HIGHSCORE", payload)
    },

    getCategory({ commit }, payload) {
      commit("SET_CATEGORY", payload)
      

    },
    setQuestions({commit}, payload){
      commit("SET_QUESTIONS", payload)
      console.log(payload)
    },
    setUserQuiz({commit}, payload){
      commit("SET_CURRENT_QUIZ", payload)
    }
  },
  modules: {
  }
})
