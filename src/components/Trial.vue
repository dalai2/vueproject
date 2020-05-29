<template>
<button class="btn btn--animation-from-right">
  <span class="btn__text-static">Cover left</span>
  <div class="btn__text-dynamic">
    <span class="btn__text-dynamic-inner">Cover left</span>
  </div>
</button>
</template>

<script>
export default {
    name: 'Trial'
}
</script>

<style lang='scss' scoped>
.btn {
  padding: 10px 20px;
  position: relative;
  
  border: 2px solid #222;
  color: #fff;
  background-color: #222;
  position: relative;
  
  overflow: hidden;
  cursor: pointer;
  
  text-transform: uppercase;
  font-family: monospace;
  letter-spacing: -1px;
  
  [class^="btn__text"] {
    font-size: 24px;
  }
  
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
    background-color: #fff;
    color: #222;
    
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