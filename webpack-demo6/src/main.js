// import Vue from 'vue'
// import Vue from 'vue/dist/vue'
import Vue from 'vue'
import App from './App.vue'


/* new Vue({
    el: "#app",
    // render: function (h) {
    //     return h(App)
    // },
    // components: { App }
    // render: h =>  h(App)
    
}) */

new Vue({
    render:h => h(App)
}).$mount('#app')