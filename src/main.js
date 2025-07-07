import { createApp } from 'vue'  
import App from './App.vue'  
import router from './router'  
import { createPinia } from 'pinia' // 引入 createPinia  
import ElementPlus from 'element-plus'  
import 'element-plus/dist/index.css'  
import axios from 'axios'
// import '@/mock/mock'
 
//在实例对象上注册axios
const app = createApp(App)  
  
// 创建 Pinia 实例  
const pinia = createPinia()  
  
// 使用 router 和 Pinia  
app.use(router)  
app.use(pinia) // 在这里添加 Pinia  
app.use(ElementPlus)  
  
// 挂载应用  
app.mount('#app')