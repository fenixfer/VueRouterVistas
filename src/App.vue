<template>
  <div id="nav">
    <!-- router-link son los links o enlaces de las vistas-->
    <!---router link se reenderiza como un ancla <a href="/"></a> -->
    <router-link to="/">Inicio</router-link> |
    <router-link to="/about">Sobre nosotros</router-link> |
    <!--Para pintar nuestra vista en el sitio-->
    <!--La ruta de /blog debe existir en const routes = {} de index.js-->
    <router-link to="/blog">Blog</router-link>
  </div>
  <!--router-view es cuando cambiamos de página se cambia el contenido entonces es
  dinámico por eso se pone-->
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
