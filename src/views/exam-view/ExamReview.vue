<template>
  <div class="exam-review-impl">
    <div class="review-question-area">
      <exam-question-card-view class="review-exam-question-card"
                               v-for="(question, qIndex) in examService.getExamInfo().questionList"
                               :key="qIndex + ''"
                               :question="question" :only-preview="true">
      </exam-question-card-view>
    </div>
    <div class="operate-area">
      <div class="operate-btn last-question">上一题</div>
      <div class="operate-btn close-btn">关闭</div>
      <div class="operate-btn next-question">下一题</div>
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
    justify-content: space-between;
  }

  .review-exam-question-card {
    background: #f0f0f0;
    min-width: 100%;
    min-height: 90%;
    border-radius: 3px;
  }

  .review-exam-question-card:last-child {
    border-right: 20px;
  }

  .operate-area {
    display: flex;
    flex-direction: row;
    background: blue;
    height: 54px;
    color: #ffffff;
  }

  .operate-area .operate-btn {
    flex-grow: 1;
    line-height: 54px;
    text-align: center;
  }

  .last-question {
    background: #3db23e;
  }

  .close-btn {
    background: #888888;
  }

  .next-question {
    background: #3db23e;
  }
</style>
