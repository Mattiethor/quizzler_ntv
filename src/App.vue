<template>
  <div id="app">
    <nav class="navbar navbar-dark my-navbar">
      <div class="container-fluid">
        <router-link to="/mainmenu"
          ><a class="navbar-brand">Quizzler</a></router-link
        >
      </div>
    </nav>
    <!-- navbar end -->
    <router-view />

    <!-- todo fix footer -->
    <!--  <footer class="my-footer mt-auto">
      <div class="container">
        <div class="row"></div>
      </div>
    </footer> -->
  </div>
</template>

<script>
export default {};
</script>

<style>
.my-navbar {
  background-color: #4b0744;
  padding-bottom: 20px;
  min-width: 100%;
}
.my-navbar a {
  font-family: "Rowdies", cursive;
  font-size: 25px;
  margin-left: 50px;
}
body {
  font-family: "Source Sans Pro", sans-serif;
}

a {
  text-decoration: none;
  color: white;

  font-size: 20px;
}

@import url("https://fonts.googleapis.com/css2?family=Rowdies&family=Source+Sans+Pro&display=swap");
</style>
