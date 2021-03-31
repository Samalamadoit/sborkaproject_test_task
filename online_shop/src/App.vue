<template>
  <div id="app">
    <p>Hello</p>
    <catalog-wrapper></catalog-wrapper>
  </div>
</template>

<script>
import catalogWrapper from "./components/catalog-wrapper";

export default {
  name: 'App',
  components: {
    catalogWrapper
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
  margin-top: 60px;
}
</style>
