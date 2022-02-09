<template>
  <div>
    <div>
      <ul class="quizbox">
        <li v-for="(quiz, index) in userQuiz" :key="index">
          <h4>{{ quiz[counter].question }}</h4>
          {{ counter }}<br />
          <div>
            <ul class="answerbox">
              <li v-for="(answer, index) in quiz[counter].answers" :key="index">
                <button
                  @click="
                    counter++;
                    checkAnswer(answer);
                  "
                  class="button"
                >
                  {{ answer.answer }}
                </button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    counter: 0,
    score: 0,
  }),
  //todo fix state so it does not push multible quizes
  // TODO https://stackoverflow.com/questions/60589393/how-can-i-get-the-length-of-a-computed-array-in-vue-js 
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
      }
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