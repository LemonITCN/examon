import ExamQuestion from '@/model/ExamQuestion'

export default class ExamInfo {
  name: string = ''
  countDownTimeSeconds: number = 0
  isHaveLatex: boolean = false
  questionList: ExamQuestion[] = []
}
