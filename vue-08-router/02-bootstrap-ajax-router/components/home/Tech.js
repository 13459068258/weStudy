; (function () {
    const template = `  <!--科技栏目-->
    <div>
        <ul >
            <li v-for="tech in techArr" :key="tech.id">
                <span>{{ tech.title }} </span>
                <button @click="techPush(tech.id)" class="btn  btn-default btn-xs">查看(Push)</button>&nbsp;
                <button @click="techReplace(tech.id)" class="btn btn-default btn-xs">查看(replace)</button>
            </li>
            <button @click="$router.go(-1)">后退</button>
            <button @click="$router.go(1)">前进</button>
        </ul>
        <!--详情-->
       <router-view></router-view>
    </div>		 `

    window.Tech = {
        template,

        data() {
            return {
                techArr:[]
            }
        },


        created() {
            this.getTechArr()
        },
        methods: {
            techPush(id){
                this.$router.push(`/news/tech/detail/${id}`)
            },
            techReplace(id){
                this.$router.replace(`/news/tech/detail/${id}`)
            },
            getTechArr(){
                axios.get('http://127.0.0.1:5500/vue-08-router/02-bootstrap-ajax-router/db/tech.json')
                    .then(response => {
                        // handle success
                        this.techArr = response.data
                    })
                    .catch(error => {
                        // handle error
    
                    })
            }
        },
    }
})()