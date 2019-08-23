<template>
  <div class="exam-view-impl">
    <v-btn color="primary">hello</v-btn>
    <exam-title-view class="exam-title-view"></exam-title-view>
    <exam-answer-options-view class="exam-answer-view"></exam-answer-options-view>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import ExamAnswerOptionsView from '@/views/exam-view/ExamAnswerOptionsView.vue'
import ExamTitleView from '@/views/exam-view/ExamTitleView.vue'

@Component({
  components: {ExamTitleView, ExamAnswerOptionsView}
})
export default class Home extends Vue {
}
</script>
<style>
  .exam-view-impl {
  }
</style>
