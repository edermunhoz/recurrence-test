<template>
  <main id="app">
    <div class="container">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
import Login from './components/Login'

export default {
  components: {
    Login
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px
}

.jumbotron {
  text-align: left;
}
</style>
