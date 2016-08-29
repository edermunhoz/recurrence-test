<template>
  <div class="ls-topbar">
    <div class="ls-notification-topbar">
      <div data-ls-module="dropdown" class="ls-dropdown ls-user-account">
        <a href="#" class="ls-ico-user">
        <img src="#" alt="">
        <span class="ls-name">{{$root.user}}</span>
        ({{$root.username}})
        </a>
        <nav class="ls-dropdown-nav ls-user-menu" aria-hidden="true">
          <ul>
            <li><a href="#" role="option">Sair</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <span class="ls-show-sidebar ls-ico-menu"></span>
    <h1 class="ls-brand-name">
      <a href="home" class="ls-ico-earth">
      <small>{{$root.description}}</small>
      {{$root.admin}}
      </a>
    </h1>
  </div>
</template>
