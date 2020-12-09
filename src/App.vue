<template>
  <div id="app">
    <!-- header -->
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" to="/tableau">Tableau</router-link>
            </li>
          </ul>
          <!--form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline my-2 my-sm-0" type="submit">
              Search
            </button>
          </form-->
          <img src="./assets/logo.png" />
        </div>
      </nav>
    </div>
    <!-- current page -->
    <router-view />
    <!-- footer-->
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
