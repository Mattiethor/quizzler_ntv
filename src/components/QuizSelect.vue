<template>
  <div>
    <div>
      <!-- TODO see if you can move router=link from button to tag -->
      <ul class="m-1">
        <li>
          <router-link to="/quiz">
            <button @click="setCategory(category)" class="quiz-button">
              {{ text }}
            </button></router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "quizList",
  props: ["category", "text"],

  data: () => ({}),
  methods: {
    setCategory(category) {
      this.$store.commit("SET_CATEGORY", category);
    },
    /*setUsername(name) {
      this.$store.commit("SET_USERNAME", name);*/
  },
};

/*  <li><button class="quiz-button">History</button></li>
        <li><button class="quiz-button">Movies</button></li>
        <li><button class="create-button">Create a quiz</button></li>*/
</script>

<style scoped>
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
</style>