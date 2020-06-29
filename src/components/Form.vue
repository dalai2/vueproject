<template>
  <b-container class="cont">
<form name="contact-me" class="form-group" method="POST" netlify>
  <p>{{ $t('contact.name') }}</p>
  <input class="inputs" :placeholder="$t('contact.name')" type="text" name="name" />
    <p>{{ $t('contact.email') }}</p>
  <input class="inputs" :placeholder="$t('contact.email')" type="email" name="email" />
    <p>{{ $t('contact.message') }}</p>
  <textarea class="inputs" :placeholder="$t('contact.message')" name="question"></textarea>
      <div class="bord">
<button class="btn btn--animation-from-right" type="submit">
  <span class="btn__text-static"> {{ $t('contact.send') }}</span>
  <div class="btn__text-dynamic">
    <span class="btn__text-dynamic-inner">{{ $t('contact.send') }}</span>
  </div>
</button>
</div>
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
  background-color: $blueColor;
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