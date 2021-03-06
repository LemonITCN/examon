export default class StoreDefineExam {
  private static readonly NAMESPACE = 'exam_';
  public static readonly GET_EXAM_QUESTION_CURRENT_INDEX = StoreDefineExam.NAMESPACE + 'get_exam_question_current_index'
  public static readonly SET_EXAM_QUESTION_CURRENT_INDEX = StoreDefineExam.NAMESPACE + 'set_exam_question_current_index'
  public static readonly SET_EXAM_INFO = StoreDefineExam.NAMESPACE + 'set_exam_info'
  public static readonly GET_EXAM_INFO = StoreDefineExam.NAMESPACE + 'get_exam_info'
  public static readonly SET_STUDENT_ANSWER = StoreDefineExam.NAMESPACE + 'set_student_answer'
  public static readonly GET_STUDENT_ANSWER = StoreDefineExam.NAMESPACE + 'get_student_answer'
  public static readonly SET_EXAM_TIMER_SECONDS = StoreDefineExam.NAMESPACE + 'set_exam_timer_seconds'
  public static readonly GET_EXAM_TIMER_SECONDS = StoreDefineExam.NAMESPACE + 'get_exam_timer_seconds'
  public static readonly SET_EXAMON_MDOE = StoreDefineExam.NAMESPACE + 'set_examon_mdoe'
  public static readonly GET_EXAMON_MDOE = StoreDefineExam.NAMESPACE + 'get_examon_mdoe'
}
