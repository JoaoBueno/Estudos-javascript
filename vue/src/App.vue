<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <input-email></input-email>
  </div>
</template>

<script>
import Hello from './components/Hello'
import InputEmail from './components/InputEmail'

export default {
  name: 'app',
  components: {
    Hello,
    InputEmail
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
