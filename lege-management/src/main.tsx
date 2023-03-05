import React from 'react'
import ReactDOM from 'react-dom/client'
//初始化样式一般放在最前面
import 'reset-css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
