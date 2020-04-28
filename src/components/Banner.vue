<template>
  <b-container fluid class="header">
      <b-row class="marg">
          <b-col id="me">
              <h3>Fullstack Developer</h3>
      <h1 id="title">Dalai Aguirre</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga quos voluptatem minus ipsam at itaque ullam eligendi provident dolorum, omnis illum quia magni fugiat earum nisi molestias! Sunt, sed omnis!</p>      
          </b-col>
        </b-row>
 
  </b-container>
</template>

<script>
export default {
    name: "Banner",
}
</script>

<style scoped>

#me{
    border-left:1px solid white;
    border-right:1px solid white;
    height: 85vh;
    padding: 0px;
    background-color: rgba(51, 51, 51, .3);
    padding-top: 10vh;
    margin-left: 20vw;
    margin-right: 2.5rem;
}
h3, p  {
    color: whitesmoke;
    z-index: 1;
}

.marg{
    margin-left: calc(100% - 52.5rem);
    text-align:left;
    
}
 .header {
     background: url('../assets/trial.jpg');
     background-position: center;
     padding-left: 7.3%;
padding-right: 7.3%;
height: 85vh;
      }

 #title{
     padding: 0px;
     font-size: 120px;
    color:white;
    margin-left: 0px;
    text-align: left;
 }
  
</style>