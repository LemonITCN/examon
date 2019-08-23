<template>
  <div class="exam-view-impl">
    <exam-status-bar-view class="exam-status-bar-view"></exam-status-bar-view>
    <exam-title-view class="exam-title-view"></exam-title-view>
    <exam-answer-options-view class="exam-answer-view"></exam-answer-options-view>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import ExamAnswerOptionsView from '@/views/exam-view/ExamAnswerOptionsView.vue'
import ExamTitleView from '@/views/exam-view/ExamTitleView.vue'
import ExamStatusBarView from '@/views/exam-view/ExamStatusBarView.vue'

@Component({
  components: {ExamStatusBarView, ExamTitleView, ExamAnswerOptionsView}
})
export default class ExamView extends Vue {
}
</script>
<style>
  .exam-view-impl {
  }
</style>
