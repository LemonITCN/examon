import $store from '@/store'
import ExamInfo from '@/model/ExamInfo'
import StoreDefineExam from '@/define/store/exam'
import NameUtil from '@/utils/NameUtil'
import ExamQuestion from '@/model/ExamQuestion'

export default class ExamService {

  public static initExamInfo(examInfo: ExamInfo): void {
    $store.commit(NameUtil.CSCK(
      StoreDefineExam.SET_EXAM_INFO
    ), examInfo)
    $store.commit(NameUtil.CSCK(
      StoreDefineExam.SET_EXAM_QUESTION_CURRENT_INDEX
    ), 0)
    document.title = examInfo.name
  }

  public static getExamInfo(): ExamInfo {
    return $store.getters[NameUtil.CSCK(StoreDefineExam.GET_EXAM_INFO)]
  }

  /**
   * 切换到下一题
   * @return 是否有下一题（当所有题都结束，返回false）
   */
  public static nextQuestion(): boolean {
    let examInfo: ExamInfo = $store.getters[NameUtil.CSCK(StoreDefineExam.GET_EXAM_INFO)]
    let currentQuestionIndex: number = $store.getters[NameUtil.CSCK(StoreDefineExam.GET_EXAM_QUESTION_CURRENT_INDEX)]
    if (currentQuestionIndex >= examInfo.questionList.length - 1) {
      return false
    }
    $store.commit(NameUtil.CSCK(StoreDefineExam.SET_EXAM_QUESTION_CURRENT_INDEX), currentQuestionIndex + 1)
    return true
  }

  public static getCurrentQuestionIndex(): number {
    return $store.getters[NameUtil.CSCK(StoreDefineExam.GET_EXAM_QUESTION_CURRENT_INDEX)]
  }

  public static getCurrentQuestion(): ExamQuestion {
    return this.getExamInfo().questionList[this.getCurrentQuestionIndex()]
  }

}
