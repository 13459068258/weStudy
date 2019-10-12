; (function () {
    window.router = new VueRouter({
        linkActiveClass: 'active',


        routes: [
            {
                path: '/',
                component: AppHome
            },
            {
                path: '/news',
                component: News,
                children: [
                    {
                        path: '/news/sport',
                        component: Sport,
                        children: [
                            {
                                path: '/news/sport/detail/:id',
                                component: SportDetail
                            }
                        ]
                    },
                    {
                        path: '/news/tech',
                        component: Tech,
                        children:[
                            {
                                path:'/news/tech/detail/:id',
                                component: TechDetail
                            }
                        ]
                    },
                    {
                        path: '',
                        redirect: '/news/sport'
                    }
                ]

            },
            {
                path: '/about',
                component: About
            },
        ]
    })
})()