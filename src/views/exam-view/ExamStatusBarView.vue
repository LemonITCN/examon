<template>
  <div class="exam-status-bar-view-impl">
    <div class="number-area">100 / 100</div>
    <div class="timer-area">
      40:53
    </div>
    <div class="title-type">单选题</div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class ExamStatusBarView extends Vue {
}
</script>

<style scoped>
  .exam-status-bar-view-impl {
    display: flex;
    flex-direction: row;
    padding: 0 3% 0 4%;
    color: #f0f0f0;
    align-items: baseline;
  }

  .number-area {
    width: 80px;
  }

  .timer-area {
    flex-grow: 1;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
  }

  .title-type {
    width: 80px;
    text-align: right;
  }

</style>
