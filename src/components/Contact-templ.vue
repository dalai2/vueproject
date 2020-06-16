<template>
<b-container fluid id="Content" >
  <hr>
<h2>Contact me</h2>
  <Form />
</b-container>
</template>

<script>
import Form from './Form'
export default {
    name: "Contact",
    components: { 
      Form,
      }
}
</script>

<style lang="scss" scoped>
@import "../styles/global.scss";
#Content {
  background-color: $blueColor;
  min-height: 100%; 
  align-items: center;
  position: relative;
  padding:30px 30px;
}
h2{
  color:$lightColor;
  font-family: $fontStack;
  @include shadow_title;
  text-align: center;
  
}
hr{
  background-color: $lightColor;
  width: 90%;
  justify-content: center;
}
#shadow{
  @include blue_title;
  text-align: left;
  line-height:0%;
}
</style>