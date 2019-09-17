<template>
  <div class="exam-review-impl">
    <div class="review-question-area">
      <transition-group
          name="custom-classes-transition"
          :enter-active-class="animateEnter"
          :leave-active-class="animateLeave">
        <exam-question-card-view class="review-exam-question-card"
                                 v-for="(question, qIndex) in examService.getExamInfo().questionList"
                                 :key="qIndex + ''"
                                 v-show="examService.getCurrentQuestionIndex() === qIndex"
                                 :question-index="qIndex"
                                 :question="question" :only-preview="true">
        </exam-question-card-view>
      </transition-group>
    </div>
    <div class="operate-area">
      <div class="operate-btn last-question" @click="last()">上一题</div>
      <div class="operate-btn close-btn" @click="close()">
        {{examService.getCurrentQuestionIndex() + 1}} / {{examService.getExamInfo().questionList.length}}<br/>关闭
      </div>
      <div class="operate-btn next-question" @click="next()">下一题</div>
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
  animateEnter: string = ''
  animateLeave: string = ''

  next() {
    this.animateEnter = 'animated faster slideInRight'
    this.animateLeave = 'animated faster slideOutLeft'
    ExamService.nextQuestion()
  }

  last() {
    this.animateEnter = 'animated faster slideInLeft'
    this.animateLeave = 'animated faster slideOutRight'
    ExamService.lastQuestion()
  }

  close() {
    ExamService.stopReview()
  }
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
    align-items: stretch;
  }

  .review-exam-question-card {
    background: #f0f0f0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    flex-grow: 1;
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
    text-align: center;
  }

  .last-question {
    line-height: 54px;
    background: #485563; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #29323c, #485563); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #29323c, #485563); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .close-btn {
    padding-top: 6px;
    line-height: 20px;
    background: #e53935; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #e35d5b, #e53935); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #e35d5b, #e53935); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .next-question {
    line-height: 54px;
    background: #485563; /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #29323c, #485563); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #29323c, #485563); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }
</style>
