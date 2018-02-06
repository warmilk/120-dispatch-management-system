<template>
	<header class="header">
		<div class="main-nav">
			<!-- logo -->
			<img class="logo" src="@/assets/img/logo-inside.png" alt="logo" />
			<!-- 大导航条 -->
			<nav class="nav">
				<ul>
					<template v-for="(item, index) in menuList">
						<template v-for="(cItem, cIndex) in item.children">
							<!-- 一级菜单 -->
							<li class="nav__item" :class="{'nav__item_active': activeMenu == item.id}" @click="activeMenu = item.id" @mouseover="activeMenu = item.id, activeSubMenu = cItem.id" :key="index">
								{{`${item.name}`}}
								<!-- 二级菜单 -->
								<ul class="nav__subnav" v-if="activeMenu == item.id">
									<li @click="activeMenu = item.id, activeSubMenu = cItem.id" :key="cIndex">
										<a class="nav__subnav-item" :class="{'nav__subnav-item_active': activeSubMenu == cItem.id}" href="#/call/index">{{`${cItem.name}`}}</a>
									</li>
								</ul>
							</li>
						</template>
					</template>
				</ul>
			</nav>
			<!-- 头像 -->
			<div class="profile">
				<div class="profile__avatar">
					<img src="@/assets/img/user.png" alt="user" @click="profileNavVisable = !profileNavVisable,profileModalVisable = !profileModalVisable" @mouseover="profileNavVisable = true, profileModalVisable = true"/>
					<!-- 头像下弹菜单 -->
					<nav class="profile__nav" v-show="profileNavVisable">
						<ul>
							<li @click="profileNavVisable = !profileNavVisable, profileModalVisable = !profileModalVisable">
								<a href="#/profile/index">个人资料</a>
							</li>
							<li @click="profileNavVisable = !profileNavVisable, profileModalVisable = !profileModalVisable">
								<a href="#/profile/editPassword">修改密码</a>
							</li>
						</ul>
					</nav>
				</div>
				<a class="profile__logout" href="#" @click="logout">退出</a>
			</div>
			<!-- 头像下弹菜单模态框 -->
			<div class="profile__modal" v-if="profileModalVisable" @click="profileNavVisable = false; profileModalVisable = false">
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
				profileModalVisable: false,
				activeMenu: null,
				activeSubMenu: null,
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
					// {
					// 	id: 3,
					// 	name: "人员管理",
					// 	path: "call-manage",
					// 	children: [{
					// 		id: 3.1,
					// 		name: "人员管理"
					// 	}, ]
					// },
					// {
					// 	id: 4,
					// 	name: "应急资源管理",
					// 	path: "call-manage",
					// 	children: [{
					// 			id: 4.1,
					// 			name: "车辆资源"
					// 		},
					// 		{
					// 			id: 4.2,
					// 			name: "急救设备"
					// 		}
					// 	]
					// },
					// {
					// 	id: 5,
					// 	name: "急救监控",
					// 	path: "call-manage",
					// 	children: [{
					// 			id: 5.1,
					// 			name: "实时监控首页"
					// 		},
					// 		{
					// 			id: 5.2,
					// 			name: "危机事件管理"
					// 		}
					// 	]
					// },
					// {
					// 	id: 6,
					// 	name: "管理员管理模块",
					// 	path: "call-manage",
					// 	children: [{
					// 			id: 6.1,
					// 			name: "人员管理"
					// 		},
					// 		{
					// 			id: 6.2,
					// 			name: "紧急通讯录"
					// 		},
					// 		{
					// 			id: 6.3,
					// 			name: "找回密码"
					// 		}
					// 	]
					// },
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
		created() {},
		// 页面刷新自动选中导航
		mounted() {
			this.activeMenu = parseInt(sessionStorage.getItem('activeMenu'));
			this.activeSubMenu = Number(sessionStorage.getItem('activeSubMenu'));
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
					position: relative;
					width: 32px;
					height: 32px;
					border-radius: 100px;
					&:hover {
						cursor: pointer;
					}
				}
				$menuZindex: 99;
				&__modal {// 模态框，用于点击区域自动隐藏下弹菜单
					position: absolute;
					left: 0;
					top: $headerHeight;
					right: 0;
					bottom: 0;
					width: 100%;
					z-index: $menuZindex;
					// background: red;
					// opacity: .4;
				}
				&__nav {
					z-index: $menuZindex + 1;
					box-shadow: 0 0 5px #dfdfdf;
					text-align: center;
					width: 100px;
					top: 43px;
					background: #fff;
					border-radius: 5px;
					@include Hcenter();
					&::before {
						content: '';
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
