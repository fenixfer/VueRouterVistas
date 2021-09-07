<template>
  <Titulo texto='Ruta con parámetros'/>
  <!--Truco para ver el index-->
  <!--Ruta con parámetros UTIL -->
  <h2>Parámetro: {{$route.params.id}}</h2>
  <!-- //TODO: Con esta linea de arriba vamos a acceder a cada uno de los artículos -->
  <!--Pintamos el objeto que se le asigno a articulo en el data() ya para visualizar-->
  <!-- Y ya podemos acceder a cualquier propiedad que contenga el objeto-->
  <h3>{{articulo.title}}</h3>
  <p>{{articulo.body}}</p>
</template>

<script>
import Titulo from '../components/Titulo.vue'
export default {
    components: {
        Titulo
    },
    //vdata
    data() {
        return {
            //por qué va a así? porque en la Api nos pinta un objeto
            articulo: {}
        }
    },
    methods: {
        async consumirArticulo(){
            try {
                //no vamos a utilizar comillas normales porque sera dinámico
                //utilizamos comillas invertidas porque pasamos un dato dinámico
                //TODO: EL NÚMERO QUE VA AL FINAL DE LA URL DEVE DE SER DINÁMICO NO ESTATICO
                //TODO: ENTONCES ESE NÚMERO PROVIENE DE {{$route.params.id}}
                //utilizamos el this para acceder
                const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
                //que el objeto espere a la data
                const objeto = await data.json() 
                console.log(objeto)
                //Como ya funciona entonces rellenamos el articulo con el objeto
                this.articulo = objeto
            } catch (error) {
                console.log(error)
            }
        }
    },
    //TODO: Utilizamos el created() para cuando se recargue la app este ahí los datos
    created(){
        this.consumirArticulo()
    }
}
</script>

<style>

</style>