<template>
	<header class="header">
		<!-- 顶部大导航条 -->
		<header class="main-nav">
			<!-- logo -->
			<img class="logo" src="@/assets/img/logo-inside.png" alt="logo" />
			<!-- 大导航条 -->
			<nav class="nav">
				<ul>
					<li class="nav__item" v-for="(item, index) in menuList" :key="item.index" v-on:click="pickSubMenu(index)" v-bind:class="{'header-active': showActive(item)}">
						{{item.name}}
					</li>
				</ul>
			</nav>
			<!-- 头像 -->
			<div class="profile">
				<img class="profile__avatar" src="@/assets/img/user.png" alt="user" />
				<a class="profile__loginout" href="#" @click="logout">退出</a>
			</div>
		</header>
		<!-- 底部小导航条 -->
		<nav class="sub-nav">
			<ul>
				<li class="sub-nav__item" v-for="item in subMenu" :key="item.index">
					<router-link :to="item.path">{{item.name}}</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
	import * as LoginApi from "api/login";
	export default {
		data() {
			return {
				subMenu: [],
				menuList: [
					{
						id: 1,
						name: "呼叫管理",
						path: "call-manage",
						active: 1,
						children: [{
								name: "呼叫首页",
								path: "/call-manage"
							},
							{
								name: "通话记录",
								path: "/call-record"
							},
							{
								name: "黑名单",
								path: "/black-list"
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
		.main-nav {
			$headerHeight: 72px;
			height: $headerHeight;
			overflow: hidden;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.logo {
				height: 40px;
				margin-left: 6%;
			}
			.nav {
				&__item {
					float: left;
					margin: 0 10px;
					cursor: pointer;
				}
			}
			.profile {
				margin-right: 6%;
				display: flex;
				align-items: center;
				&__avatar {
					width: 32px;
					height: 32px;
					border-radius: 100px;
				}
			}
		}
		.sub-nav {
			width: 100%;
			height: 36px;
			background: #3B56B6;
			ul {
				color: #fff;
			}
			&__item {
				float: left;
				color: #fff;
			}
		}
	}
</style>
