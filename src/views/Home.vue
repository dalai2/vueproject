<template>
  <div class="home">
    <ProjectGrid/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectGrid from '@/components/ProjectGrid.vue'

export default {
  name: 'Home',
  components: {
    ProjectGrid
  }
}
</script>
