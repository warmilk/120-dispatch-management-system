<template>
	<header class="header">
		<div class="main-nav">
			<!-- logo -->
			<img class="logo" src="@/assets/img/logo-inside.png" alt="logo" />
			<!-- 大导航条 -->
			<nav class="nav" @mouseout="initActiveMenu">
				<ul>
					<!-- 一级菜单 -->
					<!-- <li class="nav__item" :class="{'nav__item_active': activeMenu == 1}" @click="activeMenu = 1" @mouseover="activeMenu = 1, activeSubMenu = 1.1">
						{{`呼叫管理`}}
						
						<ul class="nav__subnav" v-if="activeMenu == 1">
							<li @click="activeMenu = 1, activeSubMenu = 1.1">
								<a class="nav__subnav-item" :class="{'nav__subnav-item_active': activeSubMenu == 1.1}" href="#/call/index">{{`呼叫首页`}}</a>
							</li>
							<li @click="activeMenu = 1, activeSubMenu = 1.2, sessionStorage.setItem('activeMenu', '1.2')">
								<a class="nav__subnav-item" :class="{'nav__subnav-item_active': activeSubMenu == 1.2}" href="#/call/record">{{`通话记录`}}</a>
							</li>
							<li @click="activeMenu = 1, activeSubMenu = 1.3">
								<a class="nav__subnav-item" :class="{'nav__subnav-item_active': activeSubMenu == 1.3}" href="#/call/blacklist">{{`黑名单管理`}}</a>
							</li>
						</ul>
					</li> -->
					<li class="nav__item" v-for="(item, index) in menuList" :key="index" :class="{'nav__item_active': activeMenu == calActiveMenu(index)}" @click="activeMenu = calActiveMenu(index)" @mouseover="activeMenu = calActiveMenu(index)">
						{{item.name}}
						<ul class="nav__subnav" v-if="activeMenu == (index+1) && item.children">
							<li v-for="(subItem, subIndex) in item.children" :key="subIndex" @click="activeMenu = calActiveMenu(index), activeSubMenu = calActiveSubMenu(index, subIndex)">
								<a class="nav__subnav-item" :class="{'nav__subnav-item_active': activeSubMenu ==  calActiveSubMenu(index, subIndex)}" :href="`#${subItem.path}`">{{subItem.name}}</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
			<!-- 头像 -->
			<div class="profile">
				<div class="profile__avatar">
					<img src="@/assets/img/user.png" alt="user" @click="profileNavVisable = !profileNavVisable" @mouseover="profileNavVisable = true" />
					<nav class="profile__nav" v-show="profileNavVisable">
						<ul>
							<li @click="profileNavVisable = !profileNavVisable">
								<a href="#/profile/index">个人资料</a>
							</li>
							<li @click="profileNavVisable = !profileNavVisable">
								<a href="#/profile/editPassword">修改密码</a>
							</li>
						</ul>
					</nav>
				</div>
				<a class="profile__logout" href="#" @click="logout">退出</a>
			</div>
		</div>
	</header>
</template>

