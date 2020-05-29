<template>
  <b-container fluid class="header">
      <b-row  class="marg">
          <b-col col lg="6" sm="6" id="me">
              <h3>Fullstack Developer</h3>
      <h1 id="title">Dalai Aguirre</h1>
      <p>I am Dalai, a front and back end developer with quite a curiosity for data</p>      
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
    background: rgba(15, 25, 35, 0.9);
border: 2px solid #FBFDFF;
box-sizing: border-box;
border-radius: 90px 0px;
    padding-top: 10vh;
    text-align: left;
    
}
h3, p  {
    color: whitesmoke;
    z-index: 1;
}


 .header {
     background: url('../assets/banner.jpg');
     background-position: top center;
       background-size: cover;
       
     padding-left: 7.3%;
padding-right: 7.3%;
height: 120.5vh;
      }

 #title{
     padding: 0px;
     font-size: 120px;
    color:white;
    margin-left: 0px;
    text-align: left;
    text-shadow: 0 0 .12em rgba(0,0,0,.3);
 }
p{
    text-align: left;
    font-family: roboto;
    font-size: 2rem;
}
</style>