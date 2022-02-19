<template>
  <div id="app">
    <header class="header"> 
      
    <!-- <div id="nav">
      <router-link to="/login">Login</router-link> |
      <router-link to="/todo">Todo</router-link>
    </div> -->
    <router-view />

    </header>
    <footer class="footer"> 
    </footer> 


  </div>
</template>

<style lang="scss">

@import './assets/styles/_variables.css';
@import './assets/styles/layoutFields.css';

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
// font-family: 'Montserrat', sans-serif;
// font-family: 'Roboto', sans-serif;
body {
    margin: 0px;
    padding: 0px;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#nav {

  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
