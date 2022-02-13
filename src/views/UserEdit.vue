<template>
  <div>
    <div class="container edit-container">
      <div class="row">
        <!-- old questions -->
        <div class="col-6">
          <ul class="list-group">
            <h2>Old questions</h2>
            <hr />

            <h4>{{ userQuiz[0].title }}</h4>
            <li v-for="(question, index) in userQuiz" :key="index">
              <b>{{ question.question }}</b>
              <div>
                <li
                  class="list-group-item"
                  v-for="(answers, index) in question.answers"
                  :key="index"
                >
                  {{ answers.answer }}
                </li>
              </div>

              <hr />
            </li>

            <router-link to="/create"
              ><div>
                <button class="create-button">Delete Quiz</button>
              </div></router-link
            >
          </ul>
        </div>
        <div class="col-6">
          <div>
            <ul class="list-group">
              <li class="list-item">
                <h2>New question {{ counter }}</h2>
              </li>
            </ul>

            <hr />
            <div class="row">
              <!-- question name box -->
              <div class="col-8">
                <div class="mb-2">
                  <label for="quizName" class="form-label">Quiz Name</label>
                  <input
                    v-model="quizName"
                    type="text"
                    class="form-control"
                    id="quizName"
                    placeholder="Name"
                  />
                </div>
              </div>
            </div>
            <!-- question form box -->
            <div class="row">
              <div class="col-8">
                <div class="mb-3">
                  <label for="userQuestion" class="form-label">Questions</label>
                  <textarea
                    v-model="question"
                    class="form-control"
                    id="userQuestion"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <!-- input for answer one -->
                <div class="row">
                  <div class="col">
                    <input
                      v-model="answerOne"
                      type="text"
                      class="form-control"
                      placeholder="Answer One"
                    />
                    <input type="radio" v-model="answer" value="1" />
                  </div>
                </div>
                <!-- input for answer two -->
                <div>
                  <input
                    v-model="answerTwo"
                    type="text"
                    class="form-control"
                    placeholder="Answer Two"
                  />
                  <input type="radio" v-model="answer" value="2" />
                </div>
                <!-- input for answer three -->
                <div>
                  <input
                    v-model="answerThree"
                    type="text"
                    class="form-control"
                    placeholder="Answer Three"
                  /><input type="radio" v-model="answer" value="3" />
                </div>
                <!-- input for answer four -->
                <div>
                  <input
                    v-model="answerFour"
                    type="text"
                    class="form-control"
                    placeholder="Answer Four"
                  /><input type="radio" v-model="answer" value="4" />
                </div>

                <!-- TODO add method to mark right answer -->
                <p>Tick the right answer</p>
              </div>
              <div class="row">
                <ul>
                  <li>
                    <button
                      v-if="
                        question &&
                        quizName &&
                        answerOne &&
                        answerTwo &&
                        answerThree &&
                        answerFour
                      "
                      @click="addToList"
                      class="button"
                    >
                      ADD
                    </button>
                  </li>
                  <li>
                    <router-link to="/create"
                      ><div
                        @click="setQuestions(userQuestions)"
                        v-if="counter > 1"
                      >
                        <button class="button">SAVE</button>
                      </div></router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- add delete button -->
  <!-- set up quesitons -->
</template>
  computed: {
    userQuiz() {
      return this.$store.getters.getCurrentUserQuiz;
    },
  },

<script>
export default {
  computed: {
    userQuiz() {
      return this.$store.getters.getCurrentUserQuiz;
    },
  },
  data: () => ({
    quizName: undefined,
    question: undefined,
    answerOne: undefined,
    answerTwo: undefined,
    answerThree: undefined,
    answerFour: undefined,
    userQuestions: [],
    counter: 1,
    answer: 0,
  }),

  methods: {
    setQuestions(quiestionList) {
      this.$store.commit("SET_QUESTIONS", quiestionList);
    },

    //todo check if you can fix title
    addToList() {
      this.userQuestions.push({
        id: this.counter,
        title: this.quizName,
        question: this.question,
        answers: [
          { answer: this.answerOne, correct: this.answer == 1 },
          { answer: this.answerTwo, correct: this.answer == 2 },
          { answer: this.answerThree, correct: this.answer == 3 },
          { answer: this.answerFour, correct: this.answer == 4 },
        ],
      });
      this.counter++;
      this.question = undefined;
      this.question = undefined;
      this.answerOne = undefined;
      this.answerTwo = undefined;
      this.answerThree = undefined;
      this.answerFour = undefined;
    },
  },
};
</script>

<style>
.edit-container {
  margin-top: 20px;
}
</style>