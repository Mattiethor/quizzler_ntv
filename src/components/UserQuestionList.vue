<template>
  <div>
    <!-- TODO: fix col. -->
    <div class="row">
      <div class="col-4"></div>
      <div class="col-6">
        <div class="user-question-select">
          <ul>
            <li v-for="(question, index) in UserQuestionsList" :key="index">
              <router-link to="/userquiz">
                <button @click="setCurrentQuiz(question)">
                  {{ question[0].title }}
                </button></router-link
              >
              <button class="edit-button">EDIT</button>
              <br />

              <!-- TODO add state for currenct questions -->
              <!-- user index to get the right question without getting the true or false -->
              <!--<div v-for="(answers, index) in question.answers" :key="index">{{answers[index]}}</div>  -->
            </li>
            <!-- use this to create a button as a routerlink. TODO-fix other buttons -->
            <router-link to="/admin" tag="button" class="create-button"
              >Create</router-link
            >
          </ul>
        </div>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserQuestionList",

  computed: {
    UserQuestionsList() {
      return this.$store.getters.getUserQuestions;
    },
  },
  methods: {
    setCurrentQuiz(list) {
      this.$store.commit("SET_CURRENT_QUIZ", list);
    },
  },
};
</script>

<style scoped>
.user-question-select {
  padding: 50px;
  margin-top: 60px;
  margin-bottom: 60px;
}
li {
  list-style: none;
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

.edit-button {
  border: none;
  padding: 10px;
  height: 70px;
  width: 100px;
  margin: 10px;
  color: white;
  background-color: #17bebb;
  border-radius: 15px;
}

.edit-button:hover {
  background-color: #116b6a;
}

.edit-button:active {
  background-color: #0b4645;
  box-shadow: grey 1px 2px inset;
  transform: translateY(1px);
}
.create-button {
  border: none;
  padding: 10px;
  height: 70px;
  width: 100px;
  margin: 10px;
  color: white;
  background-color: #f9c80e;
  border-radius: 15px;
}

.create-button:hover {
  background-color: #d3ae26;
}

.create-button:active {
  background-color: #b18e10;
  box-shadow: grey 1px 2px inset;
  transform: translateY(1px);
}
</style>