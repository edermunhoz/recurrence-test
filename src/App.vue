<template>
  <header class="ls-topbar">
    <!-- Barra de Notificações -->
    <div class="ls-notification-topbar">
      <!-- Dropdown com detalhes da conta de usuário -->
      <!-- <useraccount></useraccount> -->
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
    <!-- <useraccount></useraccount> -->

    <div class="ls-sidebar-inner">
      <nav class="ls-menu" role="navigation">
        <ul role="menu">
           <li><a href="" class="ls-ico-dashboard" title="Dashboard" role="menuitem">Dashboard</a></li>
           <li><a href="" class="ls-ico-users" title="Clientes" role="menuitem">Clientes</a></li>
           <li><a href="" class="ls-ico-stats" title="Relatórios da revenda" role="menuitem">Relatórios da revenda</a></li>
           <li class="ls-submenu-parent" aria-expanded="false" aria-hidden="true">
            <a href="#" class="ls-ico-cog" title="Configurações" role="menuitem">Configurações</a>
            <ul class="ls-submenu" role="menu">
              <li><a href="" class="ls-submenu-item" role="menuitem">Domínios da Revenda</a></li>
              <li><a href="" class="ls-submenu-item" role="menuitem">E-mail de Remetente</a></li>
              <li><a href="" class="ls-submenu-item" role="menuitem">Aparência</a></li>
              <li><a href="" class="ls-submenu-item" role="menuitem">Atendimento</a></li>
              <li><a href="" class="ls-submenu-item" role="menuitem">Chave de acesso para API</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
    <span class="ls-sidebar-toggle ls-ico-shaft-left"></span>
  </aside>
  <main id="app" class="ls-main">
    <div class="container-fluid">
      <h1 class="ls-title-intro ls-ico-home">Página inicial</h1>
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
      username: 'johnkennedy'
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
