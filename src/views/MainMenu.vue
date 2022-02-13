<template>
  <div id="menu">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="m-2">
            <h4 class="welcome">Welcome {{ userName }}</h4>
            <br />
            <b
              ><p>Last score: {{ highScore }}</p></b
            >

            <br />
            <h5>Please select a option</h5>
          </div>
        </div>
        <!-- Todo add component list of quizzes -->
        <div class="row">
          <!-- option list -->
          <!-- https://api.trivia.willfry.co.uk/questions?categories=general_knowledge&limit=5 -->
          <div>
            <QuizSelect text="General Knowlage" category="general_knowledge" />
          </div>
          <div><QuizSelect text="History" category="history" /></div>
          <div><QuizSelect text="Movies" category="movies" /></div>
          <div>
            <ul>
              <li>
                <router-link to="/create"
                  ><button class="create-button">
                    create a quiz
                  </button></router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuizSelect from "../components/QuizSelect.vue";
export default {
  name: "MainMenu",
  components: {
    QuizSelect,
  },

  data: () => ({
    category: undefined,
  }),

  computed: {
    userName() {
      return this.$store.getters.getUsername;
    },
    highScore() {
      return this.$store.getters.getHighScore;
    },
  },
};
</script>

<style>
#menu {
  text-align: center;
}

.welcome {
  margin-top: 20px;
}
.create-button {
  margin: 5px;
  border: none;
  padding: 10px;
  height: 70px;
  width: 440px;
  margin: 10px;
  color: white;
  background-color: #f9c80e;
  border-radius: 15px;
}

.create-button:hover {
  background-color: #dbae0a;
}

.create-button:active {
  background-color: #a88812;
  box-shadow: grey 1px 2px inset;
  transform: translateY(1px);
}
li {
  list-style: none;
}
</style>
