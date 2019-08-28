<template>
  <div id="app">
    <router-view class="root-router"/>
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .root-router {
    position: fixed;
    width: 100%;
    height: 100%;
  }
</style>
