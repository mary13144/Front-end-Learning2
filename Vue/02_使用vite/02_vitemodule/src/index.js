import {createApp} from "vue/dist/vue.esm-bundler";
import App from "./App";


/*
    mount()返回的事根组件的实例
 */
const vm =   createApp(App).mount('#root')