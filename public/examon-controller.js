function ExamonController(iframeDom) {
  this.ed = iframeDom
  this.onReadyListener = function () {
  }

  this.onExamEndListener = function (examResult) {
  }

  let self = this
  window.addEventListener('message', function (event) {
    if (event.data.type === 'ready') {
      self.onReadyListener !== undefined && self.onReadyListener()
    }
    if (event.data.type === 'examEnd') {
      console.log('eee999000')
      self.onExamEndListener !== undefined && self.onExamEndListener(event.data.body.examResult)
    }
  })

  this.setOnReadyListener = function (listener) {
    this.onReadyListener = listener
  }

  this.setOnExamEndListener = function (listener) {
    this.onExamEndListener = listener
  }

  this.goto = function (routerPath) {
    console.log(this.ed.src)
    this.ed.src = this.ed.src.split('#')[0] + '#' + routerPath
    console.log(this.ed.src)
  }

  this.postMessage = function (type, dataBody) {
    this.ed.contentWindow.postMessage({type: type, body: dataBody}, '*')
  }

  this.startExam = function (examInfo) {
    this.goto('/exam')
    this.postMessage('start-exam', {examInfo: JSON.stringify(examInfo)})
  }

}
