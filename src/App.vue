<template>
  <header class="ls-topbar">
    <div class="ls-notification-topbar">
      <user-menu></user-menu>
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
    <user-menu></user-menu>
    <div class="ls-sidebar-inner">
      <nav class="ls-menu" role="navigation" v-bind:class="active" v-on:click.prevent>
        <ul role="menu">
           <li><a v-link="{ path: '/' }" class="ls-ico-home" title="Página inicial" role="menuitem" v-on:click="makeActive('Página inicial')">Página inicial</a></li>
           <li><a v-link="{ path: '/plans' }" class="ls-ico-list" title="Cadastrar planos" role="menuitem" v-on:click="makeActive('Cadastrar planos')">Cadastrar planos</a></li>
        </ul>
      </nav>
    </div>
  </aside>
  <main id="app" class="ls-main">
    <div class="container-fluid">
      <h1 class="ls-title-intro ls-ico-home">{{pageTitle}}</h1>
      <table class="ls-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Campanha</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="item in items">{{ item.id }}</td>
          </tr>
        </tbody>
      </table>
      <div v-if="items">
        <div class="ls-list-description">
          <p>List example:</p>
          <ul>
            <li v-for="item in items">
              {{ item.id }}
              <a href="#" class="ls-ico-help" data-trigger="hover" data-ls-module="popover" data-placement="right" data-content="{{ item.descript }}" data-title="{{ item.name }}" data-target="#ls-popover-5"></a>
            </li>
          </ul>
        </div>
      </div>
      <div v-else="items" class="ls-alert-info" role="alert">
        <strong>Atenção:</strong> Nenhuma item encontrado.
      </div>
      <ol class="ls-breadcrumb">
        <li><a href="#">{{pageTitle}}</a></li>
      </ol>
      <router-view></router-view>
    </div>
  </main>
</template>
<script>
export default {
  data () {
    return {
      admin: 'Empresa Teste',
      description: 'Descrição ou outro nome',
      user: 'João Denersu',
      username: 'johndenersu',
      email: 'empresateste@tray.net.br',
      tel: '(14) 3665-2541',
      url_access: 'urlcustom',
      pageTitle: 'Página inicial',
      items: null
    }
  },
  ready () {
    this.$http.get('http://localhost:3000/beers').then((response) => {
      console.log('API: Success!')
      console.log(response.data)
      this.items = response.data
    }, (response) => {
      console.log('error')
    })
  },
  methods: {
    makeActive: function (item) {
      this.pageTitle = item
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

  .v-transition {
    transition: opacity .1s ease-out;
  }
  .v-enter, .v-leave {
    opacity: 0;
  }
  .ls-breadcrumb {
    margin-bottom: 20px;
  }
</style>
