<template>
<div class="grid">
  <Navi />
  <Banner />
    <MainCon />
 

  <Plans/>
  
  <Portfolio/>
    <Footer/>
      <b-container>
      <b-row>
          <b-col>
              <h2>Hola desde Portfolio</h2>
          </b-col>
      </b-row>
  </b-container>
</div>

</template>

<script>
import Banner from './Banner';
import Footer from './Footer';
import Navi from './Navi';
import MainCon from './MainCon';
import Plans from './Plans';
import Portfolio from './Portfolio';

export default {
    name:'Grids',
    components:{
    Banner,
    Footer,
    Navi,
    MainCon,
    Plans,
    Portfolio,
    }
}
</script>

<style scoped>
*{
background-color: #ece8e1;
}
</style>