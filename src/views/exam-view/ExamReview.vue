<template>
  <div class="exam-review-impl">
    <div class="review-question-area">
      <exam-question-card-view class="review-exam-question-card"
                               v-for="(question, qIndex) in examService.getExamInfo().questionList"
                               :key="qIndex + ''"
                               :question="question" :only-preview="false">
      </exam-question-card-view>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import ExamService from '@/service/ExamService'
import ExamQuestionCardView from '@/views/exam-view/ExamQuestionCardView.vue'

@Component({
  components: {ExamQuestionCardView}
})
export default class ExamReview extends Vue {
  examService = ExamService
}
</script>

<style scoped>
  .exam-review-impl {
    display: flex;
    flex-direction: column;
    background: #ffffff;
  }

  .review-question-area {
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
  }

  .review-exam-question-card {
    background: #f0f0f0;
    min-width: 90%;
    min-height: 90%;
    border-radius: 3px;
    margin-left: 20px;
    margin-top: 5%;
    margin-bottom: 5%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .review-exam-question-card:last-child {
    border-right: 20px;
  }
</style>