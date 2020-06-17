<template>
  <b-container fluid class="header">
      <b-row  class="marg">
          <b-col col lg="12" sm="12" id="me">
              <h3> {{  $t('banner')  }}</h3>
      <h1 id="title">Dalai Aguirre</h1>
      <div class="bord">
         <button class="btn btn--animation-from-right">
  <span class="btn__text-static">{{  $t('portfolio')  }}</span>
  <div class="btn__text-dynamic">
    <span class="btn__text-dynamic-inner">{{  $t('portfolio')  }}</span>
    </div>
    </button>
  </div>

          </b-col>
        </b-row>
  </b-container>
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
}


 .header {
 background: $blueColor;
background: linear-gradient(40deg, $blueColor 73%, $redColor 73%); 
     background-position: top center;
       background-size: cover;
       position: relative;
     padding-left: 7.3%;
padding-right: 7.3%;
height: 90vh;
padding-top: 10%;
padding-bottom: 10%;
      }
.header:before {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    border-top: 80px solid $blueColor;
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
  font-family: monospace;
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