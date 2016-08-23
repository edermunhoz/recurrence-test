<template>
  <div data-ls-module="dropdown" class="ls-dropdown ls-user-account">
    <a href="#" class="ls-ico-user">
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
</template>
