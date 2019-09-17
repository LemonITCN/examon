import $store from '@/store'
import ExamInfo from '@/model/ExamInfo'
import StoreDefineExam from '@/define/store/exam'
import NameUtil from '@/utils/NameUtil'
import ExamQuestion from '@/model/ExamQuestion'
import ExamResult from '@/model/ExamResult'

export default class ExamService {

  private static examInterval: any
  private static studentAnswer: { [index: string]: string } = {}

  public static examEndListener: (result: ExamResult) => {}

  public static setExamonMode(examonMode: string) {
    $store.commit(NameUtil.CSCK(StoreDefineExam.SET_EXAMON_MDOE), examonMode)
  }

  public static getExamonMode(): string {
    return $store.getters[NameUtil.CSCK(StoreDefineExam.GET_EXAMON_MDOE)]
  }

  public static startExam(examInfo: ExamInfo, examEndListener: any): void {
    this.setExamonMode('exam')
    this.examEndListener = examEndListener
    $store.commit(NameUtil.CSCK(
      StoreDefineExam.SET_STUDENT_ANSWER
    ), {})
    $store.commit(NameUtil.CSCK(
      StoreDefineExam.SET_EXAM_INFO
    ), examInfo)
    $store.commit(NameUtil.CSCK(
      StoreDefineExam.SET_EXAM_QUESTION_CURRENT_INDEX
    ), 0)
    document.title = examInfo.name
    if (ExamService.examInterval !== undefined) {
      clearInterval(ExamService.examInterval)
    }
    this.startTimer(examInfo.countDownTimeSeconds)
  }

  public static startReview(examInfo: ExamInfo, studentAnswer: { [index: string]: string }) {
    this.setExamonMode('review')
    this.studentAnswer = studentAnswer
    $store.commit(NameUtil.CSCK(
      StoreDefineExam.SET_EXAM_INFO
    ), examInfo)
    $store.commit(NameUtil.CSCK(
      StoreDefineExam.SET_STUDENT_ANSWER
    ), studentAnswer)
    $store.commit(NameUtil.CSCK(
      StoreDefineExam.SET_EXAM_QUESTION_CURRENT_INDEX
    ), 0)
    document.title = examInfo.name
    if (ExamService.examInterval !== undefined) {
      clearInterval(ExamService.examInterval)
    }
  }

  public static getExamInfo(): ExamInfo {
    return $store.getters[NameUtil.CSCK(StoreDefineExam.GET_EXAM_INFO)]
  }

  public static saveStudentChooseOption(questionDataKey: string, answer: string) {
    this.studentAnswer[questionDataKey] = answer
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

  /**
   * 切换到上一题
   * @return 是否有上一题（当所有题都结束，返回false）
   */
  public static lastQuestion(): boolean {
    let examInfo: ExamInfo = $store.getters[NameUtil.CSCK(StoreDefineExam.GET_EXAM_INFO)]
    let currentQuestionIndex: number = $store.getters[NameUtil.CSCK(StoreDefineExam.GET_EXAM_QUESTION_CURRENT_INDEX)]
    if (currentQuestionIndex === 0) {
      return false
    }
    $store.commit(NameUtil.CSCK(StoreDefineExam.SET_EXAM_QUESTION_CURRENT_INDEX), currentQuestionIndex - 1)
    return true
  }

  public static getCurrentQuestionIndex(): number {
    return $store.getters[NameUtil.CSCK(StoreDefineExam.GET_EXAM_QUESTION_CURRENT_INDEX)]
  }

  public static getCurrentQuestion(): ExamQuestion {
    return this.getExamInfo().questionList[this.getCurrentQuestionIndex()]
  }

  public static getTimerSeconds(): number {
    return $store.getters[NameUtil.CSCK(StoreDefineExam.GET_EXAM_TIMER_SECONDS)]
  }

  public static stopExam(): ExamResult {
    this.endTimer()
    let examResult: ExamResult = new ExamResult()
    examResult.useSeconds = this.getTimerSeconds();
    examResult.studentAnswer = this.studentAnswer
    this.examEndListener !== undefined && this.examEndListener(examResult)
    $store.commit(NameUtil.CSCK(
      StoreDefineExam.SET_EXAM_QUESTION_CURRENT_INDEX
    ), -1)
    this.setExamonMode('wait')
    return examResult
  }

  public static stopReview() {
    $store.commit(NameUtil.CSCK(
      StoreDefineExam.SET_EXAM_QUESTION_CURRENT_INDEX
    ), -1)
    window.parent.postMessage({type: 'closePreview', body: {}}, '*')
    this.setExamonMode('wait')
  }

  private static startTimer(countDownTimeSeconds: number) {
    $store.commit(NameUtil.CSCK(StoreDefineExam.SET_EXAM_TIMER_SECONDS), countDownTimeSeconds)
    let subValue = countDownTimeSeconds === 0 ? 1 : -1
    ExamService.examInterval = setInterval(() => {
      $store.commit(NameUtil.CSCK(StoreDefineExam.SET_EXAM_TIMER_SECONDS), this.getTimerSeconds() + subValue)
      if (subValue === -1 && this.getTimerSeconds() === 0) {
        this.stopExam()
      }
    }, 1000)
  }

  private static endTimer(): number {
    clearInterval(this.examInterval)
    return this.getTimerSeconds()
  }

}
