<template>
  <div>
    <div class="row">
      <div class="col"></div>
      <div class="col-5">
        <div v-if="counter < userQuiz.length" class="quizbox">
          <ul>
            <li>
              <h4>{{ userQuiz[counter].question }}</h4>
              <div class="answerbox">
                <li
                  @click="counter++"
                  v-for="(answers, index) in userQuiz[counter].answers"
                  :key="index"
                >
                  <button @click="checkAnswer(answers)" class="button">
                    {{ answers.answer }}
                  </button>
                </li>
              </div>
            </li>
          </ul>
        </div>
        <div v-if="counter + 1 > userQuiz.length" class="quizbox">
          <h1>You scored: {{ score }}</h1>
          <router-link to="/mainmenu"
            ><button class="button" @click="setHighScore(score)">
              Main menu
            </button></router-link
          >
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    score: 0,
    active: false,
    counter: 0,
    lenght: undefined,
  }),

  //make a computed property that gets the lenght of the userQuiz
  computed: {
    userQuiz() {
      return this.$store.getters.getCurrentUserQuiz;
    },
  },
  methods: {
    checkAnswer(answer) {
      if (answer.correct == true) {
        this.score++;
        console.log(this.score);
      } else {
        if (this.score <= 0) {
          this.score = 0;
        }
      }
    },
    setActive() {
      this.active = true;
      console.log(this.active);
    },
    setHighScore(score) {
      this.$store.commit("SET_HIGHSCORE", score);
    },
  },
};
</script>

<style>
.quizbox {
  text-align: center;
  margin-top: 25px;
}
.answerbox {
  text-align: center;
  margin: 10px;
}
.button {
  margin: 5px;
  border: none;
  padding: 10px;
  height: 70px;
  width: 440px;
  margin: 10px;
  color: white;
  background-color: #17bebb;
  border-radius: 15px;
}

.button:hover {
  background-color: #116b6a;
}

.button:active {
  background-color: #0b4645;
  box-shadow: grey 1px 2px inset;
  transform: translateY(1px);
}

li {
  list-style: none;
}
</style>