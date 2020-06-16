<template>
  <b-container id="Content">
    <b-row >
      <b-col sm="2" lg="4">
        <ul>
          <li>
            <span class="fab fa-node-js"></span>
            <span>JavaScript</span>
          </li>

          <li>
            <span class="fab fa-vuejs"></span>
            <span>VueJs</span>
          </li>
          <li>
            <span class="fab fa-react"></span>
            <span>ReactJs</span>
          </li>
          <li>
            <span class="fab fa-sass"></span>
            <span>Sass</span>
          </li>
        </ul>
      </b-col>
      <b-col sm="4" lg="4">
        <ul>
          <li>
            <span class="fab fa-python"></span>
            <span>python</span>
          </li>

          <li>
            <span class="fab fa-docker"></span>
            <span>docker</span>
          </li>
          <li>
            <span class="fab fa-python"></span>
            <span>Django</span>
          </li>
          <li>
            <span class="fab fa-wordpress"></span>
            <span>Wordpress</span>
          </li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Carousel",
};
</script>
<style lang="scss" scoped>
@import "../styles/global.scss";

ul li {
  list-style: none;
  border-top: 1.5px solid $redColor;
  border-bottom: 1px solid $redColor;
  margin: -1px 1;
  transition: 0.5s;
  padding: 5px 0px;
  color:$blueColor;
  text-align: left;
}
.fas, .fab  {
  color: $redColor;

  border: 1px solid $redColor;
  justify-content: left;
  font-size: 1.5em;
  margin-right: 10%;
  padding: 1em;
}
</style>
