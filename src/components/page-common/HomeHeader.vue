<template>
	<header class="header">
		<div class="main-nav">
			<!-- logo -->
			<img class="logo" src="@/assets/img/logo-inside.png" alt="logo" />
			<!-- 大导航条 -->
			<nav class="nav">
				<ul>
					<!-- 一级菜单 -->
					<li class="nav__item" :class="{'nav__item_active': activeMenu == 1}" @click="activeMenu = 1" @mouseover="activeMenu = 1, activeSubMenu = 1.1">
						{{`呼叫管理`}}
						<!-- 二级菜单 -->
						<ul class="nav__subnav" v-if="activeMenu == 1">
							<li @click="activeMenu = 1, activeSubMenu = 1.1">
								<a class="nav__subnav-item" :class="{'nav__subnav-item_active': activeSubMenu == 1.1}" href="#/call/index">{{`呼叫首页`}}</a>
							</li>
							<li @click="activeMenu = 1, activeSubMenu = 1.2">
								<a class="nav__subnav-item" :class="{'nav__subnav-item_active': activeSubMenu == 1.2}" href="#/call/record">{{`通话记录`}}</a>
							</li>
							<li @click="activeMenu = 1, activeSubMenu = 1.3">
								<a class="nav__subnav-item" :class="{'nav__subnav-item_active': activeSubMenu == 1.3}" href="#/call/blacklist">{{`黑名单管理`}}</a>
							</li>
						</ul>
					</li>
					<!-- 一级菜单 -->
					<li class="nav__item" @click="activeMenu = 2" @mouseover="activeMenu = 2, activeSubMenu = 2.1" :class="{'nav__item_active': activeMenu == 2}">
						{{`调度管理`}}
						<!-- 二级菜单 -->
						<ul class="nav__subnav" v-if="activeMenu == 2">
							<li @click="activeMenu = 2, activeSubMenu = 2.1">
								<a class="nav__subnav-item" :class="{'nav__subnav-item_active': activeSubMenu == 2.1}" href="#/dispatch/acceptRecord">{{`受理记录`}}</a>
							</li>
							<li @click="activeMenu = 2, activeSubMenu = 2.2">
								<a class="nav__subnav-item" :class="{'nav__subnav-item_active': activeSubMenu == 2.2}" href="#/call/record">{{`实时位置`}}</a>
							</li>
							<li @click="activeMenu = 2, activeSubMenu = 2.3">
								<a class="nav__subnav-item" :class="{'nav__subnav-item_active': activeSubMenu == 2.3}" href="#/call/blacklist">{{`导航管理`}}</a>
							</li>
						</ul>
					</li>
					<!-- 一级菜单 -->
					<li class="nav__item" @click="activeMenu = 3" @mouseover="activeMenu = 3, activeSubMenu = 3.1" :class="{'nav__item_active': activeMenu == 3}">
						{{`人员管理`}}
						<!-- 二级菜单 -->
						<ul class="nav__subnav" v-if="activeMenu == 3">
							<li @click="activeMenu = 3, activeSubMenu = 3.1">
								<a class="nav__subnav-item" :class="{'nav__subnav-item_active': activeSubMenu == 3.1}" href="#/worker/index">{{`人员管理`}}</a>
							</li>
						</ul>
					</li>
					<!-- 一级菜单 -->
					<li class="nav__item" @click="activeMenu = 4" @mouseover="activeMenu = 4, activeSubMenu = 4.1" :class="{'nav__item_active': activeMenu == 4}">
						{{`应急资源管理`}}
						<!-- 二级菜单 -->
						<ul class="nav__subnav" v-if="activeMenu == 4">
							<li @click="activeMenu = 4, activeSubMenu = 4.1">
								<a class="nav__subnav-item" :class="{'nav__subnav-item_active': activeSubMenu == 4.1}" href="#/resource/car">{{`车辆信息`}}</a>
							</li>
							<li @click="activeMenu = 4, activeSubMenu = 4.2">
								<a class="nav__subnav-item" :class="{'nav__subnav-item_active': activeSubMenu == 4.2}" href="#/call/record">{{`急救设备`}}</a>
							</li>
						</ul>
					</li>
					<!-- 一级菜单 -->
					<li class="nav__item" @click="activeMenu = 5" @mouseover="activeMenu = 5, activeSubMenu = 5.1" :class="{'nav__item_active': activeMenu == 5}">
						{{`急救监控`}}
						<!-- 二级菜单 -->
						<ul class="nav__subnav" v-if="activeMenu == 5">
							<li @click="activeMenu = 5, activeSubMenu = 5.1">
								<a class="nav__subnav-item" :class="{'nav__subnav-item_active': activeSubMenu == 5.1}" href="#/monitor/index">{{`实时监控`}}</a>
							</li>
							<li @click="activeMenu = 5, activeSubMenu = 5.2">
								<a class="nav__subnav-item" :class="{'nav__subnav-item_active': activeSubMenu == 5.2}" href="#/monitor/event">{{`危机事件管理`}}</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
			<!-- 头像 -->
			<div class="profile">
				<img class="profile__avatar" src="@/assets/img/user.png" alt="user" />
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
				activeMenu: 1,
				activeSubMenu: 1.1,
				subMenu: [],
				menuList: [{
						id: 1,
						name: "呼叫管理",
						path: "call-manage",
						children: [{
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
						children: [{
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
						children: [{
								id: 3.1,
								name: "人员管理"
							},
						]
					},
					{
						id: 4,
						name: "应急资源管理",
						path: "call-manage",
						children: [{
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
						children: [{
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
						children: [{
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
					},
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
				LoginApi.logout().then(resp => {
					this.$message.info("登出成功");
					setTimeout(() => {
						this.$router.replace({
							path: "/"
						});
					}, 1000);
				}).catch(msg => {
					this.$message.error(`退出失败${msg}`);
				});
			}
		},
	};
</script>

<style lang="scss" scoped>
	.header {
		width: 100%;
		height: 112px;
		background: #3B56B6;
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
						border-bottom: 3px solid #3B56B6;
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
						border-bottom: 2px solid #3B56B6;
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
					width: 32px;
					height: 32px;
					border-radius: 100px;
				}
				&__logout {
					margin-left: 1em;
				}
			}
		}
	}
</style>
