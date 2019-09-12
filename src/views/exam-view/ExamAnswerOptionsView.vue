<template>
  <div class="exam-answer-options-view-impl">
    <div class="choice-option" v-for="(choice, cIndex) in question.choiceOptions" :key="cIndex + ''"
         @click="gotoNextQuestion(cIndex + '')">
      <div class="choice-no">{{String.fromCharCode(65 + cIndex)}}</div>
      <div class="choice-content">{{choice.content}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import ExamQuestion from '@/model/ExamQuestion'
import ExamService from '@/service/ExamService'

@Component
export default class ExamAnswerOptionsView extends Vue {
  @Prop()
  question!: ExamQuestion

  gotoNextQuestion(option: string) {
    ExamService.saveStudentChooseOption(ExamService.getCurrentQuestion().dataKey, option)
    if (!ExamService.nextQuestion()) {
      // 最后一题
      ExamService.stopExam()
    }
  }
}
</script>

<style scoped>
  .exam-answer-options-view-impl {
  }

  .choice-option {
    height: 75px;
    border-bottom: 1px solid #d0d0d0;
    font-size: 18px;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .choice-no {
    color: #d0d0d0;
    font-size: 40px;
    margin: 0 10px;
  }

  .choice-content {
    flex-grow: 1;
    line-height: 20px;
    margin: 8px 10px 8px 0;
    text-align: center;
  }
</style>
