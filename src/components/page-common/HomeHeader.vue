<template>
	<header>
		<div>
			<img src="@/assets/img/logo-inside.png" alt="logo" />
			<ul class="header-ul">
				<li v-for="(item, index) in menuList" :key="item.index" class="item-list" v-on:click="pickSubMenu(index)" v-bind:class="{'header-active': showActive(item)}">
					<!-- <router-link v-if="index === item.active" :to="item.path"  class="header-active">{{item.name}}</router-link>
	        <router-link :to="item.path" v-else>{{item.name}}</router-link> -->
					{{item.name}}
				</li>
			</ul>
			<div class="user">
				<img src="@/assets/img/user.png" alt="user" />
				<a href="#" @click="logout">退出</a>
			</div>
		</div>
		<section class="menu">
			<ul>
				<li v-for="item in subMenu" :key="item.index">
					<router-link :to="item.path">{{item.name}}</router-link>
				</li>
			</ul>
		</section>
	</header>
</template>

<script>
	import * as LoginApi from "api/login";
	export default {
		data() {
			return {
				subMenu: []
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
			}
		},
		props: ["menuList"]
	};
</script>

<style lang="scss" scoped>
	header {
		img {
			display: inline-block;
			margin-top: 1%;
			margin-left: 5%;
		}
		ul.header-ul {
			display: inline-block;
			width: 60%; // margin-top: 1.0rem;
			color: #333333;
			li {
				font-size: 0.88rem;
				display: inline;
				margin-left: 5%;
				color: #333333;
				line-height: 4rem;
				padding-bottom: 0.5rem;
				&.header-active {
					border-bottom: 2px solid #3b56b6;
				} // line-height: 3rem;
				&:first-child {
					margin-left: 13%;
				}
				&:hover {
					cursor: pointer;
				}
			}
		}
	}
	.menu {
		margin: 0;
		height: 36px;
		background: #3b56b6;
		ul {
			font-size: 1rem;
			margin-left: 160px;
			li {
				margin-left: 64px;
				display: inline-block;
				a {
					display: inline-block;
					color: #ffffff;
					line-height: 2.2rem;
				}
			}
		}
	}
	.router-link-exact-active {
		border-bottom: 2px solid #ffffff;
	}
	.user {
		float: right;
		width: 10rem;
		text-align: center;
		border-left: 2px solid #e9e9e9;
		margin-top: 1rem;
		a {
			line-height: 2.5rem;
			margin-left: 0.5rem;
			color: #333333;
			font-size: 0.75rem;
		}
	}
</style>
