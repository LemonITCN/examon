<template>
  <div class="exam-view-impl">
    <exam-status-bar-view class="exam-status-bar-view"></exam-status-bar-view>
    <div class="question-area">
      <transition-group
          name="custom-classes-transition"
          enter-active-class="animated faster slideInRight"
          leave-active-class="animated slideOutLeft">
        <exam-question-card-view class="exam-question-card"
                                 v-for="(question, qIndex) in examService.getExamInfo().questionList"
                                 :key="qIndex + ''"
                                 v-show="examService.getCurrentQuestionIndex() === qIndex"
                                 :question="question">
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

  mounted() {
    let examInfo = JSON.parse('{"name":"一场测试考试","countDownTimeSeconds":0,"isHaveLatex":false,"questionList":[{"questionTitle":"1 + 1","imageUrl":"","audioUrl":"","choiceList":[{"content":"2"},{"content":"3"},{"content":"4"},{"content":"5"}],"answerList":[0]},{"questionTitle":"1 + 2 + 3 + 4","imageUrl":"","audioUrl":"","choiceList":[{"content":"32"},{"content":"55"},{"content":"hello"},{"content":"10"}],"answerList":[3]},{"questionTitle":"1 + 1 - 1 * 1","imageUrl":"","audioUrl":"","choiceList":[{"content":"8"},{"content":"0"},{"content":"2"},{"content":"25"}],"answerList":[2]},{"questionTitle":"请问8 + 8等于几","imageUrl":"","audioUrl":"","choiceList":[{"content":"等于32"},{"content":"等于16"},{"content":"等于88888"},{"content":"等于一万"}],"answerList":[1]},{"questionTitle":"让我先来问问你！！！这个歌你感觉好不好听！！！？？？？？？","imageUrl":"","audioUrl":"https://lemon-robot-runner-1255447022.cos.ap-beijing.myqcloud.com/nxdzhk.mp3","choiceList":[{"content":"不怎么好听"},{"content":"哈哈哈一般般"},{"content":"很好听啊！！！！"},{"content":"我感觉还行"}],"answerList":[2]},{"questionTitle":"下面图中有几个人","imageUrl":"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1566969628&di=4c4764d4de0adc00d63d0144a5cfb710&src=http://img.mp.itc.cn/upload/20160831/e3ee63cb54d041458ea7919b5eaba9ca_th.jpg","audioUrl":"","choiceList":[{"content":"一百个人"},{"content":"一千个人"},{"content":"四个人"},{"content":"一万个人"}],"answerList":[2]},{"questionTitle":"这个歌你感觉好不好听！！！？？？？？？","imageUrl":"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1566969628&di=4c4764d4de0adc00d63d0144a5cfb710&src=http://img.mp.itc.cn/upload/20160831/e3ee63cb54d041458ea7919b5eaba9ca_th.jpg","audioUrl":"https://lemon-robot-runner-1255447022.cos.ap-beijing.myqcloud.com/nxdzhk.mp3","choiceList":[{"content":"不好听"},{"content":"一般般"},{"content":"还行"},{"content":"非常非常非常的好听"}],"answerList":[3]},{"questionTitle":"先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，的下一句是什么？","imageUrl":"","audioUrl":"","choiceList":[{"content":"不宜妄自菲薄，引喻失义，以塞忠谏之路也。"},{"content":"春眠不觉晓，处处闻啼鸟"},{"content":"床前明月光，疑是地上霜"},{"content":"锄禾日当午，汗滴禾下土"}],"answerList":[0]}]}')
    ExamService.initExamInfo(examInfo)
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
    animate-duration: 21s;
  }


</style>
