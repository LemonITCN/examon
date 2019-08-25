<template>
  <div class="exam-view-impl">
    <exam-status-bar-view class="exam-status-bar-view"></exam-status-bar-view>
    <div class="question-area">
      <transition-group
          name="custom-classes-transition"
          leave-active-class="animated bounceOutRight">
        <exam-question-card-view class="exam-question-card"
                                 v-for="(question, qIndex) in questionList" :key="qIndex + ''"
                                 v-show="questionCardShow[qIndex]" @click="hideCard(qIndex)"
                                 :qIndex="examInfo.questionList.length - qIndex" :question="question">
        </exam-question-card-view>
      </transition-group>
    </div>
    <!--    <exam-title-view class="exam-title-view"></exam-title-view>-->
    <!--    <exam-answer-options-view class="exam-answer-view"></exam-answer-options-view>-->
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import ExamStatusBarView from '@/views/exam-view/ExamStatusBarView.vue'
import ExamQuestionCardView from '@/views/exam-view/ExamQuestionCardView.vue'
import ExamQuestion from '@/model/ExamQuestion'
import ExamInfo from '@/model/ExamInfo'

@Component({
  components: {ExamQuestionCardView, ExamStatusBarView}
})
export default class ExamView extends Vue {
  examInfo: ExamInfo = new ExamInfo()
  questionList: ExamQuestion[] = []
  questionCardShow: boolean[] = []

  mounted() {
    this.examInfo = JSON.parse('{"name":"一场测试考试","countDownTimeSeconds":0,"isHaveLatex":false,"questionList":[{"questionTitle":"1 + 1","imageUrl":"","audioUrl":"","choiceList":[{"content":"2"},{"content":"3"},{"content":"4"},{"content":"5"}],"answerList":[0]},{"questionTitle":"1 + 2 + 3 + 4","imageUrl":"","audioUrl":"","choiceList":[{"content":"32"},{"content":"55"},{"content":"hello"},{"content":"10"}],"answerList":[3]},{"questionTitle":"1 + 1 - 1 * 1","imageUrl":"","audioUrl":"","choiceList":[{"content":"8"},{"content":"0"},{"content":"2"},{"content":"25"}],"answerList":[2]},{"questionTitle":"请问8 + 8等于几","imageUrl":"","audioUrl":"","choiceList":[{"content":"等于32"},{"content":"等于16"},{"content":"等于88888"},{"content":"等于一万"}],"answerList":[1]}]}')
    this.questionList = this.examInfo.questionList.reverse()
    for (let i = 0; i < this.examInfo.questionList.length; i++) {
      setTimeout(() => {
        this.questionCardShow.push(true)
      }, i * 50)
    }
  }

  hideCard(cardIndex: any) {
    console.log(cardIndex)
    this.questionCardShow[cardIndex] = false
  }
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
