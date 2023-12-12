<template>
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
   <NavigationComponent/>
   <FooterComponents/>
</template>

<script>

// import FooterComponents from './components/FooterComponents.vue';
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
}
.home, .API, .bonus {
  min-height: 80vh;
}
</style>


<!-- 
<p>
  Au cœur des étendues sauvages de l'Arctique, où le ciel nocturne s'illumine de lumières magiques, réside un artiste de l'objectif, un poète visuel captivant les nuances célestes. Baptisé par les aurores boréales, ce photographe passionné se fond harmonieusement dans la symphonie cosmique, capturant l'éclat fugace de ces lueurs dansantes. Chaque nuit, sous les cieux infinis du Grand Nord, notre photographe intrépide se retire dans des lieux isolés, équipé de son fidèle appareil photo et de sa vision artistique. <br><br> À la tombée de la nuit, lorsque le voile étoilé s'éveille, il scrute l'horizon en quête de signes du spectacle naturel à venir. Armé de patience et d'une compréhension intuitive des mouvements solaires, le photographe anticipe le ballet cosmique qui se prépare. Les aurores boréales, telles des danseuses célestes, commencent à peindre le firmament de nuances éthérées, de verts électriques et de violets envoûtants. La lentille de l'objectif devient sa baguette magique, capturant l'essence même de la magie polaire. 
</p> -->
<!-- https://media.istockphoto.com/id/1087125354/fr/photo/fantastique-aurora-borealis-sur-une-montagne-enneig%C3%A9e-avec-homme-debout.jpg?s=612x612&w=0&k=20&c=E3ms3Yx1MOIeBCWf1gS-f34erKP-tIEG_Y5tOuqCkb8= -->


<!-- Chaque cliché est une poésie visuelle, un instant figé dans le temps où la frontière entre le réel et l'extraordinaire s'efface. La caméra devient le prolongement de l'âme créative du photographe, traduisant les émotions ressenties face à ce spectacle astral. Au fil des saisons, notre artiste explore des terres reculées, des sommets glacés aux vastes toundras, en quête de nouvelles perspectives pour immortaliser les aurores boréales. Il se tient souvent debout pendant des heures, immergé dans la froideur de la nuit arctique, son regard fixé sur le firmament, fusionnant avec l'environnement pour mieux le comprendre. <br><br> Les images qui en résultent transcendent la simple photographie ; ce sont des histoires visuelles qui éveillent l'âme et inspirent un profond respect pour la beauté éphémère de notre planète. Le photographe d'aurore boréale devient ainsi le témoin privilégié d'une danse cosmique millénaire, partageant avec le monde la splendeur insaisissable de ces phénomènes célestes. Son travail, plus qu'une simple collection d'images, devient une célébration de la nature, un hommage à la magie du ciel nocturne qui, à travers ses yeux, devient éternel. -->
<!-- https://media.istockphoto.com/id/1270118182/fr/photo/aurora-borealis-%C3%AEles-senja-norv%C3%A8ge-%C3%A9toiles-nuages-en-mouvement-et-lumi%C3%A8re-du-nord-montagnes.jpg?s=612x612&w=0&k=20&c=fdiVlb9rR9nhSprxtjvUMMlnsCE7M8HbKLJyeZNimeM= -->