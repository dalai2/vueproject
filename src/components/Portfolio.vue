<template>
<b-container fluid>
  <b-container fluid  id="Content">
<b-row><b-col >
    <hr>
  <h1>Recent Work</h1>
  </b-col></b-row>
  </b-container>
  <b-container fluid>
  <b-row>
    <b-col class="bg1" lg='6'  fluid>
  <b-card class="su"
    
    img-src="/Untitled.png"
    img-alt="Card Image"
    text-variant="light"
    title="Image Overlay"
    sub-title="Subtitle"
  >
    <b-card-text >
      Some quick example text to build on the card and make up the bulk of the card's content.
      <br>
      <div class="bord">
    <a href="https://github.com/dalai2" target="_blank">     <button class="btn btn--animation-from-right">
  <span class="btn__text-static">To github <i class="fab fa-github"></i> </span>
  <div class="btn__text-dynamic">
    <span class="btn__text-dynamic-inner">To github <i style="padding-left:5px;" class="fab fa-github"></i> </span>
    </div>
    </button>
    </a>
  </div>
        <div class="bord">
         <button class="btn btn--animation-from-right">
  <span class="btn__text-static">Watch Live</span>
  <div class="btn__text-dynamic">
    <span class="btn__text-dynamic-inner">Watch Live</span>
    </div>
    </button>
  </div>
    </b-card-text>
  </b-card>
    </b-col>
        <b-col class="bg1" lg='6'  fluid>
  <b-card class="su"
    
    img-src="/Untitled.png"
    img-alt="Card Image"
    text-variant="light"
    title="Image Overlay"
    sub-title="Subtitle"
  >
    <b-card-text >
      Some quick example text to build on the card and make up the bulk of the card's content.
      <br>
      <div class="bord">
         <button class="btn btn--animation-from-right">
  <span class="btn__text-static">To github<i class="fab fa-github"></i> </span>
  <div class="btn__text-dynamic">
    <span class="btn__text-dynamic-inner">To github<i class="fab fa-github"></i></span>
    </div>
    </button>
  </div>
        <div class="bord">
         <button class="btn btn--animation-from-right">
  <span class="btn__text-static">{{  $t('portfolio')  }}</span>
  <div class="btn__text-dynamic">
    <span class="btn__text-dynamic-inner">{{  $t('portfolio')  }}</span>
    </div>
    </button>
  </div>   
    </b-card-text>
  </b-card>
    </b-col>

  </b-row>

  </b-container>
  </b-container>
</template>
<script>
export default {
  name: "Portfolio",
  data() {
    return {
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/global.scss";
hr{
  background-color: $blueColor;
  width: 90%;
  justify-content: center;
}
.bg1{
  
  padding:12.5px ;
  background-color: $blueColor;

}
.su{
  background-color: $blueColor;

  border-bottom: 2.5px solid $redColor ;
}
.bg{

  padding:12.5px ;
  background-color: $blueColor;
  &:hover{
    background-color: $redColor;
    z-index: 3;
  }
}
.wrapper{
    padding:100px 30px;
}
#Content {
background: rgb(15,25,35);
background: linear-gradient(355deg, $blueColor 55%, $lightColor 55%);
  min-height: 60vh;
}
.info{
    background:$lightColor;
    color:$blueColor;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
h2 {
    color:blanchedalmond;
    text-align: center;
}

 .bord{
    border: 1px solid $lightColor;
    padding:5px;
    margin: 0 10px 0 0;
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
