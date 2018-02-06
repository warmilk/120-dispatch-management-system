<template>
	<header class="header">
		<div class="main-nav">
			<!-- logo -->
			<img class="logo" src="@/assets/img/logo-inside.png" alt="logo" />
			<!-- 大导航条 -->
			<nav class="nav">
				<!-- @mouseout="initActiveMenu" -->
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
							<li v-for="(subItem, subIndex) in item.children" :key="subIndex" @click="activeMenu = calActiveMenu(index), activeSubMenu = calActiveSubMenu(index, subIndex), saveActiveSubMenu(activeSubMenu)">
								<a class="nav__subnav-item" :class="{'nav__subnav-item_active': activeSubMenu ==  calActiveSubMenu(index, subIndex)}" :href="`#${subItem.path}`">{{subItem.name}}</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
			<!-- 头像 -->
			<div class="profile">
				<div class="profile__avatar">
					<img src="@/assets/img/user.png" alt="user" @click="profileNavVisable = !profileNavVisable,profileModalVisable = !profileModalVisable" @mouseover="profileNavVisable = true, profileModalVisable = true" />
					<!-- 头像下弹菜单 -->
					<nav class="profile__nav" v-show="profileNavVisable">
						<ul>
							<li @click="profileNavVisable = !profileNavVisable, profileModalVisable = !profileModalVisable">
								<a href="#/profile/index">个人资料</a>
							</li>
							<li @click="profileNavVisable = !profileNavVisable; profileModalVisable = !profileModalVisable">
								<a href="#/profile/editPassword">修改密码</a>
							</li>
						</ul>
					</nav>
				</div>
				<a class="profile__logout" href="#" @click="logout">退出</a>
			</div>
			<!-- 头像下弹菜单模态框 -->
			<div class="profile__modal" v-if="profileModalVisable" @click="profileNavVisable = false; profileModalVisable = false" @mouseover="profileNavVisable = false; profileModalVisable = false">
			</div>
		</div>
	</header>
</template>

<script>
	import * as LoginApi from "api/login";
	import {
		log
	} from 'util';
	export default {
		data() {
			return {
				profileNavVisable: false,
				profileModalVisable: false,
				activeMenu: null,
				activeSubMenu: null,
				subMenu: [],
				menuList: [{
						name: "呼叫管理",
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
						name: "调度管理",
						children: [{
								name: "受理记录",
								path: "/dispatch/acceptRecord"
							},
							{
								name: "实时位置",
								path: "/dispatch/realTimePosition"
							},
							{
								name: "导航管理",
								path: "/dispatch/navigationManage"
							}
						]
					},
					{
						name: "人员管理",
						children: [{
							name: "人员管理",
							path: "/worker"
						}]
					},
					{
						name: "应急资源管理",
						children: [{
								name: "车辆资源",
								path: "/resource/car"
							},
							{
								name: "急救设备",
								path: "/resource/device"
							}
						]
					},
					{
						name: "急救监控",
						children: [{
								name: "实时监控首页",
								path: "/monitor/index"
							},
							{
								name: "危机事件管理",
								path: "/monitor/event"
							}
						]
					},
					{
						name: "管理员管理模块",
						children: [{
								name: "人员管理",
								path: "/admin/account"
							},
							{
								name: "紧急通讯录",
								path: "/call/index"
							},
							{
								name: "找回密码",
								path: "/call/index"
							}
						]
					}
				]
			};
		},
		computed: {},
		methods: {
			calActiveMenu(index) {
				return index + 1;
			},
			calActiveSubMenu(index, subIndex) {
				return index + 1 + (subIndex + 1) * 0.1;
			},
			// 保存上次选中的子菜单，用于刷新页面后自动选中
			saveActiveSubMenu(index) {
				sessionStorage.setItem('activeMenu', parseInt(index))
				sessionStorage.setItem('activeSubMenu', index)
			},
			// 页面刷新自动选中导航
			keepActiveMenu() {
				this.activeMenu = Number(sessionStorage.getItem('activeMenu'));
				this.activeSubMenu = Number(sessionStorage.getItem('activeSubMenu'));
			},
			//初始化菜单
			// initActiveMenu() {
			// 	let init = false;
			// 	if (this.menuList) {
			// 		this.menuList.some((value, index) => {
			// 			if (value.children) {
			// 				init = value.children.some((svalue, sindex) => {
			// 					if (svalue.path && svalue.path.indexOf(this.$route.path) >= 0) {
			// 						this.activeMenu = this.calActiveMenu(index);
			// 						this.activeSubMenu = this.calActiveSubMenu(index, sindex);
			// 						return true;
			// 					}
			// 				});
			// 			}
			// 			if (init) return true;
			// 		});
			// 		if (!init) { //默认为1和1.1
			// 			this.activeMenu = 1;
			// 			this.activeSubMenu = 1.1;
			// 		}
			// 	}
			// },
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
		},
		created() {},
		mounted() {
			this.keepActiveMenu();
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
				&__modal {
					// 模态框，用于点击区域自动隐藏下弹菜单
					position: absolute;
					left: 0;
					top: $headerHeight;
					right: 0;
					bottom: 0;
					width: 100%;
					z-index: $menuZindex; // background: red;
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
