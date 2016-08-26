<template>
  <header class="ls-topbar">
    <div class="ls-notification-topbar">
      <div class="ls-topbar">
        <div class="ls-notification-topbar">
          <div data-ls-module="dropdown" class="ls-dropdown ls-user-account">
            <a href="" class="ls-ico-user">
            <img src="#" alt="">
            <span class="ls-name">{{user}}</span>
            ({{username}})
            </a>
            <nav class="ls-dropdown-nav ls-user-menu" aria-hidden="true">
              <ul>
                <li><a v-link="{ path: '/' }" role="option">Meus dados</a></li>
                <li><a v-link="{ path: '/' }" role="option">Faturas</a></li>
                <li><a v-link="{ path: '/' }" role="option">Planos</a></li>
                <li><a v-link="{ path: '/login' }" role="option">Sair</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <span class="ls-show-sidebar ls-ico-menu"></span>
        <h1 class="ls-brand-name">
          <a v-link="{ path: '/' }" class="ls-ico-earth">
          <small>{{description}}</small>
          {{admin}}
          </a>
        </h1>
      </div>
    </div>
    <span class="ls-show-sidebar ls-ico-menu"></span>
    <h1 class="ls-brand-name">
      <a v-link="{ path: '/' }" class="ls-ico-earth">
      <small>{{description}}</small>
      {{admin}}
      </a>
    </h1>
  </header>
<aside class="ls-sidebar">
  <div data-ls-module="dropdown" class="ls-dropdown ls-user-account">
    <a v-link="{ path: '/' }" class="ls-ico-user">
      <img src="#" alt="">
      <span class="ls-name">{{user}}</span>
      ({{username}})
    </a>

    <nav class="ls-dropdown-nav ls-user-menu" aria-hidden="true">
      <ul>
        <li><a v-link="{ path: '/' }" role="option">Meus dados</a></li>
        <li><a v-link="{ path: '/' }" role="option">Faturas</a></li>
        <li><a v-link="{ path: '/' }" role="option">Planos</a></li>
        <li><a v-link="{ path: '/' }" role="option">Sair</a></li>
       </ul>
    </nav>
  </div>

  <div class="ls-sidebar-inner">
    <nav class="ls-menu" role="navigation">
      <ul role="menu">
         <li><a v-link="{ path: '/' }" class="ls-ico-home" title="Home" role="menuitem">Home</a></li>
         <li><a v-link="{ path: '/about' }" class="ls-ico-list" title="Cadastrar planos" role="menuitem">Cadastrar planos</a></li>
      </ul>
    </nav>
  </div>
</aside>
  <main id="app" class="ls-main">
    <div class="container-fluid">
      <h1 class="ls-title-intro ls-ico-home">{{pageTitle}}</h1>
      <router-view transition transition-mode="out-in"></router-view>
    </div>
  </main>
</template>
<script>
export default {
  data () {
    return {
      admin: 'Recurrence',
      description: 'Descrição ou outro nome',
      user: 'João Maneiro',
      username: 'johnkennedy',
      pageTitle: 'Página inicial'
    }
  }
}
</script>

<style>
  #app {
    color: #2c3e50;
    font-family: Source Sans Pro, Helvetica, sans-serif;
  }

  .logo {
    width: 100px;
    height: 100px
  }

  .jumbotron {
    text-align: left;
  }

  .form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  }
  .v-transition {
    transition: opacity .1s ease-out;
  }
  .v-enter, .v-leave {
    opacity: 0;
  }
</style>
