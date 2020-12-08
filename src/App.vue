<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" to="/tableau">Tableau</router-link>
            </li>
          </ul>
        </div>

        <img src="./assets/logo.png" />
      </nav>
      <HelloWorld msg="Bienvenue sur le site d'Annette" />
    </div>
    <router-view />
    <nav class="navbar fixed-bottom navbar-light bg-light">
      <a class="navbar-brand" href="#">Je suis le footer</a>
    </nav>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>
