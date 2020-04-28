<template>
  <b-container fluid id="Content">
    <b-row>
      <b-col>
        <h1 id="developer">Development</h1>
      </b-col>
    </b-row>
  <b-row>
      <b-col id="left">
        <h1>Tech Stack</h1>
      </b-col>
    </b-row>
  <b-row>
      <b-col id="left">
        <p>Lorem ipsum dolor sit amet
           consectetur adipisicing elit. Quis ea officia error soluta corporis
            harum ipsa facilis quasi nihil vel.</p>
      </b-col>
      <b-col>
        <Carousel/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, consequatur!</p>
      </b-col>
    </b-row>
    <p>hola</p>
 </b-container>
</template>

<script>
import Carousel from './Carousel'

export default {
    name:'MainCon',
    components:{
      Carousel
    }
}
</script>

<style scoped>
#Content{
    height: 100vh;
    padding-left: 0%;
    
}
#developer{
  color: #ece8e1;
 text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  font-size: 15vw;
  margin-left: 0%;
  padding-left: 0%;
}
#left{
  margin-left:10vw;
}

</style>