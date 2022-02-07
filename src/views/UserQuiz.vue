<template>
  <div>
      <div>{{userQuiz}}</div>
  </div>
</template>

<script>
export default {
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