import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)



export default new Router({
	linkActiveClass: 'router-link-exact-active',
    mode: 'hash',
    routes: [
		{
			path: '/',
			name: 'login',
            component: (resolve) => require(['@/view/login/login.vue'], resolve),
		},
        {
            path: '/index',
            redirect: '/call/index',
            component: (resolve) => require(['@/view/main.vue'], resolve),
            children: [
				// 呼叫管理
				{
                    path: '/call/index',
                    component: (resolve) => require(['@/view/call/callIndex.vue'], resolve),
                    meta: {
                        requireAuth: true
                    }
				},
				{
                    path: '/call/record',
                    component: (resolve) => require(['@/view/call/record.vue'], resolve),
                    meta: {
                        requireAuth: true
                    }
				},
				{
                    path: '/call/blacklist',
                    component: (resolve) => require(['@/view/call/blacklist.vue'], resolve),
                    meta: {
                        requireAuth: true
                    }
				},
				// 调度管理
                {
                    path: '/dispatch/acceptRecord',
                    component: (resolve) => require(['@/view/dispatch/acceptRecord.vue'], resolve),
                    meta: {
                        requireAuth: true
                    }
				},
				// 人员管理
                {
                    path: '/worker/index',
                    component: (resolve) => require(['@/view/worker/worker.vue'], resolve),
                    meta: {
                        requireAuth: true
                    }
				},
                // 应急资源管理
                {
                    path: '/resource/car',
                    component: (resolve) => require(['@/view/resource/car.vue'], resolve),
                    meta: {
                        requireAuth: true
                    }
				},
				// 急救监控
				{
                    path: '/monitor/index',
                    component: (resolve) => require(['@/view/monitor/monitor.vue'], resolve),
                    meta: {
                        requireAuth: true
                    }
				},
				{
                    path: '/monitor/event',
                    component: (resolve) => require(['@/view/monitor/event.vue'], resolve),
                    meta: {
                        requireAuth: true
                    }
				},
				// 管理员管理
				{
                    path: '/admin/account',
                    component: (resolve) => require(['@/view/admin/account.vue'], resolve),
                    meta: {
                        requireAuth: true
                    }
				},
				// 个人中心
				{
                    path: '/profile/index',
                    component: (resolve) => require(['@/view/profile/profile.vue'], resolve),
                    meta: {
                        requireAuth: true
                    }
				},
            ]
		},
		{
			path: '/404',
			component: (resolve) => require(['@/view/404.vue'], resolve),
		},
    ]
})


