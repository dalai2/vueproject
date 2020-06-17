<template>
  <div id="app">
<<<<<<< HEAD
    <b-navbar toggleable="lg" sticky id="nav">
      <router-link :to="`/${$i18n.locale}/`">Home</router-link> |
=======
    <b-navbar sticky id="nav">
      <router-link :to="`/${$i18n.locale}/`">Home</router-link> |
      <router-link :to="`/${$i18n.locale}/about`">About</router-link>
>>>>>>> development
      <LangSwitch/>
    </b-navbar>
    <router-view/>
  </div>
</template>
<script>
import LangSwitch from './components/LangSwitch'
export default {
  components: { LangSwitch }
}
</script>
<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
<<<<<<< HEAD
  padding: 10px;
=======
  padding: 30px;
>>>>>>> development
  background-color: #080808;
  position: sticky;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #ece8e1;
    }
  }
}
body{
  overflow-x: hidden;
}
</style>
