import StoreDefineExam from '@/define/store/exam'
import ExamInfo from '@/model/ExamInfo'

export interface State {
  examQuestionCurrentIndex: number
  examInfo: ExamInfo
  timerSeconds: number
}

const state: State = {
  examQuestionCurrentIndex: 0,
  examInfo: new ExamInfo(),
  timerSeconds: 0
}

const getters = {
  [StoreDefineExam.GET_EXAM_QUESTION_CURRENT_INDEX](state: State) {
    return state.examQuestionCurrentIndex
  },
  [StoreDefineExam.GET_EXAM_INFO](state: State) {
    return state.examInfo
  },
  [StoreDefineExam.GET_EXAM_TIMER_SECONDS](state: State) {
    return state.timerSeconds
  }
}

const mutations = {
  [StoreDefineExam.SET_EXAM_QUESTION_CURRENT_INDEX](state: State, newIndex: number) {
    state.examQuestionCurrentIndex = newIndex
  },
  [StoreDefineExam.SET_EXAM_INFO](state: State, examInfo: ExamInfo) {
    state.examInfo = examInfo
  },
  [StoreDefineExam.SET_EXAM_TIMER_SECONDS](state: State, timerSeconds: number) {
    state.timerSeconds = timerSeconds
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
