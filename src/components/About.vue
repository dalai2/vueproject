<template>
<b-container fluid>
    <div class="top"></div>
    <b-container>
<div id="Content">
<h2 id="shadowHeader"> {{  $t('about.title')  }}</h2> 
<p>{{  $t('about.content')  }}</p> 
</div>
</b-container>
<div class="bot"></div>
</b-container>
</template>

<script>
export default {
    name: 'About',
}
</script>

<style lang='scss' scoped>
@import "../styles/global.scss";
#shadowHeader{
    @include shadow_title;
}

p {
   font-family: Arial, Georgia, sans-serif;
   text-align: left;
   display: block;
   font-size: large;
   padding-left: 2.5vw;
   color:#768079;
}
.top{

  background-image:url("/squirrel.jpg") ;
  height: 25vh;
  width: 100vw;
  z-index: -1;
  background-position: top center;
  background-attachment: fixed;
  background-size: cover;
  margin-top: 25px;
}
.bot{
  background-image:url("/squirrel.jpg") ;
  height: 25vh;
  width: 100vw;
  z-index: -1;
  background-position: bottom center;
  background-attachment: fixed;
  background-size: cover;
}
</style>