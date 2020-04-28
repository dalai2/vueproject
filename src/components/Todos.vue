<template>
 <div >
   <div v-bind:key="todo.id" v-for="todo in todos" >
   <ItemToDo v-bind:todo="todo"
    v-on:del-todo="$emit('del-todo', todo.id)" />
   </div>
 </div>   
</template>

<script>
import ItemToDo from './itemtodo';

export default {
    name: "Todos",
    components: {
ItemToDo
    },
    props: ["todos"]
  }  
</script>
<style scoped>

</style>