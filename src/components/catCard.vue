<template>
    <div class="cat">
      <p>{{ cats.name }}</p>
      <p>{{ cats.species }}</p>
      <p>{{ cats.status }}, {{ cats.location }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      cats: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .cat {
    border: 3px solid;
    border-radius: .5rem;
    padding: 1rem;
    margin-bottom: 1rem;
  }
  
  .cat p:first-child {
    font-weight: bold;
    font-size: 2.5rem;
    margin: 1rem 0;
  }
  
  .cat p:last-child {
    font-style: italic;
    font-size: .8rem;
  }
  </style>