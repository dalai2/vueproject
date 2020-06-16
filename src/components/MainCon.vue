<template>
  <b-container fluid id="Content">
    <b-row>
      <b-col>
        <h1 id="shadowHeader">Development</h1>
      </b-col>
    </b-row>
  <b-row>
      <b-col sm="12" id="left">
        <h1> {{ $t('stack.title') }} </h1>
      </b-col>
    </b-row>
  <b-row>
      <b-col id="left">
        <p> {{ $t('stack.content') }} </p>
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
#shadowHeader{
  @include shadow_title;

}
#left{
  margin-left:10vw;
}

</style>