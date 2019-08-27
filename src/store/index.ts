import Vue from 'vue'
import Vuex from 'vuex'

import exam from './exam'

Vue.use(Vuex)

let result: any = {}

function findStoreModule(tree: any) {
  Object.keys(tree).forEach(function (key) {
    if (tree[key].hasOwnProperty('state')) {
      result[key] = tree[key]
    } else {
      findStoreModule(tree[key])
    }
  })
}

findStoreModule({
  exam
})

export default new Vuex.Store({
  modules: {
    exam
  }
})
