; (function () {
    const template = `<div class="jumbotron">
    <h1>{{ id }} </h1>
    <h2>{{ sportDetail.title }}</h2>
    <p>{{ sportDetail.content }}</p>
</div>`

    window.SportDetail = {
        template,
        data() {
            return {
                id: null,
                sportDetail:[]

            }
        },

        created() {
            this.getRportById()
        },

        methods: {
            getRportById () {
                this.id = this.$route.params.id-0

                axios.get('http://127.0.0.1:5500/vue-08-router/02-bootstrap-ajax-router/db/sport.json')
                .then(response => {
                    // handle success
                    const sportArr = response.data
                    this.sportDetail  = sportArr.find((detail)=>{
                        return detail.id === this.id
                    })
                })
                .catch(error => {
                    // handle error
                   
                })
            }
        },

        watch: {
            '$route': function () {
                this.getRportById()
            }
        },
    }
})()