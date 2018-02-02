<template>
	<section>
		<section class="left-nav">
			<section class="nav-title">
				急救站列表
			</section>
			<ul class="nav-ul">
				<li v-for="item in hospitalList" :key="item.id">{{item.name}}</li>
			</ul>
		</section>
		<router-view />
	</section>
</template>

<script>

	import CarListComponent from '@/view/resource/carList.vue';
	import CarDetailComponent from '@/view/resource/carDetail.vue';
	export default {
	  data() {
	    return {
	      hospitalList: hospitalList,
	      carList: carList,
	      formInline: {
	        carNo: "",
	        carType: "",
	        carStatus: ""
	      }
	    };
	  },
	  methods: {
	    indexMethod(index) {
	      return index + 1;
	    }
		},
		components: {
			CarListComponent,
			CarDetailComponent
		}
	};



	// 医院列表模拟的数据;
	var hospitalList = [
	  {
	    id: 1,
	    name: "乳源县瑶族自治区120中心"
	  },
	  {
	    id: 2,
	    name: "乳源中医院120中心"
	  },
	  {
	    id: 3,
	    name: "乳源县瑶族自治区120中心"
	  },
	  {
	    id: 4,
	    name: "乳源中医院120中心"
	  },
	  {
	    id: 5,
	    name: "乳源第一人民医院120中心"
	  },
	  {
	    id: 6,
	    name: "乳源县瑶族自治区120中心"
	  },
	  {
	    id: 7,
	    name: "乳源中医院120中心"
	  },
	  {
	    id: 8,
	    name: "乳源第一人民医院120中心"
	  }
	];

	var carList = [
	  {
	    id: 1,
	    carNo: "粤F-120JJ",
	    brand: "多士星",
	    type: "JHW5040XJHJX",
	    buyTime: "2015年",
	    usageLimit: "10年",
	    contactPhone: "13872409888",
	    status: "途中待命"
	  },
	  {
	    id: 2,
	    carNo: "粤F-120JJ",
	    brand: "多士星",
	    type: "JHW5040XJHJX",
	    buyTime: "2015年",
	    usageLimit: "9年",
	    contactPhone: "13872409888",
	    status: "站内待命"
	  },
	  {
	    id: 3,
	    carNo: "粤F-120JJ",
	    brand: "多士星",
	    type: "JHW5040XJHJX",
	    buyTime: "2015年",
	    usageLimit: "8年",
	    contactPhone: "13872409888",
	    status: "出诊中"
	  }
	];
</script>


<style lang="scss" scoped>
	* {
	  margin: 0;
	  padding: 0;
	  box-sizing: border-box;
	}

	.left-nav {
	  width: 20%;
	  float: left;
	}
	.nav-title {
	  height: 40px;
	  color: #ffffff;
	  background: #7680a5;
	  text-align: center;
	  line-height: 40px;
	  font-size: 14px;
	}
	.nav-ul {
	  li {
	    list-style-position: inside;
	    list-style-image: url("~img/right-arrow.png");
	    list-style-type: none;
	    margin-top: 1px;
	    padding-left: 15px;
	    height: 46px;
	    font-size: 12px;
	    color: #333333;
	    background: #f9f9f9;
	    line-height: 46px;

	    &:hover {
	      color: #3b56b6;
	      border-left: 3px solid #3b56b6;
	    }
	    .active-li {
	      color: #3b56b6;
	      border-left: 3px solid #3b56b6;
	    }
	  }
	}
</style>
