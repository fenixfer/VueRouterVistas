<template>
    <!--Pasasamos por props texto a Titulo.vue (componente)-->
  <Titulo texto='El blog de Fer'/>
  <h2>Consulta algunos artículos</h2>
  <!--LLAMAMOS AL MÉTODO consumirAPI() creado aquí -->
  <!--ESTE SE OCUPA PERO COMO YA CONSUMIMOS LA API LO QUITAMOS
  <button @click="consumirApi">Consumir API</button>-->
  <!--Utilizamos el v-for (vfor) como la API contiene el id entonces aqui el
  :key llama igual id entonces ya no lo ponemos como con el item.title -->
  <div v-for="item in arrayBlog" :key="item.id">
      <!--//TODO: Convertimos los títulos en enlaces con router-link para esto debemos drabajar con router -->
      <!--Como va a hacer dinámico ponemos los dos puntos(:) PERO ESTE LO CAMBIAMOS POR ${item.id} QUE SE DECLARO EN LA KEY y la URL delcarada en index.js-->
      <!--Utilizamos las comillas invertidas para combinarlo con javascript `` -->
      <router-link :to='`/blog/${item.id}/articulo`'>
          <!--Si no quisieramos los enlaces lo sacamos y se pintara snecillo-->
          {{ item.title }}
      </router-link>
  </div>
</template>

<script>
//TODO: Importamos el pedacito de código que es el componente TITULO.vue
import Titulo from '../components/Titulo.vue'
export default {
    components: {
        Titulo
    },
    data() {
        return {
            //para la api el json
            arrayBlog: [] 
        }
    },
    methods: {
        //viene de un servidor externo entonces ocupamos async y await
        async consumirApi(){
            try {
                //traemor la el json de la página Placeholder
                //No necesita ninguna una api kay o un permiso porque solo hacemos pruebas
                const data = await fetch('https://jsonplaceholder.typicode.com/posts')
                const array = await data.json()
                console.log(array)
                //Procedemos a pintar el arreglo entonces el arrayBlog declarado vacio lo llenamos con el array traido del servidor
                //Los datos con esta linea se los manda a arrayBlog
                this.arrayBlog = array;
            } catch (error) {
                console.log(error)
            }
        }
    },
    //CICLO DE VIDA DE VUE created()
    created(){
        //como ya tenemos el método solo lo llamamos con this
        //con este script se ejecuta toda la vista pero sin el script de ver la Api (titulos...)
        this.consumirApi()
        //created() llama al método de consumirApi cuando se ejecuta
        //En el ciclo de vida ya la página o app ya a cargado las vistas métodos etc... es como si se quedara en cache
    }
}
</script>

<style scoped>
/* Utilizo scoped para darle el estilo solo aqui en blog */
    h1  {
        color: green
    }
</style>