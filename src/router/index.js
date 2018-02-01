import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)



export default new Router({
	linkActiveClass: 'router-link-exact-active',
    mode: 'hash',
    routes: [
		{
            path: '/',
            component: (resolve) => require(['@/view/login/login.vue'], resolve),
		},
        {
            path: '/index',
            redirect: '/call',
            component: (resolve) => require(['@/view/main.vue'], resolve),
            children: [
				// 呼叫管理
				{
                    path: '/call',
                    component: (resolve) => require(['@/view/call/callIndex.vue'], resolve),
                    meta: {
                        requireAuth: true
                    }
				},
				// 调度管理
                
                
                
            ]
		},
		{
			path: '/404',
			component: (resolve) => require(['@/view/404.vue'], resolve),
		},
    ]
})


