<template>
  <b-navbar variant="faded" type="light">
    <b-navbar-brand href="#">
      <Logo />
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-item v-for="menu of menus" :key="menu.id" :href="menu.caminho" right>{{menu.nome}}</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>
<script>
import Logo from './logo'

export default {
  name: 'Menu',
    data(){
        return{
            menus: [{id: 1, caminho: "/", nome: "Home"},{id: 2, caminho: "#sobre", nome: "Sobre"},{id: 3, caminho: "#time", nome: "Time"},{id: 4, caminho: "/", nome: "Serviços"},{id: 5, caminho: "/contatos", nome: "Contatos"}]
        }
    },
 components: {
    Logo
  },
}
</script>
<style scoped>

</style>