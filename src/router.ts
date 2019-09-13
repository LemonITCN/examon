import Vue from 'vue'
import Router from 'vue-router'
import ExamView from './views/exam-view/ExamView.vue'
import ExamReview from '@/views/exam-view/ExamReview.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/exam',
      component: ExamView
    },
    {
      path: '/review',
      component: ExamReview
    }
  ]
})
