<template>
  <div id="app">
    <router-view class="root-router"/>
  </div>
</template>
<script lang="ts">

import {Component, Vue} from 'vue-property-decorator'

@Component
export default class App extends Vue {
  mounted() {
    console.log('jahahahah')
    // @ts-ignore
    window.parent.postMessage({type: 'ready', body: {}}, '*')
  }
}
</script>

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
