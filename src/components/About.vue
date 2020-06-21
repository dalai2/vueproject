<template>
<b-container  >
    <div class="padd">
<h2 id="shadowHeader"> {{  $t('about.title')  }}</h2>
<p>{{ $t('about.p1') }}</p>
<p>{{ $t('about.p2') }}</p> 
<p>{{ $t('about.p3') }}</p>
<p>{{ $t('about.p4') }}</p>
<p>{{ $t('about.p5') }}</p>
<p>{{ $t('about.p6') }}</p>
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
.padd{
    margin-left: 25px;
    padding-left:0px ;
    border-left: 1px solid $blueColor;
    margin-top: 15vh;
}
p {
   font-family: Arial, Georgia, sans-serif;
   text-align: left;
   display: block;
   font-size: large;
   padding: 10px 27.5px ;
   color:$blueColor;
}
</style>