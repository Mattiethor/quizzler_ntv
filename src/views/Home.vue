<template>
  <div>
    <!-- username intput row start -->
    <div class="container">
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
          <form>
            <div class="user-name-input">
              <label for="userNameInput" class="form-label">
                <strong> Enter Username</strong></label
              >
              <input
                v-model="userName"
                type="text"
                class="form-control shadow"
                id="userNameInput"
                placeholder="Username"
              />

              <br />
              <!-- TODO add effects to button -->
              <div v-if="userName">
                <router-link to="/mainmenu"
                  ><button @click="setUsername(userName)" class="start-button">
                    START
                  </button></router-link
                >
              </div>
            </div>
          </form>
        </div>
        <div class="col-4"></div>
      </div>
      <!-- username intput row end -->
    </div>
    <!-- footer start -->
    <!-- TODO fix footer -->
  </div>
</template>

<script>
export default {
  data: () => ({
    userName: undefined,
  }),
  //moves user name to store
  methods: {
    setUsername(name) {
      this.$store.commit("SET_USERNAME", name);
    },
  },
};

//<router-link to="/">Home</router-link>
</script>

<style scoped>
.user-name-input {
  text-align: center;
  margin-top: 300px;
}
.shadow {
  box-shadow: 5px 10px 8px #888888;
}

.start-button {
  margin: 5px;
  border: none;
  padding: 10px;
  height: 50px;
  width: 150px;
  margin: 10px;
  color: white;
  background-color: #17bebb;
  border-radius: 15px;
}

.start-button:hover {
  background-color: #116b6a;
}

.start-button:active {
  background-color: #0b4645;
  box-shadow: grey 1px 2px inset;
  transform: translateY(1px);
}
</style>