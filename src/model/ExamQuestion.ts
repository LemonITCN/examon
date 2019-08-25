import ExamQuestionChoice from '@/model/ExamQuestionChoice'

export default class ExamQuestion {
  questionTitle: string = ''
  imageUrl: string = ''
  audioUrl: string = ''
  choiceList: ExamQuestionChoice[] = []
  answerList: number[] = []
}
