; (function () {

    const template = `  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">

    <!--右边上半区域-->
    <!--<h1 class="page-header">Dashboard</h1>-->
    <!--定义插槽-->
    <slot name="dashboard"></slot>
    <dashboard :hobbies="hobbies" @delete_hobby="deleteHobby"></dashboard>
    <!--右边下半区域-->
    <h2 class="sub-header">Section title</h2>
   <home-leaf :empList="empList" :deleteEmp="deleteEmp"></home-leaf>
  </div>`


    window.AppHome = {
        template,

        data() {
            return {
                hobbies: ['coding', '睡觉', '看书', '打豆豆'],
                empList: [
                    { id: 1, name: '小梦1', salay: '8001' },
                    { id: 2, name: '小梦2', salay: '8002' },
                    { id: 3, name: '小梦3', salay: '8003' },
                    { id: 4, name: '小梦4', salay: '8004' },
                    { id: 5, name: '小梦5', salay: '8005' },
                ]
            }
        },

        methods: {
            deleteEmp(index) {
                this.empList.splice(index, 1)
            },
            deleteHobby(index){
                this.hobbies.splice(index,1)
            }
        },

        components: {
            Dashboard,
            HomeLeaf
        }
    }
})()