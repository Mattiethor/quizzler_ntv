<template>
  <div>
    <div class="container">
      <div class="row">
        <!-- quiz name, qustion and add button -->
        <div class="col-6">
          <div class="row">
            <!-- question name box -->
            <div class="col-8">
              <br />
              <div class="mb-2">
                <label for="quizName" class="form-label"
                  ><h4>Quiz Name</h4>
                </label>
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
          <!-- answers -->
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

             
              <p>Tick the right answer</p>
            </div>
            <div class="row">
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
            </div>
          </div>
        </div>
        <!-- create a question end -->

        <!-- list of added questions -->
        <div class="col-6">
          <div class="row">
            <div class="col-12">
              <br />
              <h4>List of questions</h4>
              <hr />
              <b> {{ quizName }}</b>
              <div>
                <!-- TODO add list of made questions -->
                <ul class="list-group">
                  <li
                    class="list-group-item"
                    v-for="question in userQuestions"
                    :key="question.id"
                  >
                    {{ question.question }}
                  </li>
                  <router-link to="/create"
                    ><div
                      @click="setQuestions(userQuestions)"
                      v-if="counter > 0"
                    >
                      <button class="button">SAVE</button>
                    </div></router-link
                  >
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- page row end -->
    </div>
    <!-- container end -->
  </div>
</template>

<script>
export default {
  data: () => ({
    quizName: undefined,
    question: undefined,
    answerOne: undefined,
    answerTwo: undefined,
    answerThree: undefined,
    answerFour: undefined,
    userQuestions: [],
    counter: 0,
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

<style scoped>
button {
  border: none;
  padding: 10px;
  height: 50px;
  width: 100px;
  margin: 10px;
  color: white;
  background-color: #f9c80e;
  border-radius: 15px;
}

.button:hover {
  background-color: #dbae0a;
}

.button:active {
  background-color: #a88812;
  box-shadow: grey 1px 2px inset;
  transform: translateY(1px);
}

li {
  list-style: none;
}

.float_l {
  float: left;
}
</style>