<template>
  <div id="app">
    <b-navbar toggleable="lg" sticky id="nav">
      <router-link  :to="`/${$i18n.locale}/`" v-scroll-to="{
     el: '#app',
     duration: 1000,
     easing: 'ease-out',
     offset: -100,
 }">{{$t('home')}}</router-link> |
      <LangSwitch/>
    </b-navbar>
    <router-view/>
  </div>
</template>
<script>
import LangSwitch from './components/LangSwitch'
export default {
  components: { LangSwitch },
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
  padding: 10px;
  background-color: #ece8e1;
  position: sticky;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #182939;
    }
  }
}
body{
  overflow-x: hidden;
}
</style>
