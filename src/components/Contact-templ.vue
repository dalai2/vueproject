<template>
  <b-container fluid id="Content">
      <h2>Hola, algun dia sere un formulario de contacto (:!</h2>
      <b-row>
        <b-col lg="12">
<Form />  
        </b-col>
        
      </b-row>
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
  min-height: 100%; display: flex;
  align-items: center;
}
</style>