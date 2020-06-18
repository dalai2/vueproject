<template>
  <b-container fluid id="Content">
    <b-row>
      <b-col>
        <h1 id="shadowHeader">Development</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col id="left">
        <h1>{{ $t("stack.title") }}</h1>
        <p>{{ $t("stack.content") }}</p>
        <b-col>
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

        <b-col>
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

</style>
