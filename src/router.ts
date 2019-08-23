import Vue from 'vue'
import Router from 'vue-router'
import ExamView from './views/exam-view/ExamView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/exam',
      component: ExamView
    }
  ]
})
