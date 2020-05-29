<template>
  <div id="app">
    <Grids/>
  </div>
</template>

<script>

import Grids from './components/ProjectGrid';


export default {
  name: 'app',
  components: {
    Grids,
  }
}
</script>

<style>
*{
  font-family: Georgia, 'Times New Roman', Times, serif;
}
body{
   overflow-x: hidden;
}
</style>
