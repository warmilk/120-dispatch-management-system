<template>
	<section>
		<HospitalsNavComponent @selectHospital="selectHospital"></HospitalsNavComponent>
		<router-view />
	</section>
</template>

<script>

	import WorkerListComponent from '@/view/worker/workerList.vue';
	import WorkerDetailComponent from '@/view/worker/workerDetail.vue';
	import HospitalsNavComponent from '@/components/page-common/HospitalsNav.vue';
	export default {
	  data() {
	    return {
				activeIndex :0,
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
			},
			activeItemIndex(index) {
				this.activeIndex = index;
			},
			selectHospital(hosp) {

			}
		},
		components: {
			WorkerListComponent,
			WorkerDetailComponent,
			HospitalsNavComponent
		}
	};



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
	    &.active-li {
	      color: #3b56b6;
	      border-left: 3px solid #3b56b6;
	    }
	  }
	}
</style>
