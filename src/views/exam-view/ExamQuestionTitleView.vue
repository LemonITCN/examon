<template>
  <div class="exam-title-view-impl">
    <div class="exam-title-content">
      <div class="question-title-content">
        {{question.questionTitle}}
      </div>
      <div class="question-img-area" v-if="question.imageUrl !== ''">
        <img :src="question.imageUrl" class="question-img-content">
      </div>
      <div class="question-audio-area" v-if="question.audioUrl !== ''">
        <div class="question-audio-intro">点击下方操作按钮来播放试题音频</div>
        <audio controls ref="qAudio">
          <source :src="question.audioUrl" type="audio/mpeg">
        </audio>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator'
import ExamQuestion from '@/model/ExamQuestion'
import ExamService from '@/service/ExamService'

@Component
export default class ExamTitleView extends Vue {
  @Prop()
  question!: ExamQuestion

  get currentQuestionIndex(): number {
    return ExamService.getCurrentQuestionIndex()
  }

  @Watch('currentQuestionIndex')
  onQuestionChange(index: number) {
    if (this.question.audioUrl !== '' &&
      ExamService.getExamInfo().questionList.indexOf(this.question) === (index - 1)) {
      // @ts-ignore
      if (!this.$refs.qAudio.paused) {
        console.log('关闭')
        // @ts-ignore
        this.$refs.qAudio.pause()
        // @ts-ignore
        this.$refs.qAudio.load()
      }
    }
  }

}
</script>

<style scoped>
  .exam-title-view-impl {
    background-image: linear-gradient(135deg, #97ABFF -10%, #123597 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .exam-title-content {
    margin-top: 38px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    flex-grow: 1;
    overflow-y: scroll;
    justify-content: center;
  }

  .question-title-content {
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    margin: 0 12px;
  }

  .question-img-area {
    margin-top: 20px;
  }

  .question-img-content {
    height: 160px;
  }

  .question-audio-area {
    margin-top: 20px;
    background: rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-radius: 6px;
    margin-bottom: 10px;
  }

  .question-audio-intro {
    text-align: center;
    font-size: 12px;
    color: #d0d0d0;
    margin: 10px 0;
  }
</style>
