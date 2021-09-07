<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- Este lo reemplazamos por componentes
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- Reutilizamos el código del componente Titulo.vue
    y mandamos por props -->
    <Titulo texto='Bienvenidos a mi página de inicio'/>

  </div>
</template>

<script>
// @ is an alias to /src
// Este se reemplaza import HelloWorld from '@/components/HelloWorld.vue'
import Titulo from '../components/Titulo.vue'

export default {
  name: 'Home',
  components: {
    //HelloWorld
    Titulo
  }
}
</script>
