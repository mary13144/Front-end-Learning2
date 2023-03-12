export default {
    data(){
        return{
            count:0
        }
    },
    template:'<button @click="count++">点击</button> -- <span>点击了{{count}}次</span>'
}