<template >
<b-container id="element" fluid>
  <b-container fluid  id="Content">
<b-row><b-col >
    <hr>
  <h1>{{ $t("portfo.title") }}</h1>
  </b-col></b-row>
  </b-container>
  <b-container class="blue-back" fluid>
  <b-container class="blue-back">
  <b-row>
    <b-col  class="bg1" lg='6'  fluid>
  <b-card class="su"
    
    img-src="/Untitled.png"
    img-alt="Card Image"
    :title="$t('proyecto_restaurant.title')"
    :sub-title="$t('proyecto_restaurant.subtitle')"
  >
    <b-card-text >
     {{ $t('proyecto_restaurant.content') }} 
      <br>
      <div class="bord">
    <a href="https://github.com/dalai2/restaurant" target="_blank" rel="noopener noreferrer">     <button class="btn btn--animation-from-right">
  <span class="btn__text-static">github <i class="fab fa-github"></i> </span>
  <div class="btn__text-dynamic">
    <span class="btn__text-dynamic-inner">github <i style="padding-left:5px;" class="fab fa-github"></i> </span>
    </div>
    </button>
    </a>
  </div>
        <div class="bord">
    <a href="https://blissful-wilson-c6fc92.netlify.app/" target="_blank" rel="noopener noreferrer">     <button class="btn btn--animation-from-right">
  <span class="btn__text-static"> {{ $t("portfo.buton") }} </span>
  <div class="btn__text-dynamic">
    <span class="btn__text-dynamic-inner"> {{ $t("portfo.buton") }} </span>
    </div>
    </button>
    </a>
  </div>
    </b-card-text>
  </b-card>
    </b-col>
        <b-col class="bg1" lg='6'  fluid>
  <b-card class="su"
    
    img-src="/vueportfolio.png"
    img-alt="Card Image"
    :title="$t('proyecto_portfolio.title')"
    :sub-title="$t('proyecto_portfolio.subtitle')"
  >
    <b-card-text >
     {{ $t('proyecto_portfolio.content') }} 
      <br>
      <div class="bord">
    <a href="https://github.com/dalai2/vueproject" target="_blank" rel="noopener noreferrer">     <button class="btn btn--animation-from-right">
  <span class="btn__text-static">github<i class="fab fa-github"></i> </span>
  <div class="btn__text-dynamic">
    <span class="btn__text-dynamic-inner">github<i class="fab fa-github"></i></span>
    </div>
    </button>
    </a>
  </div>  
    </b-card-text>
  </b-card>
    </b-col>
    <b-col class="bg1" lg='6'  fluid>
  <b-card class="su"
    
    img-src="/misticos.png"
    img-alt="Card Image"
    :title="$t('proyecto_misticos.title')"
    :sub-title="$t('proyecto_misticos.subtitle')"
  >
    <b-card-text  >
     {{ $t('proyecto_misticos.content') }} 
      <br>

        <div class="bord">
      <a href="https://misticosyterrenales.com/" target="_blank" rel="noopener noreferrer">   <button class="btn btn--animation-from-right">
  <span class="btn__text-static"> {{ $t("portfo.buton") }} </span>
  <div class="btn__text-dynamic">
    <span class="btn__text-dynamic-inner"> {{ $t("portfo.buton") }} </span>
    </div>
    </button>
    </a>
  </div>
    </b-card-text>
  </b-card>
    </b-col>
        <b-col class="bg1" lg='6'  fluid>
  <b-card class="su"
    
    img-src="/evan.png"
    img-alt="Card Image"
    :title="$t('proyecto_evan.title')"
    :sub-title="$t('proyecto_evan.subtitle')"
  >
    <b-card-text >
     {{ $t('proyecto_evan.content') }} 
      <br>

        <div class="bord">
       <a href="https://evan.com.mx/" target="_blank" rel="noopener noreferrer">  <button class="btn btn--animation-from-right">
  <span class="btn__text-static"> {{ $t("portfo.buton") }} </span>
  <div class="btn__text-dynamic">
    <span class="btn__text-dynamic-inner"> {{ $t("portfo.buton") }} </span>
    </div>
    </button>
    </a>
  </div>   
    </b-card-text>
  </b-card>
    </b-col>
  </b-row>

  </b-container>
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
  background-color: $lightColor;

}
.su{
  background-color: $lightColor;
  color: $blueColor;
  border-bottom: 2.5px solid $redColor ;
}
.blue-back{
  background-color: $lightColor;
}
.wrapper{
    padding:100px 30px;
}
#Content {
background: rgb(15,25,35);
background: linear-gradient(355deg, $lightColor 35%, $blueColor 35%);
  min-height: 45vh;
}
.info{
    background:$lightColor;
    color:$blueColor;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
h1 {
    color:$lightColor;
    text-align: center;
}

 .bord{
    border: 1px solid $redColor;
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
