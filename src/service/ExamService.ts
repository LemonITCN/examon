import $store from '@/store'
import ExamInfo from '@/model/ExamInfo'
import StoreDefineExam from '@/define/store/exam'

export default class ExamService {

  public static initExamInfo(examInfo: ExamInfo): void {
    console.log($store)
    $store.commit(StoreDefineExam.SET_EXAM_INFO, examInfo)
  }

  public static nextQuestion(): boolean {
    return true
  }

}
