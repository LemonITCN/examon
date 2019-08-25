<template>
  <div class="exam-answer-options-view-impl">
    <div class="choice-option" v-for="(choice, cIndex) in question.choiceList" :key="cIndex + ''">
      {{choice.content}}
      <div class="choice-no">{{String.fromCharCode(65 + cIndex)}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import ExamQuestion from '@/model/ExamQuestion'

@Component
export default class ExamAnswerOptionsView extends Vue {
  @Prop()
  question!: ExamQuestion
}
</script>

<style scoped>
  .exam-answer-options-view-impl {
  }

  .choice-option {
    height: 79px;
    line-height: 80px;
    border-bottom: 1px solid #d0d0d0;
    font-size: 18px;
    text-align: center;
    position: relative;
  }

  .choice-no{
    position: absolute;
    top: 0;
    left: 20px;
    color: #d0d0d0;
    font-size: 40px;
  }
</style>
