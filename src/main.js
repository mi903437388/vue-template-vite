import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/variables.css'
import router from './router/index.js'
import Confirm from './components/basic/Confirm.vue'
import store from './store/index.js'
const app = createApp(App)


import {postRequest} from "./api/request.js";
import {putRequest} from "./api/request.js";
import {getRequest} from "./api/request.js";
import {deleteRequest} from "./api/request.js";
import {initMenu} from "./api/menu";
//插件
app.config.globalProperties.$postRequest = postRequest
app.config.globalProperties.$putRequest = putRequest
app.config.globalProperties.$getRequest = getRequest
app.config.globalProperties.$deleteRequest = deleteRequest

app.use(store)
app.use(router)
app.use(ElementPlus)
app.component('confirm',Confirm)
app.mount('#app')