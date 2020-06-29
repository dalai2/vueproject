<template>
  <b-container fluid id="Content">
    <b-row>
      <b-col>
        <h1 id="shadowHeader">{{ $t("stack.title0") }}</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="12"  id="left">
        <h1>{{ $t("stack.title") }}</h1>
        <p>{{ $t("stack.content") }}</p>
              </b-col>
    </b-row>
    <b-row>
        <b-col  >
            <b-badge class="badge-lg">
              <span class="fab fa-node-js"></span>
              <span>JavaScript</span>

  </b-badge>
<b-badge class="badge-lg">
              <span class="fab fa-vuejs"></span>
              <span>VueJs</span>
</b-badge>
<b-badge class="badge-lg">
              <span class="fab fa-react"></span>
              <span>ReactJs</span>
</b-badge>
<b-badge class="badge-lg">
              <span class="fab fa-sass"></span>
              <span>Sass</span>
</b-badge>
<b-badge class="badge-lg">
              <span class="fab fa-python"></span>
              <span>python</span>
</b-badge>
<b-badge class="badge-lg">
              <span class="fab fa-docker"></span>
              <span>docker</span>
</b-badge>
<br>
<b-badge class="badge-lg">
              <span class="fab fa-python"></span>
              <span>Django</span>
</b-badge>
<b-badge class="badge-lg">
              <span class="fab fa-wordpress"></span>
              <span>Wordpress</span>
</b-badge>
<b-badge class="badge-lg">
              <span class="fab fa-html5"></span>
              <span>HTML</span>
</b-badge>
<b-badge class="badge-lg">
              <span class="fab fa-css3-alt"></span>
              <span>CSS</span>
</b-badge>
<hr>             
        </b-col>
</b-row>
  </b-container>
</template>

<script>
export default {
  name: "MainCon",
};
</script>

<style lang="scss" scoped>
@import "../styles/global.scss";
#Content {
  min-height: 100%;
  padding-left: 0%;

}
#shadowHeader {
  @include shadow_title;
}
#left p{
  padding: 20px;
}
.badge-lg{
  padding: 10px 20px;
  margin:20px;
 background: rgb(68,68,68);
background: linear-gradient(11deg, rgba(68,68,68,1) 15%, rgba(89,89,89,1) 51%); 
}
.fab{
  font-size: 30px;
  color:$lightColor;
  margin-right: 10px;
}
hr{
  background-color: $blueColor;
  width: 90%;
  
}
</style>
