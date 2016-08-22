<template>
  <div class="row">
    <div class="col-md-4 col-md-offset-4">
      <img class="logo" src="./../assets/logo.png">
      <div class="hello">
        <h1>{{ msg }}</h1>
      </div>
      <p>
        Welcome to your Vue.js app!
      </p>
      <form action="/" accept-charset="UTF-8" method="post" role="form">
        <fieldset>
          <div class="form-group">
            <input class="form-control" placeholder="E-mail" type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
            <input class="form-control" placeholder="Senha" name="password" type="password" value="" required>
          </div>
          <div class="checkbox">
            <label>
              <input name="remember" type="checkbox" value="Lembrar-me"> Lembrar-me
            </label>
          </div>
          <input class="btn btn-lg btn-success btn-block" type="submit" value="Login">
        </fieldset>
      </form>
      <br clear="all"/>
      <p>
        <a href="#">Esqueci minha senha</a>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Hello World!'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
