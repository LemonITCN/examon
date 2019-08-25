<template>
  <div class="exam-title-view-impl">
    <div class="question-title-content">
      {{question.questionTitle}}
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import ExamQuestion from '@/model/ExamQuestion'

@Component
export default class ExamTitleView extends Vue {
  @Prop()
  question!: ExamQuestion
}
</script>

<style scoped>
  .exam-title-view-impl {
    overflow-y: scroll;
    background-image: linear-gradient(135deg, #97ABFF -10%, #123597 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .question-title-content {
    font-size: 20px;
    color: #ffffff;
  }
</style>
