import Count from "./components/Count";

//创建根组件
const App = {
    data(){
        return{
            msg:'我爱vue'
        }
    },

    //在组件中注册子组件
    components:{
        Count
    },

    template:"<h1>{{msg}}</h1>" +
        "<Count/>" +
        "<Count/>"
}

export default App