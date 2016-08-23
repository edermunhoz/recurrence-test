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
      <form action="/" class="ls-form ls-login-form" accept-charset="UTF-8" method="post" role="form">
        <fieldset>
          <div class="form-group ls-label">
            <b class="ls-label-text ls-hidden-accessible">Usuário</b>
            <input class="form-control ls-login-bg-user ls-field-lg" placeholder="E-mail" type="email" id="email" name="email" required>
          </div>
          <div class="form-group ls-label">
            <b class="ls-label-text ls-hidden-accessible">Senha</b>
            <input class="form-control ls-login-bg-password ls-field-lg" placeholder="Senha" name="password" type="password" value="" required>
          </div>
          <p><a class="ls-login-forgot" href="forgot-password">Esqueci minha senha</a></p>
          <input class="btn btn-lg btn-success btn-block ls-btn-primary ls-btn-block ls-btn-lg" type="submit" value="Login">
        </fieldset>
      </form>
      <br clear="all">
      <p class="ls-txt-center ls-login-signup">Não possui um usuário na Locaweb? <a href="#">Cadastre-se agora</a></p>
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
