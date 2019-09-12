import ExamQuestionChoice from '@/model/ExamQuestionChoice'

export default class ExamQuestion {
  dataKey: string = ''
  titleContent: string = ''
  titleImageUrl: string = ''
  titleAudioUrl: string = ''
  choiceOptions: ExamQuestionChoice[] = []
  trueOptions: string = ''
}
