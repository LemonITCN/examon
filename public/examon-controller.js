var globalExamonObj = {
  onReadyListener: function () {
  }, onClosePreviewListener: function () {
  }, onExamEndListener() {
  }, messageListener(event) {
    if (event.data.type === 'ready') {
      globalExamonObj.onReadyListener !== undefined && globalExamonObj.onReadyListener()
    }
    if (event.data.type === 'closePreview') {
      globalExamonObj.onClosePreviewListener !== undefined && globalExamonObj.onClosePreviewListener()
    }
    if (event.data.type === 'examEnd') {
      globalExamonObj.onExamEndListener !== undefined && globalExamonObj.onExamEndListener(event.data.body.examResult)
    }
  }
}

function ExamonController(iframeDom) {
  this.ed = iframeDom

  console.log('Welcome to EXAMON System!')

  let self = this
  window.removeEventListener('message', globalExamonObj.messageListener, false)
  window.addEventListener('message', globalExamonObj.messageListener, false)

  this.setOnReadyListener = function (listener) {
    globalExamonObj.onReadyListener = listener
  }

  this.setOnCloseReviewListener = function (listener) {
    globalExamonObj.onClosePreviewListener = listener
  }

  this.setOnExamEndListener = function (listener) {
    globalExamonObj.onExamEndListener = listener
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
