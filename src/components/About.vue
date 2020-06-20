<template>
<b-container  >
    <div class="padd">
<h2 id="shadowHeader"> {{  $t('about.title')  }}</h2>
<p>Soy Dalai Aguirre, tengo 25 años y me especializo en desarrollo web.</p>
<p>Estudié el bootcamp de Fullstack/Python en BEDU en el que aprendí el manejo de frameworks para desarrollo web tales como ReactJ, Django y sus respectivos lenguajes de programación: JavaScript y Python.</p> 
<p>He trabajado como asistente de profesor del curso“Análisis de datos” en BEDU, en el que colaboré en la preparación de material, clases y trabajos prácticos de la asignatura; me encargué de auxiliar a los estudiantes con diversos problemas técnicos de ejecución, tales como: añadir variables de entorno en Windows, el manejo de la terminal junto con git y github. Conexiones a bases de datos de MySql y Mongodb. </p>
<p>Durante el curso apoyé en la enseñanza del uso del lenguaje estadístico R, junto con su IDE Rstudio para la transformación y representación de datos, cargándolos en diferentes formatos, como JSON o CSV, para finalizar con la manipulación de datos con Python  y sus diversos paquetes enfocados al análisis de datos con el uso de JupyterNotebooks.</p>
<p>Como desarrollador web también he realizado trabajos independientes para pequeñas empresas como Evan ( Ecommerce) Místicos y Terrenales (Blog de política).</p>
<p>Actualmente me encuentro en búsqueda de nuevas oportunidades que me permitan generar soluciones, poniendo en práctica mis conocimientos adquiridos en un ambiente profesional de desarrollo.</p>
</div>
</b-container>
</template>

<script>
export default {
    name: 'About',
}
</script>

<style lang='scss' scoped>
@import "../styles/global.scss";
#shadowHeader{
    @include shadow_title;
}
.padd{
    margin-left: 25px;
    padding-left:0px ;
    border-left: 1px solid $blueColor;
}
p {
   font-family: Arial, Georgia, sans-serif;
   text-align: left;
   display: block;
   font-size: large;
   padding: 10px 27.5px ;
   color:$blueColor;
}
</style>