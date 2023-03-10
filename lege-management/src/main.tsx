import React from 'react'
import ReactDOM from 'react-dom/client'
//初始化样式一般放在最前面
import 'reset-css'
//UI组件库样式
//全局样式
import '@/assets/styles/global.scss'
import {BrowserRouter} from "react-router-dom";
import App from "@/App";
//组件样式


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
