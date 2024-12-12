<template>
  <link href="https://fonts.googleapis.com/css2?family=Anybody:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
  <img alt="Vue logo" src="./assets/Daco_4176864.png">
  <usersData/>
</template>

<script>
import usersData from './components/usersData.vue'

export default {
  name: 'App',
  components: {
    usersData
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
</style>
