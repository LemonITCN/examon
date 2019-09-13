import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ExamService from '@/service/ExamService'
import ExamResult from '@/model/ExamResult'

Vue.config.productionTip = false

// @ts-ignore
window.addEventListener('message', function (event) {
  if (event.data.type === 'start-exam') {
    ExamService.startExam(event.data.body.examInfo, (examResult: ExamResult) => {
      window.parent.postMessage({type: 'examEnd', body: {examResult: examResult}}, '*')
    })
  }
  if (event.data.type === 'start-review') {
    ExamService.startReview(event.data.body.examInfo, event.data.body.studentAnswer)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
