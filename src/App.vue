<template>
  <div class="wrapper">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <NavigationComponent/>
    <footer class="footer">
      <FooterComponents/>
    </footer>
  </div>
</template>

<script>
import FooterComponents from './components/FooterComponents.vue';
import NavigationComponent from './components/NavigationComponent.vue';

export default {
  name: 'App',
  components: {
    NavigationComponent,
    FooterComponents
}
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100% ;
}
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
.wrapper {
  min-height: 100%;
  position: relative;
  padding-bottom: 10rem;
}
.footer {
  position: absolute;
  bottom: 0;
}
</style>