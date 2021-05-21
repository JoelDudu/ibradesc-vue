<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light  bg-light">
        <div class="container">
            <a class="navbar-brand" href="/"><img src="./assets/img/logo-nav.png" width="300px" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">HOME</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/quemsomos">QUEM SOMOS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/cursos">CURSOS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/proeduca">PROEDUCA</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/outrosservicos">OUTROS SERVIÇOS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/noticias">NOTÍCIAS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contatos">CONTATO</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
  @import './assets/css/site-style.css';
</style>