<template>
<b-container  class="Navi">
      <div>
  <b-nav vertical class="w-25">
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Another Link</b-nav-item>
  </b-nav>
</div>
   
</b-container>
</template>

<script>
export default {
    name:'Navi'
}
</script>

<style scoped>

.Navi{
    background: transparent;
    height: 10vh;
    position: fixed;
    z-index: 3;
    border:#333 1px solid;
    margin-left: 2%;
        padding-left: 0px;
    width: 5%;

}
.Navi > div:nth-child(1){
    
    margin-top: 40vh;
margin-bottom: 40vh;
   
}




</style>