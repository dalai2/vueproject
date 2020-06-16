<template>
  <b-container fluid>
    <Navi />

    <Banner />
    <b-row>
      <b-col lg="12">
        <MainCon />
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="12">
        <Portfolio />
        
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="12">
        <About />
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="12">
        <Contact />
      </b-col>
    </b-row>
    <Footer />
  </b-container>
</template>

<script>
import Banner from "./Banner";
import Footer from "./Footer";
import Navi from "./Navi";
import MainCon from "./MainCon";
import Portfolio from "./Portfolio";
import Contact from "./Contact-templ";
import About from "./About";
export default {
  name: "Grids",
  components: {
    Banner,
    Footer,
    Navi,
    MainCon,
    Portfolio,
    Contact,
    About,
  },
};
</script>

<style scoped>
* {
  background-color: #ece8e1;
  padding-left: 0%;
  padding-right: 0%;
}

</style>
