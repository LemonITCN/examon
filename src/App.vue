<template>
  <div id="app">
    <exam-view class="root-router" v-if="examService.getExamonMode() === 'exam'"></exam-view>
    <exam-review class="root-router" v-if="examService.getExamonMode() === 'review'"></exam-review>
    <!--    <router-view class="root-router"/>-->
  </div>
</template>
<script lang="ts">

import {Component, Vue} from 'vue-property-decorator'
import ExamView from '@/views/exam-view/ExamView.vue'
import ExamReview from '@/views/exam-view/ExamReview.vue'
import ExamService from '@/service/ExamService'

@Component({
  components: {ExamReview, ExamView}
})
export default class App extends Vue {
  examService: ExamService = ExamService

  mounted() {
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
    background: red;
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
