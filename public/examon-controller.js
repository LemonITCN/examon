function ExamonController(iframeDom) {
  this.ed = iframeDom
  this.onReadyListener = function () {
  }

  this.onClosePreviewListener = function () {
  }

  this.onExamEndListener = function (examResult) {
  }

  console.log('Welcome to EXAMON System!')

  let self = this
  var messageListener = function (event) {
    if (event.data.type === 'ready') {
      self.onReadyListener !== undefined && self.onReadyListener()
    }
    if (event.data.type === 'closePreview') {
      console.log('cloooooooo')
      self.onClosePreviewListener !== undefined && self.onClosePreviewListener()
    }
    if (event.data.type === 'examEnd') {
      self.onExamEndListener !== undefined && self.onExamEndListener(event.data.body.examResult)
    }
  }
  window.removeEventListener('message', messageListener, false)
  window.addEventListener('message', messageListener, false)

  this.setOnReadyListener = function (listener) {
    this.onReadyListener = listener
  }

  this.setOnCloseReviewListener = function (listener) {
    this.onClosePreviewListener = listener
  }

  this.setOnExamEndListener = function (listener) {
    this.onExamEndListener = listener
  }

  this.goto = function (routerPath) {
    // console.log(this.ed.src)
    this.ed.contentWindow.history.replaceState(null, null, this.ed.src.split('#')[0] + '#' + routerPath)
    // this.ed.src = this.ed.src.split('#')[0] + '#' + routerPath
    // console.log(this.ed.src)
  }

  this.postMessage = function (type, dataBody) {
    this.ed.contentWindow.postMessage({type: type, body: dataBody}, '*')
  }

  this.startExam = function (examInfo) {
    // this.goto('/exam')
    this.postMessage('start-exam', {examInfo: examInfo})
  }

  this.startReview = function (examInfo, studentAnswer) {
    // this.goto('/review')
    this.postMessage('start-review', {examInfo: examInfo, studentAnswer: studentAnswer})
  }

}
