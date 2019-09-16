<template>
  <div class="exam-question-card-view-impl">
    <exam-title-view class="exam-title-view" :question="question"></exam-title-view>
    <exam-answer-options-view class="exam-answer-view" :question="question" :only-preview="onlyPreview"></exam-answer-options-view>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import ExamQuestion from '@/model/ExamQuestion'
import ExamTitleView from '@/views/exam-view/ExamQuestionTitleView.vue'
import ExamAnswerOptionsView from '@/views/exam-view/ExamAnswerOptionsView.vue'

@Component({
  components: {ExamAnswerOptionsView, ExamTitleView}
})
export default class ExamQuestionCardView extends Vue {
  @Prop()
  question!: ExamQuestion
  @Prop()
  onlyPreview!: boolean
}
</script>

<style scoped>
  .exam-question-card-view-impl {
    display: flex;
    flex-direction: column;
  }

  .exam-title-view {
    flex-grow: 1;
    overflow: scroll;
  }

  .exam-answer-view {
    min-height: 300px;
  }

</style>
