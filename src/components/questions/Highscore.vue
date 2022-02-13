<template>
  <div>
    <div class="row">
      <div v-if="active" class="highscore">
        <h2>{{ score }} out of 10</h2>
        <u
          ><h4>{{ text }}</h4></u
        >
        <router-link to="/mainmenu"
          ><button class="main-menu">Main menu</button></router-link
        >
      </div>
      <div class="button-box">
        <button
          class="start-button"
          v-if="!active"
          @click="
            active = true;
            checkScore();
            setHighScore(score);
          "
        >
          See score
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Highscore",
  props: ["score"],
  data: () => ({
    text: undefined,
    active: false,
  }),

  methods: {
    //todod fix highscore text
    checkScore() {
      if (this.score == 10) {
        this.text = "Perfect!";
      } else if (this.score > 5) {
        this.text = "Good job !";
      } else if (this.score <= 5) {
        this.text = "You can do better !";
      }
    },
    setHighScore(score) {
      this.$store.commit("SET_HIGHSCORE", score);
    },
  },
};
</script>

<style scoped>
.highscore {
  text-align: center;
  margin-top: 200px;
}

.button-box {
  margin-top: 200px;
  text-align: center;
}

.start-button {
  margin: 5px;
  border: none;
  padding: 10px;
  height: 150px;
  width: 300px;
  margin: 10px;
  color: white;
  background-color: #f9c80e;
  border-radius: 15px;
  font-size: 42px;
}

.start-button:hover {
  background-color: #dbae0a;
}

.start-button:active {
  background-color: #a88812;
  box-shadow: grey 1px 2px inset;
  transform: translateY(1px);
}

.main-menu {
  margin: 5px;
  border: none;
  height: 50px;
  width: 200px;
  margin: 10px;
  color: white;
  background-color: #f9c80e;
  border-radius: 15px;
  font-size: 24px;
}

.main-menu:hover {
  background-color: #dbae0a;
}

.main-menu:active {
  background-color: #a88812;
  box-shadow: grey 1px 2px inset;
  transform: translateY(1px);
}
</style>