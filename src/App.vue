<template>
  <link href="https://fonts.googleapis.com/css2?family=Anybody:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
  <img alt="Vue logo" src="./assets/racoon.png">

  <usersData/>
  <div class="wrapper">
    <div v-for="cat in cats" :key="cat.name">
      <catCard :cats="cat" />
    </div>
  </div>
</template>
  
<script>
import { ref } from 'vue'
import allCats from '@/data/cats'
import usersData from './components/usersData.vue'
import catCard from './components/catCard.vue';

export default {
  name: 'App',
  components: {
    usersData,
    catCard
  },
  setup() {
    const cats = ref(allCats)
    return { cats }
  }
}
// TO-DO
// Study about how the data is handled in the VUE JS
</script>

<style>
#app {
  font-family: "Anybody", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  max-width: 960px;
  margin: 0 auto;
}

p,
h3 {
  grid-column: span 3;
}
img{
  height: 25%;
  width: 15%;
}
</style>
