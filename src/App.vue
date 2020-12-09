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
    </div>
    <router-view />
    <nav navbar-expand-lg class="navbar fixed-bottom navbar-dark bg-dark">
      <ul class="navbar-nav mr-auto text-center">
        <li class="nav-item">
           <HelloWorld msg="Bienvenue sur le site d'Annette" />
        </li>
      </ul>
      <a class="navbar-brand" href="mailto:'john.smith@toto.com'"> Nous Contacter</a>
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
