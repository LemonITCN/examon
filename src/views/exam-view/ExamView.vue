<template>
  <div class="exam-view-impl">
    <exam-status-bar-view class="exam-status-bar-view"></exam-status-bar-view>
    <div class="question-area">
      <transition-group
          name="custom-classes-transition"
          enter-active-class="animated faster slideInRight"
          leave-active-class="animated slideOutLeft">
        <exam-question-card-view class="exam-question-card"
                                 :question-index="qIndex"
                                 v-for="(question, qIndex) in examService.getExamInfo().questionList"
                                 :key="qIndex + ''"
                                 v-show="examService.getCurrentQuestionIndex() === qIndex"
                                 :question="question" :only-preview="false">
        </exam-question-card-view>
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import ExamStatusBarView from '@/views/exam-view/ExamStatusBarView.vue'
import ExamQuestionCardView from '@/views/exam-view/ExamQuestionCardView.vue'
import ExamService from '@/service/ExamService'

@Component({
  components: {ExamQuestionCardView, ExamStatusBarView}
})
export default class ExamView extends Vue {
  examService = ExamService

}
</script>
<style>
  .exam-view-impl {
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%);
  }

  .exam-status-bar-view {
    height: 30px;
    position: absolute;
    left: 0;
    top: 6px;
    right: 0;
    z-index: 1000;
  }

  .question-area {
    position: relative;
    flex-grow: 1;
  }

  .exam-question-card {
    position: absolute;
    background: #f0f0f0;
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }


</style>
