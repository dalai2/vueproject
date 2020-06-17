<template>
<b-container  class="Navi">
      <div>
  <b-nav vertical class="w-25">
      <LangSwitch />
  </b-nav>
</div>
   
</b-container>
</template>

<script>
import LangSwitch from './LangSwitch'
export default {
    name:'Navi',
    components: { LangSwitch }
}
</script>

<style scoped>

.Navi{
    display: flex;
    background: transparent;
    height: 10vh;
    position: fixed;
    z-index: 3;
    border:#333 1px solid;
        padding-left: 0px;
    width: 5%;
         background-position: bottom right;
       background-size: cover;


}





</style>