<script>
	import * as LoginApi from "api/login";
	export default {
	  data() {
	    return {
	      profileNavVisable: false,
	      activeMenu: 1,
	      activeSubMenu: 1.1,
	      subMenu: [],
	      menuList: [
	        {
	          id: 1,
	          name: "呼叫管理",
	          path: "call-manage",
	          children: [
	            {
	              id: 1.1,
	              name: "呼叫首页",
	              path: "/call/index"
	            },
	            {
	              id: 1.2,
	              name: "通话记录",
	              path: "/call/record"
	            },
	            {
	              id: 1.3,
	              name: "黑名单",
	              path: "/call/blacklist"
	            }
	          ]
	        },
	        {
	          id: 2,
	          name: "调度管理",
	          path: "call-manage",
	          children: [
	            {
	              id: 2.1,
	              name: "受理记录"
	            },
	            {
	              id: 2.2,
	              name: "实时位置"
	            },
	            {
	              id: 2.3,
	              name: "导航管理"
	            }
	          ]
	        },
	        {
	          id: 3,
	          name: "人员管理",
	          path: "call-manage",
	          children: [
	            {
	              id: 3.1,
	              name: "人员管理"
	            }
	          ]
	        },
	        {
	          id: 4,
	          name: "应急资源管理",
	          path: "call-manage",
	          children: [
	            {
	              id: 4.1,
	              name: "车辆资源"
	            },
	            {
	              id: 4.2,
	              name: "急救设备"
	            }
	          ]
	        },
	        {
	          id: 5,
	          name: "急救监控",
	          path: "call-manage",
	          children: [
	            {
	              id: 5.1,
	              name: "实时监控首页"
	            },
	            {
	              id: 5.2,
	              name: "危机事件管理"
	            }
	          ]
	        },
	        {
	          id: 6,
	          name: "管理员管理模块",
	          path: "call-manage",
	          children: [
	            {
	              id: 6.1,
	              name: "人员管理"
	            },
	            {
	              id: 6.2,
	              name: "紧急通讯录"
	            },
	            {
	              id: 6.3,
	              name: "找回密码"
	            }
	          ]
	        }
	      ]
	    };
	  },
	  computed: {},
	  methods: {
	    pickSubMenu(i) {
	      this.subMenu = this.menuList[i].children;
	    },
	    showActive(item) {
	      let path = this.$route.path;
	      let actived = false;
	      item.children.forEach(element => {
	        if (element.path == path) {
	          actived = true;
	        }
	      });
	      return actived;
	    },
	    logout() {
	      LoginApi.logout()
	        .then(resp => {
	          this.$message.info("登出成功");
	          setTimeout(() => {
	            this.$router.replace({
	              path: "/"
	            });
	          }, 1000);
	        })
	        .catch(msg => {
	          this.$message.error(`退出失败${msg}`);
	        });
	    },
	    calActiveMenu(index) {
	      return index + 1;
	    },
	    calActiveSubMenu(index, subIndex) {
	      return index + 1 + (subIndex + 1) * 0.1;
	    },
	    initActiveMenu() {	//初始化菜单
	      let init = false;
	      if (this.menuList) {
	        this.menuList.some((value, index) => {
	          if (value.children) {
	            init = value.children.some((svalue, sindex) => {
	              if (svalue.path && svalue.path.indexOf(this.$route.path) >= 0) {
	                this.activeMenu = this.calActiveMenu(index);
	                this.activeSubMenu = this.calActiveSubMenu(index, sindex);
	                return true;
	              }
	            });
	          }
	          if (init) return true;
	        });
	        if (!init) { //默认为1和1.1
	          this.activeMenu = 1;
	          this.activeSubMenu = 1.1;
	        }
	      }
	    }
	  },
	  created() {},
	  // 页面刷新自动选中导航
	  mounted() {
	    // this.activeMenu = parseInt(sessionStorage.getItem('activeMenu'));
	    // this.activeSubMenu = Number(sessionStorage.getItem('activeSubMenu'));
	  }
	};
</script>

<style lang="scss" scoped>
	@mixin Hcenter() {
	  position: absolute;
	  left: 50%;
	  transform: translateX(-50%);
	}
	.header {
	  width: 100%;
	  height: 112px;
	  background: #3b56b6;
	  .main-nav {
	    background: #fff;
	    $headerHeight: 68px;
	    height: $headerHeight;
	    display: flex;
	    justify-content: space-between;
	    align-items: center;
	    .logo {
	      height: 40px;
	      margin-left: 6%;
	    }
	    .nav {
	      // 一级菜单
	      &__item {
	        display: inline-block;
	        position: relative;
	        margin: 0 10px;
	        padding: 12px 0;
	        border-bottom: 3px solid #fff;
	        cursor: pointer;
	        &_active,
	        &:active,
	        &:hover {
	          border-bottom: 3px solid #3b56b6;
	        }
	      }
	      &__subnav {
	        // 二级菜单
	        position: absolute;
	        left: 50%;
	        transform: translateX(-50%);
	        z-index: 10;
	        top: 65px;
	        display: flex;
	        justify-content: space-between;
	        &-item {
	          text-align: center;
	          width: 6em; //有bug
	          color: #fff;
	          font-size: 13px;
	          display: inline-block;
	          margin: 0 2em;
	          padding: 3px 0;
	          border-bottom: 2px solid #3b56b6;
	          &_active,
	          &:active,
	          &:hover {
	            cursor: pointer;
	            border-bottom: 2px solid #fff;
	          }
	        }
	      }
	    }
	    .profile {
	      margin-right: 6%;
	      padding-left: 1.5%;
	      display: flex;
	      align-items: center;
	      border-left: 1px solid #ddd;
	      &__avatar {
	        position: relative;
	        width: 32px;
	        height: 32px;
	        border-radius: 100px;
	        &:hover {
	          cursor: pointer;
	        }
	      }
	      &__nav {
	        z-index: 99;
	        box-shadow: 0 0 5px #dfdfdf;
	        text-align: center;
	        width: 100px;
	        top: 43px;
	        background: #fff;
	        border-radius: 5px;
	        @include Hcenter();
	        &::before {
	          content: "";
	          @include Hcenter();
	          top: -20px;
	          border-color: transparent transparent #fff transparent;
	          border-width: 10px 10px 10px 10px;
	          border-style: solid;
	          width: 0;
	          height: 0;
	        }
	        a {
	          display: block;
	          padding: 10px 0;
	          border-radius: 5px;
	          &:hover {
	            background: #dfdfdf;
	          }
	          &:active {
	            color: #000;
	          }
	        }
	      }
	      &__logout {
	        margin-left: 1em;
	      }
	    }
	  }
	}
</style>
