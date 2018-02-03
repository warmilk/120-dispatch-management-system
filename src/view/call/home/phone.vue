<template>
	<div class="phone-container">
		<img class="avatar" :src="require('assets/img/来电-大头像.png')" alt="">
		<p class="number">0755-28102215</p>
		<p class="address">广东深圳&nbsp;电信</p>
		<p class="detail">近1个月来电5000次</p>
		<div class="handle">
			<button><img :src="require('assets/img/挂断.png')" alt=""></button>
			<button><img :src="require('assets/img/接听.png')" alt=""></button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				"callRecords": [{
					"id": 1,
					"address": "广东广州",
					"phone": "13890228795",
					"time": "昨天15:00"
				}, {
					"id": 2,
					"address": "广东广州",
					"phone": "13890228795",
					"time": "昨天15:00"
				}]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.phone-container {
		position: absolute;
		z-index: 3;
		box-sizing: border-box;
		width: 20%;
		height: 518px;
		font-size: 14px;
		background: #8d7373;
		right: 0;
		background: #FFFFFF;
		box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.15);
		text-align: center;
		.avatar {
			width: 35%;
			margin-top: 10%;
		}
		.number {
			margin-top: 15%;
			font-family: PingFang-SC-Regular;
			font-size: 24px;
			color: #333333;
		}
		.address {
			font-family: PingFang-SC-Regular;
			font-size: 14px;
			color: #999999;
		}
		.detail {
			margin-top: 60%;
			font-family: PingFang-SC-Regular;
			font-size: 14px;
			color: #333333;
		}
		.handle{
			width: 100%;
			// background: red;
			margin-top: 15%;
			button{
				border: none;
				outline: none;
				margin: 0 2%;
				width: 38%;
				img{
					width: 100%;
				}
			}
		}
	}
</style>
