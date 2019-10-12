; (function () {
    const template = ` <div class="jumbotron">
    <h2>{{ techDetail.tetle }} </h2>
    <p>{{ techDetail.content }}</p>
</div>`

    window.TechDetail = {
        template,
        data() {
            return {
                id: null,
                techDetail:[]

            }
        },

        created() {
            this.getTechById()
        },

        methods: {
            getTechById () {
                this.id = this.$route.params.id-0

                axios.get('http://127.0.0.1:5500/vue-08-router/02-bootstrap-ajax-router/db/sport.json')
                .then(response => {
                    // handle success
                    const techArr = response.data
                    this.techDetail  = techArr.find((detail)=>{
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
                this.getTechById()
            }
        },
    }
})()