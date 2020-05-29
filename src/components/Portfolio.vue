<template>
  <b-container fluid id="Content">
<b-row>
    <b-col lg="12">
        <h2> Front End </h2>
    </b-col>
</b-row>
<b-row>
    <b-col class="mrgin" lg='4'>
        <h2>{{ projecta.name }} </h2>
        <b-img class="henlo" fluid src="../assets/trial.jpg" />
    </b-col>
        <b-col class="mrgin" lg='4'>
        <h2>{{ projectb.name }} </h2>
        <b-img fluid src="../assets/trial.jpg" />
    </b-col>
        <b-col class="mrgin" lg='4'>
        <h2>{{ projecta.name }} </h2>
      <b-img fluid src="../assets/trial.jpg" />
    </b-col>
</b-row>
<b-row>
    <b-col lg="12">
        <h2>Back End </h2>
    </b-col>
</b-row>
<b-row>
    <b-col lg='4'>
        <h2>{{ projecta.name }} </h2>
        <b-img fluid src="../assets/trial.jpg" />
    </b-col>
        <b-col lg='4'>
        <h2>{{ projectb.name }} </h2>
        <b-img fluid src="../assets/trial.jpg" />
    </b-col>
        <b-col lg='4'>
        <h2>{{ projecta.name }} </h2>
      <b-img fluid src="../assets/trial.jpg" />
    </b-col>
</b-row>
<b-row>
    <b-col lg="12">
        <h2> Front End </h2>
    </b-col>
</b-row>
<b-row>
    <b-col lg='4'>
        <h2>{{ projecta.name }} </h2>
        <b-img fluid src="../assets/trial.jpg" />
    </b-col>
        <b-col lg='4'>
        <h2>{{ projectb.name }} </h2>
        <b-img class="henlo" fluid src="../assets/trial.jpg" />
    </b-col>
        <b-col lg='4'>
        <h2>{{ projecta.name }} </h2>
      <b-img fluid src="../assets/trial.jpg" />
    </b-col>
</b-row>
  </b-container>
</template>
<script>
export default {
  name: "Portfolio",
  data() {
    return {
        projecta: {
            name: 'proyecto1',
            language:'python',
            date: '10/2013',
            image: 'banner.jpg',
        },
        projectb: {
           name: 'Topos per capita',
            language:'Rstudio',
            date: '10/2019', 
        },
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/global.scss";
#Content {
  background-color: $blueColor;
  min-height: 100%;
}
h2 {
    color:blanchedalmond;
    text-align: center;
}



</style>
