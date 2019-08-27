import StoreDefineLogin from '@/define/store/exam'
import ExamInfo from '@/model/ExamInfo'

export interface State {
  examQuestionCurrentIndex: number
  examInfo: ExamInfo
}

const state: State = {
  examQuestionCurrentIndex: 0,
  examInfo: new ExamInfo()
}

const getters = {
  [StoreDefineLogin.GET_EXAM_QUESTION_CURRENT_INDEX](state: State) {
    return state.examQuestionCurrentIndex
  },
  [StoreDefineLogin.GET_EXAM_INFO](state: State) {
    return state.examInfo
  }
}

const mutations = {
  [StoreDefineLogin.SET_EXAM_QUESTION_CURRENT_INDEX](state: State, newIndex: number) {
    state.examQuestionCurrentIndex = newIndex
  },
  [StoreDefineLogin.SET_EXAM_INFO](state: State, examInfo: ExamInfo) {
    state.examInfo = examInfo
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
