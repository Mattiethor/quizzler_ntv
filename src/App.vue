<template>
  <div id="app">
    <nav class="navbar navbar-dark my-navbar">
      <div class="container-fluid">
        <router-link to="/mainmenu"><span><a class="navbar-brand">Quizzler</a></span></router-link>
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
}
.my-footer {
  background-color: #4b0744;
  position: fixed;
  bottom: 0;
  max-height: 60px;
  min-height: 60px;
  width: 100%;
}
a {
  text-decoration: none;
  color: white;
}
</style>
