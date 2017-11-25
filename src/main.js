import Vue from "vue";

//引入跟组件
import App from "./App.vue";

import router from "./routers/router.js"

var vm = new Vue({
    el: "#app",
    router,
    template:"<App/>",
    components:{App}
})