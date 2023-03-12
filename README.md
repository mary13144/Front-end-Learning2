# VUE

### Vue

- Vue是一个前端框架，主要负责帮助我们构建用户的界面

- MVVM：Model - View - View Model

- Vue负责View Model（视图模型）的工作，通过vue可以将视图和模型相关联

  - 当模型发生变化时，视图会自动更新
  - 也可以通过视图去操作模型

- Vue的思想：

  - 组件化开发
  - 声明式的编程

- Vue的使用方法:

  1. 直接在网页中使用，引入下列代码（一般不使用这种方法）

     	<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

  2. 使用构建工具vite

     - yarn add vite -D

  3. 代码模版：

     ```javascript
     //创建组件，就是一个普通的js对象
     const App = {}
     
     //创建应用并且挂载在网页上
     createApp(App).mount('#app')
     ```

     

     