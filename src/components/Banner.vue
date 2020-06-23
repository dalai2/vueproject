<template>
   <div class="bg">
  <b-container fluid class="header">
      <b-row  class="marg">
          <b-col col lg="12" sm="12" id="me">
              <h3> {{  $t('banner')  }}</h3>
      <h1 id="title">Dalai Aguirre</h1>
      <div class="bord">
 <button class="btn btn--animation-from-right" v-scroll-to="{
     el: '#element',
     duration: 1000,
     easing: 'ease-out',
     offset: -100,
 }">
  <span class="btn__text-static">{{  $t('portfolio')  }}</span>
  <div class="btn__text-dynamic">
    <span class="btn__text-dynamic-inner">{{  $t('portfolio')  }}</span>
    </div>
    </button>
  </div>

          </b-col>
        </b-row>
  
  </b-container>
  </div>
</template>
<script>
export default {
    name: "Banner",
}

</script>

<style lang='scss' scoped>
@import "../styles/global.scss";
*{
    font-family: roboto;
}
#me{
    padding: 0px;
    padding-top: 10vh;
    text-align: center;
    
}
h3, p  {
    color: whitesmoke;
    z-index: 1;
    letter-spacing: 3px;
    text-transform:uppercase ;
}
.bg{
  background-image:url("/abstract.jpg") ;
  height: inherit;
  width: auto;
  z-index: -1;
  background-position: bottom center;
  background-attachment: fixed;
  background-size: cover;
}

 .header {
background: linear-gradient(45deg,rgba(24,41,57, .7) 73%, transparent 73%); 
     background-position: top center;
       background-size: cover;
       position: relative;
     padding-left: 7.3%;
padding-right: 7.3%;
height: 90vh;
padding-top: 10%;
padding-bottom: 10%;
z-index: 1;
      }
.header:before {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    border-top: 80px solid transparent;
    border-left: 80px solid $lightColor;
    width: 0;
}
 #title{
     padding: 0px;
     font-size: 5em;
    color:white;
    margin-left: 0px;
    text-align: center;
    text-shadow: 0 0 .12em rgba(0,0,0,.3);
 }
 .bord{
    border: 1px solid $lightColor;
    padding:5px;
    margin: 0;
    display: inline-block;
    margin-top: 25px;
}
.btn {
  padding: 10px 30px;
  position: relative;
  color: $lightColor;
  background-color: $blueColor;
  position: relative;
  
  overflow: hidden;
  cursor: pointer;
  
  text-transform: uppercase;
  letter-spacing: -1px;
  
  
  .btn__text-dynamic,
  .btn__text-dynamic-inner {    
    display: flex;
    justify-content: center;
    align-items: center;
    
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: 2;
    
    transition: all ease 0.5s;
  }
  
  .btn__text-dynamic {
    background-color: $redColor;
    color: $lightColor;
    overflow: hidden;
  }
  
  &:hover {
    .btn__text-dynamic {
      transform: translateX(-100%);
    }
    .btn__text-dynamic-inner {
      transform: translateX(100%);
    }
  }
}

.btn--animation-from-right {
    &:hover {
    .btn__text-dynamic {
      transform: translateX(100%);
    }
    .btn__text-dynamic-inner {
      transform: translateX(-100%);
    }
  }
}
</style>