<template>
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
   <NavigationComponent/>
   <TextImageComponent/>
   <FooterComponents/>
</template>

<script>

import FooterComponents from './components/FooterComponents.vue';
import NavigationComponent from './components/NavigationComponent.vue';
import TextImageComponent from './components/TextImageComponent.vue';

export default {
  name: 'App',
  components: {
    NavigationComponent,
    TextImageComponent,
    FooterComponents
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
</style>
