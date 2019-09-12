<template>
  <div class="exam-status-bar-view-impl">
    <div class="number-area">{{examService.getCurrentQuestionIndex() + 1}} /
      {{examService.getExamInfo().questionList.length}}
    </div>
    <div class="timer-area">
      {{fixZero(Math.floor(examService.getTimerSeconds() / 60))}}:
      {{fixZero(examService.getTimerSeconds() % 60)}}
    </div>
    <div class="title-type">
      {{examService.getCurrentQuestion() !== undefined ? (examService.getCurrentQuestion().trueOptions.length > 1 ?
      '多选题'
      : '单选题') : '初始化...'}}
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import ExamService from '@/service/ExamService'

@Component
export default class ExamStatusBarView extends Vue {
  examService = ExamService

  fixZero(num: number): string {
    return (num < 10 ? '0' : '') + num
  }
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
