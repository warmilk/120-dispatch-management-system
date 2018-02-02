<template>
	<header class="header">
		<!-- 顶部大导航条 -->
		<div class="main-nav">
			<!-- logo -->
			<img class="logo" src="@/assets/img/logo-inside.png" alt="logo" />
			<!-- 大导航条 -->
			<nav class="nav">
				<ul>
					<!-- 一级菜单 -->
					<li class="nav__item" :class="{'nav__item_active': activeMenu == 1}" @click="activeMenu = 1" @mouseover="activeMenu = 1">
						{{`呼叫管理`}}
						<!-- 二级菜单 -->
						<ul class="nav__subnav" v-if="activeMenu == 1">
							<li @click="activeMenu = 1, activeSubMenu = 1.1">
								<a class="nav__subnav-item" :class="{'nav__subnav-item_active': activeSubMenu == 1.1}" href="#/call/index">二级菜单啊啊</a>
							</li>
							<li>
								<a class="nav__subnav-item" href="#/call/record">二级菜单</a>
							</li>
							<li>
								<a class="nav__subnav-item" href="#/call/blacklist">二级菜单</a>
							</li>
						</ul>
					</li>
					<!-- 一级菜单 -->
					<li class="nav__item" @click="activeMenu = 2" @mouseover="activeMenu = 2">
						{{`调度管理`}}
					</li>
					<!-- 一级菜单 -->
					<li class="nav__item" @click="activeMenu = 3" @mouseover="activeMenu = 3">
						{{`人员管理`}}
						<!-- 二级菜单 -->
						<ul class="nav__subnav" v-if="activeMenu == 3">
							<li class="nav__subnav-item">
								二级菜单
							</li>
							<li class="nav__subnav-item">
								二级菜单
							</li>
							<li class="nav__subnav-item">
								二级菜单
							</li>
							<li class="nav__subnav-item">
								二级菜单
							</li>
						</ul>
					</li>
					<!-- 一级菜单 -->
					<li class="nav__item" @click="activeMenu = 4" @mouseover="activeMenu = 4">
						{{`应急资源管理`}}
						<!-- 二级菜单 -->
						<ul class="nav__subnav" v-if="activeMenu == 4">
							<li class="nav__subnav-item">
								二级菜单
							</li>
							<li class="nav__subnav-item">
								二级菜单
							</li>
							<li class="nav__subnav-item">
								二级菜单
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
						active: 1,
						children: [{
								name: "呼叫首页",
								path: "/call/index"
							},
							{
								name: "通话记录",
								path: "/call/record"
							},
							{
								name: "黑名单",
								path: "/call/blacklist"
							}
						]
					},
					{
						id: 2,
						name: "调度管理",
						path: "call-manage",
						active: 2,
						children: [{
								name: "呼叫首页"
							},
							{
								name: "通话记录"
							},
							{
								name: "调度管理"
							}
						]
					},
					{
						id: 3,
						name: "人员管理",
						path: "call-manage",
						active: 3,
						children: [{
								name: "呼叫首页"
							},
							{
								name: "通话记录"
							},
							{
								name: "调度管理"
							}
						]
					},
					{
						id: 4,
						name: "应急资源管理",
						path: "call-manage",
						active: 4,
						children: [{
								name: "呼叫首页"
							},
							{
								name: "通话记录"
							},
							{
								name: "调度管理"
							}
						]
					},
					{
						id: 5,
						name: "急救监控",
						path: "call-manage",
						active: 5,
						children: [{
								name: "呼叫首页"
							},
							{
								name: "通话记录"
							},
							{
								name: "调度管理"
							}
						]
					},
					{
						id: 6,
						name: "管理员管理模块",
						path: "call-manage",
						active: 6,
						children: [{
								name: "人员管理"
							},
							{
								name: "紧急通讯录"
							},
							{
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
		.sub-nav {
			width: 100%;
			height: 40px;
			background: #3B56B6;
			display: flex;
			align-items: center;
			ul {
				position: absolute;
			}
			&__item {
				float: left;
				margin: 0 1em;
				font-size: 13px;
				padding: 3px 0;
				border-bottom: 2px solid #3B56B6;
				&:hover {
					cursor: pointer;
					border-bottom: 2px solid #fff;
				}
				a {
					color: #fff;
				}
			}
		}
	}
</style>
