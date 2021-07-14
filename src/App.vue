<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
<!--    <router-view/>-->
    <router-view>
      <Admin></Admin>
      <NavMenu></NavMenu>
    </router-view>
  </div>
</template>

<script>
import Admin from './components/view/Admin'
import NavMenu from './components/view/NavMenu'
export default {
  name: 'App',
  components: {NavMenu: NavMenu, Admin: Admin}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
