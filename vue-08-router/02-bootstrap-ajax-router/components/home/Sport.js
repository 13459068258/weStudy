;(function(){
    const template = `	  <!--体育栏目-->
    <div>
        <ul>
            <li v-for="sport in sportArr" :key="sport.id">
                <router-link :to="'/news/sport/detail/'+sport.id">{{ sport.title }}</router-link>
            </li>
        </ul>
        <!--详情-->
        <router-view></router-view>
    </div> `

    window.Sport = {
        template,
        data() {
            return {
                sportArr:[]
            }
        },

        // 异步获取数据
        created() {
            this.getSportArr()
        },

        methods: {
            getSportArr(){
                axios.get('http://127.0.0.1:5500/vue-08-router/02-bootstrap-ajax-router/db/sport.json')
                .then(response => {
                    // handle success
                    this.sportArr = response.data
                })
                .catch(error => {
                    // handle error
                   
                })
            }
        },
    }


})()