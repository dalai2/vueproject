<template>
<b-container>
<div id="Content">
<h2 id="shadowHeader"> {{  $t('about.title')  }}</h2> 
<p>{{  $t('about.content')  }}</p> 
</div>
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

</style>