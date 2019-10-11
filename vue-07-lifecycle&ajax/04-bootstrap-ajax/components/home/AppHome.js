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
                empList: []
            }
        },

        created() {
            axios.get('http://127.0.0.1:5500/vue-07-lifecycle&ajax/04-bootstrap-ajax/emp.json')
                .then(response => {
                    // handle success
                    console.log(response.data, this);
                    this.empList = response.data
                })
                .catch(error => {
                    // handle error
                   
                })
        },

        methods: {
            deleteEmp(index) {
                this.empList.splice(index, 1)
            },
            deleteHobby(index) {
                this.hobbies.splice(index, 1)
                PubSub.publish('changeNum', 1)
            }
        },

        components: {
            Dashboard,
            HomeLeaf
        }
    }
})()