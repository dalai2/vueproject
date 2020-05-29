<template>
  <b-container fluid id="Content">
    <b-row>
      <b-col>
        <h1 id="developer">Development</h1>
      </b-col>
    </b-row>
  <b-row>
      <b-col sm="12" id="left">
        <h1>Tech Stack</h1>
      </b-col>
    </b-row>
  <b-row>
      <b-col id="left">
        <p>Lorem ipsum dolor sit amet
           consectetur adipisicing elit. Quis ea officia error soluta corporis
            harum ipsa facilis quasi nihil vel.</p>
      </b-col>
      <b-col sm="12" lg="8">
        <Carousel/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, consequatur!</p>
      </b-col>
    </b-row>
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

<style lang='scss' scoped> 
@import "../styles/global.scss";
#Content{
    min-height: 100%;
    padding-left: 0%;
    
}
#developer{
  @include Titles;
  color: $lightColor;
 text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  font-size: 15vw;
  margin-left: 0%;
  padding-left: 0%;
  font-family:Tungsten-Bold;
}
#left{
  margin-left:10vw;
}

</style>