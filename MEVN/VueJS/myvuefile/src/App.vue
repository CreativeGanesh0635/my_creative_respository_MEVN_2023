<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <myvuefile msg="Welcome to Your Vue.js App"/>
  <success msg="Welcome to Your Vue.js App"/>
</template>

<script>
import myvuefile from './components/myvuefile.vue'
import success from './components/success.vue'

export default {
  name: 'App',
  components: {
    myvuefile,
    success
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
