import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
let a = '222'
const app = createApp(App)
app.use(router).use(store).use(Antd)
app.mount('#app')

