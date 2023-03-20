<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <demo msg="Welcome to My Page"/>
</template>

<script>
import demo from './components/demo.vue'

export default {
  name: 'App',
  components: {
    demo
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
