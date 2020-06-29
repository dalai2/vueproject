<template>
  <b-container class="cont">
<form class="form-group" name="contact" netlify>
  <p>
    <label>{{ $t('contact.name') }}<input class="inputs" type="text" name="name" /></label>
  </p>
  <p>
    <label>{{ $t('contact.email') }}<input class="inputs" type="email" name="email" /></label>
  </p>
    <p>
    <label>{{ $t('contact.message') }}<input class="inputs" type="text" name="message" /></label>
  </p>
  <p>
    <button class="btn" type="submit">{{ $t('contact.send') }}</button>
  </p>
</form>
  </b-container>
</template>

<script scoped>
  export default {
    components:'Form'
  }
</script>
<style lang="scss" scoped>
@import "../styles/global.scss";

.inputs{
  width: 70vw;
  padding: 10px;
  margin:0 auto;
  display: block;
}
.form-group{
  color:#fff;
}
 .bord{
    border: 1px solid $lightColor;
    padding:5px;
    margin: 0 10px 0 0;
    display: inline-block;
    margin-top: 25px;
}
.btn {
  padding: 10px 30px;
  position: relative;
  color: $lightColor;
  background-color: $redColor;
  position: relative;
  
  overflow: hidden;
  cursor: pointer;
  
  text-transform: uppercase;
  font-family: monospace;
  letter-spacing: -1px;
  
  
  .btn__text-dynamic,
  .btn__text-dynamic-inner {    
    display: flex;
    justify-content: center;
    align-items: center;
    
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: 2;
    
    transition: all ease 0.5s;
  }
  
  .btn__text-dynamic {
    background-color: $redColor;
    color: $lightColor;
    overflow: hidden;
  }
  
  &:hover {
    .btn__text-dynamic {
      transform: translateX(-100%);
    }
    .btn__text-dynamic-inner {
      transform: translateX(100%);
    }
  }
}

.btn--animation-from-right {
    &:hover {
    .btn__text-dynamic {
      transform: translateX(100%);
    }
    .btn__text-dynamic-inner {
      transform: translateX(-100%);
    }
  }
}
</style>