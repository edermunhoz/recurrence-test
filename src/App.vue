<template>
  <main id="app">
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            <img alt="Brand" height="20" width="20" src="././assets/logo.png">
          </a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li v-link="{ path: '/', activeClass: 'active', exact: true }"><a v-link="{ path: '/' }">Home</a></li>
            <li v-link="{ path: '/about', activeClass: 'active' }"><a v-link="{ path: '/about' }">About</a></li>
            <li v-link="{ path: '/contact', activeClass: 'active' }"><a v-link="{ path: '/contact' }">Contact</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a v-link="{ path: './' }">Static top <span class="sr-only">(current)</span></a></li>
            <li v-link="{ path: '/login', activeClass: 'active' }"><a v-link="{ path: '/login' }">Login</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </main>
</template>
<script>
export default {
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
