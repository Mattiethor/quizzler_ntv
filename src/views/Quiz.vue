<template>
  <div>
    <!-- TODO move to questionlist component -->
    <div class="container">
      <div class="row">
        <!-- TODO move to a component -->
        <div v-if="questions && counter < 11" class="quizbox">
          <ul>
            <li v-for="(quiz, index) in questions" :key="index">
              <h2 v-if="counter > 0">Question: {{ counter }}</h2>
              <h4>{{ quiz.question }}</h4>
              <br />
              <button
                @click="
                  getQuestion(getUrl, getCategory);
                  checkAnswer(quiz.correctAnswer, quiz);
                "
              >
                {{ quiz.correctAnswer }}
              </button>
              <div
                v-for="(answer, index) in quiz.incorrectAnswers"
                :key="index"
              >
                <button
                  @click="
                    getQuestion(getUrl, getCategory);
                    checkAnswer(answer, quiz);
                  "
                  class="button"
                >
                  {{ answer }}
                </button>
              </div>
            </li>
          </ul>
          <button
            v-if="!active"
            @click="getQuestion(getUrl, getCategory)"
            class="quizbox"
          >
            START
          </button>
        </div>
        <div v-if="counter == 11"><Highscore :score="correct" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Highscore from "../components/questions/Highscore.vue";
export default {
  data: () => ({
    active: false,
    questions: [],
    correctAnswer: undefined,
    counter: 0,
    correct: 0,
  }),
  components: {
    Highscore,
  },

  methods: {
    //url, category
    //uses the computed properties to access the store to get the url and the category
    getQuestion(url, category) {
      this.active = true;
      axios.get(`${url}${category}&limit=1`).then((response) => {
        this.questions = response.data;
        console.log(this.questions);
        this.counter++;
      });
    },
    checkAnswer(answer, array) {
      if (answer == array.correctAnswer) {
        this.correct++;
        console.log(this.correct);
      }
    },
  },
  computed: {
    getCategory() {
      return this.$store.getters.getCategory;
    },
    getUrl() {
      return this.$store.getters.getUrl;
    },
  },
};
</script>

<style scoped>
.quizbox {
  text-align: center;
}
button {
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

button:hover {
  background-color: #116b6a;
}

button:active {
  background-color: #0b4645;
  box-shadow: grey 1px 2px inset;
  transform: translateY(1px);
}

li {
  list-style: none;
}
</style>