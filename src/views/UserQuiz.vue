<template>
  <div>
      <div>
          <ul>
              <li v-for="(quiz,index) in userQuiz[counter]" :key="index">{{quiz.question}} <br>
              <ul>
                  <li v-for="(answer, index) in quiz.answers" :key="index">
                     <button>{{answer.answer}}</button> 
                  </li>
                  </ul>
              
              </li>
              
              
              
              <button @click="counter++">test</button>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    

    data: () => ({
    counter: 0,
  }),
    //todo fix state so it does not push multible quizes 
    computed: {
        userQuiz(){
            return this.$store.getters.getCurrentUserQuiz
        },

    },

}
</script>

<style>

</style>