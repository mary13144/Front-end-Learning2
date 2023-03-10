import React from 'react'
import ReactDOM from 'react-dom/client'
//初始化样式一般放在最前面
import 'reset-css'
//UI组件库样式
//组件样式
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
