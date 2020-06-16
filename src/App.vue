<template>
  <div id="app">
    <b-navbar sticky id="nav">
      <router-link :to="`/${$i18n.locale}/`">Home</router-link> |
      <router-link :to="`/${$i18n.locale}/about`">About</router-link>
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
  padding: 30px;
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
