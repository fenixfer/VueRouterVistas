<template>
  <div class="about">
    <!-- Reutilizamos el código del componente Titulo.vue
    y mandamos por props -->
    <Titulo texto='Página sobre nosotros' />
  </div>
</template>

<script>
import Titulo from '../components/Titulo.vue'
export default {
  components: {
    Titulo
  }
}
</script>

<style>

</style>
