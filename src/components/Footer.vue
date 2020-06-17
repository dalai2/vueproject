<template>
  <b-container fluid class="cont" >
    <b-row>
      <b-col>
            <span>Based in Mexico</span>
            <br>
<span>Conctact Me at: <br> aguirredalai6@gmail.com</span>
<br>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
<a class="lin" href=""><i class="fab fa-github"></i></a>
<a class='mid' href=""><i class="fab fa-linkedin-in "></i></a>
<a class="lin" href=""><i class="far fa-envelope-open"></i></a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style lang="scss" scoped>
@import "../styles/global.scss";
.cont {
    background: #080808;
    height: 30vh;
padding: 0;
margin:0%;
justify-content: center;
align-items: center;
display: flex;
}
.mid{
  margin: 0px 20px;
  border-left: 1px solid $lightColor;
  border-right: 1px solid $lightColor;

  padding: 0px 20px;
  &:hover{
  background-color: $blueColor;
  }

}
.lin{
    padding: 0 20px;
  &:hover{
  background-color: $redColor;

  }
}
</style>