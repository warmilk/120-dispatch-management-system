import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  linkActiveClass: "router-link-exact-active",
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "login",
      component: resolve => require(["view/login/login.vue"], resolve)
    },
    {
      path: "/index",
      redirect: "/call/index",
      component: resolve => require(["view/main.vue"], resolve),
      children: [
        // 呼叫管理
        {
          path: "/call/index",
          component: resolve => require(["view/call/home/index.vue"], resolve),
          meta: {
            requireAuth: true
          }
        },
        {
          path: "/call/record",
          component: resolve =>
            require(["view/call/record/index.vue"], resolve),
          meta: {
            requireAuth: true
          }
        },
        {
          path: "/call/blacklist",
          component: resolve =>
            require(["view/call/blacklist/index.vue"], resolve),
          meta: {
            requireAuth: true
          }
        },
        // 调度管理
        {
            path: '/dispatch/acceptRecord',
            component: (resolve) => require(['view/dispatch/acceptRecord.vue'], resolve),
            redirect: '/dispatch/acceptRecord/table',
            meta: {
                requireAuth: true
            },
            children: [{
                path: '/dispatch/acceptRecord/table',
                name: 'details',
                component: (resolve) => require(['view/dispatch/page/table/table.vue'], resolve)
            },{
                path: '/dispatch/acceptRecord/details',
                name: 'details',
                component: (resolve) => require(['view/dispatch/page/details/details.vue'], resolve)
            }]
        },
        // 实时位置
        {
            path: "/dispatch/realTimePosition",
            component: resolve => require(["view/dispatch/realTimePosition.vue"], resolve),
        },
        // 导航管理
        {
            path: "/dispatch/navigationManage",
            component: resolve => require(["view/dispatch/navigationManage.vue"], resolve),
        },
        // 人员管理
        {
          path: "/worker",
          component: resolve => require(["view/worker/worker.vue"], resolve),
          redirect: {
            name: "workerList"
          },
          meta: {
            requireAuth: true
          },
          children: [
            {
              path: "list",
              name: "workerList",
              component: resolve =>
                require(["view/worker/workerList.vue"], resolve)
            },
            {
              path: "detail/:id",
              name: "workerDetail",
              component: resolve =>
                require(["view/worker/workerDetail.vue"], resolve)
            }
          ]
        },
        // 应急资源管理 -> 车辆管理
        {
          path: "/resource/car",
          component: resolve => require(["view/resource/car.vue"], resolve),
          redirect: {
            name: "carList"
          },
          meta: {
            requireAuth: true
          },
          children: [
            {
              path: "list",
              name: "carList",
              component: resolve =>
                require(["view/resource/carList.vue"], resolve)
            },
            {
              path: "detail/:id",
              name: "carDetail",
              component: resolve =>
                require(["view/resource/carDetail.vue"], resolve)
            }
          ]
        },
        // 应急资源管理 -> 设备管理
        {
          path: "/resource/device",
          component: resolve =>
            require(["@/view/resource/device.vue"], resolve),
          redirect: {
            name: "deviceList"
          },
          meta: {
            requireAuth: true
          },
          children: [
            {
              path: "list",
              name: "deviceList",
              component: resolve =>
                require(["@/view/resource/deviceList.vue"], resolve)
            },
            {
              path: "detail/:id",
              name: "deviceDetail",
              component: resolve =>
                require(["@/view/resource/deviceDetail.vue"], resolve)
            }
          ]
        },
        // 急救监控
        {
          path: "/monitor/index",
          component: resolve => require(["view/monitor/monitor.vue"], resolve),
          meta: {
            requireAuth: true
          }
        },
        {
          path: "/monitor/event",
          component: resolve => require(["view/monitor/event.vue"], resolve),
          meta: {
            requireAuth: true
          }
        },
        // 管理员管理
        {
          path: "/admin/account",
          component: resolve => require(["view/admin/account.vue"], resolve),
          meta: {
            requireAuth: true
          }
        },
        // 管理员管理 -> 详情
        {
          path: "/admin/account/detail/:id",
          component: resolve =>
            require(["view/admin/accountDetail.vue"], resolve),
          meta: {
            requireAuth: true
          }
        },
        // 个人中心
        {
          path: "/profile/index",
          component: resolve => require(["view/profile/profile.vue"], resolve),
          meta: {
            requireAuth: true
          }
        },
        {
          path: "/profile/editPassword",
          component: resolve =>
            require(["view/profile/editPassword.vue"], resolve),
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: "/404",
      component: resolve => require(["view/404.vue"], resolve)
    }
  ]
});
