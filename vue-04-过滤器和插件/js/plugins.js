(function () {
    const MyPlugin = {}
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
            alert('myGlobalMethod全局方法被调用了')
        }

        // 2. 添加全局资源
        Vue.directive('my-directive', {
            inserted(el, binding) {
                el.innerHTML = 'myGlobalMethod指令被调用了' + binding.value
            }
        })

        // 3. 添加实例方法
        Vue.prototype.$myMethod = function (value) {
            alert('Vue 实例方法被调用了:' + value)
        }
    }

    window.MyPlugin = MyPlugin
})()