export default class StoreDefineExam {
  private static readonly NAMESPACE = 'exam_';
  public static readonly GET_EXAM_QUESTION_CURRENT_INDEX = StoreDefineExam.NAMESPACE + 'get_exam_question_current_index'
  public static readonly SET_EXAM_QUESTION_CURRENT_INDEX = StoreDefineExam.NAMESPACE + 'set_exam_question_current_index'
  public static readonly SET_EXAM_INFO = StoreDefineExam.NAMESPACE + 'set_exam_info'
  public static readonly GET_EXAM_INFO = StoreDefineExam.NAMESPACE + 'get_exam_info'
  public static readonly SET_EXAM_TIMER_SECONDS = StoreDefineExam.NAMESPACE + 'set_exam_timer_seconds'
  public static readonly GET_EXAM_TIMER_SECONDS = StoreDefineExam.NAMESPACE + 'get_exam_timer_seconds'
}
