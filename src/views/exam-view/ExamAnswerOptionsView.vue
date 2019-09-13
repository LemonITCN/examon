<template>
  <div class="exam-answer-options-view-impl">
    <div class="choice-option"
         :class="(!!studentAnswer && studentAnswer.indexOf(cIndex + '') >= 0) ? (question.trueOptions.indexOf(cIndex + '') >=
      0 ? 'true-select' : 'err-select') : ''"
         v-for="(choice, cIndex) in question.choiceOptions" :key="cIndex + ''"
         @click="gotoNextQuestion(cIndex + '')">
      <div class="choice-no">{{String.fromCharCode(65 + cIndex)}}
        <img v-if="question.trueOptions.indexOf(cIndex + '') >= 0" class="true-icon" src="ok.png">
      </div>
      <div class="choice-content">{{choice.content}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import ExamQuestion from '@/model/ExamQuestion'
import ExamService from '@/service/ExamService'
import NameUtil from '@/utils/NameUtil'
import StoreDefineExam from '@/define/store/exam'

@Component
export default class ExamAnswerOptionsView extends Vue {
  @Prop()
  question!: ExamQuestion
  @Prop()
  onlyPreview: boolean = false
  studentAnswer: string = ''

  mounted() {
    this.studentAnswer = this.$store.getters[NameUtil.CSCK(StoreDefineExam.GET_STUDENT_ANSWER)][this.question.dataKey]
  }

  gotoNextQuestion(option: string) {
    if (!this.onlyPreview) {
      ExamService.saveStudentChooseOption(ExamService.getCurrentQuestion().dataKey, option)
      if (!ExamService.nextQuestion()) {
        // 最后一题
        ExamService.stopExam()
      }
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

  .true-select {
    background: rgba(82, 234, 108, 0.3);
  }

  .err-select {
    background: rgba(255, 0, 0, 0.2);
  }

  .choice-no {
    color: #999999;
    font-size: 40px;
    margin: 0 10px;
    position: relative;
  }

  .true-icon {
    position: absolute;
    width: 30px;
    left: 0;
    top: 20px;
  }

  .choice-content {
    flex-grow: 1;
    line-height: 20px;
    margin: 8px 10px 8px 0;
    text-align: center;
  }
</style>
