<template>
  <b-container fluid id="Content">
   <b-row>
      <b-col>
        <h1 id="section_Title">Freelance Work</h1>
      </b-col>
    </b-row>
  <b-row>
      <b-col id="left">
        <h1>Tech Stack</h1>
      </b-col>
    </b-row>
  <b-row>
      <b-col id="left">
        <p>Lorem ipsum dolor sit amet
           consectetur adipisicing elit. Quis ea officia error soluta corporis
            harum ipsa facilis quasi nihil vel.</p>
      </b-col>
      <b-col>
       
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, consequatur!</p>
          <div>
    <b-table striped hover :items="items"></b-table>
  </div>
      </b-col>
      
    </b-row>
 
 </b-container>
</template>

<script>


export default {
    name:'Plans',
    components:'Plans',
     data() {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }

}
</script>

<style scoped>
#section_Title{
  color: #ece8e1;
 text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  font-size: 15vw;
  margin-left: 0%;
  padding-left: 0%;
}
#Content{
    height: 100vh;
    padding-left: 0%;
    padding-top: 5vw;
}

#left{
  margin-left:10vw;
}
</style>