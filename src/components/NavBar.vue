<template>
  <div class="ls-topbar">
    <!-- Barra de Notificações -->
    <div class="ls-notification-topbar">
      <!-- Dropdown com detalhes da conta de usuário -->
      <div data-ls-module="dropdown" class="ls-dropdown ls-user-account">
        <a href="#" class="ls-ico-user">
        <img src="#" alt="">
        <span class="ls-name">{{user}}</span>
        ({{username}})
        </a>
        <nav class="ls-dropdown-nav ls-user-menu" aria-hidden="true">
          <ul>
            <li><a href="#" role="option">Meus dados</a></li>
            <li><a href="#" role="option">Faturas</a></li>
            <li><a href="#" role="option">Planos</a></li>
            <li><a href="#" role="option">Sair</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <span class="ls-show-sidebar ls-ico-menu"></span>
    <h1 class="ls-brand-name">
      <a href="home" class="ls-ico-earth">
      <small>{{description}}</small>
      {{admin}}
      </a>
    </h1>
  </div>
</template>
