import { createStore } from 'vuex'
import permission from './permission.js'

// 创建一个新的 store 实例
const store = createStore({
  modules: {
      permission:permission
    }
})

export default store