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
    userQuestions:[{
      id: 0,
      title: "testquiz",
      question: "This is a test question",
      answers: [
        {0: "Mr. big mac ", correct: true},
        {1: "JFK", correct: false},
        {2: "oreo", correct: false},
        {3: "Big Ben", correct: false},
      ]
    },{
      id: 1,
      title: "testquiz 2",
      question: "This is a test question",
      answers: [
        {0: "Mr. big mac ", correct: true},
        {1: "JFK", correct: false},
        {2: "oreo", correct: false},
        {3: "Big Ben", correct: false},
      ]
    }]
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
  },
  modules: {
  }
})
