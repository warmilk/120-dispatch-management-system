<template>
		<section class="main-content">
			<el-form :inline="true" :model="formInline" size="small">
				<el-form-item label="车牌号" style="margin-left:3rem;">
					<el-input v-model="formInline.carNo"></el-input>
				</el-form-item>
				<el-form-item label="型号">
					<el-input v-model="formInline.carType"></el-input>
				</el-form-item>
				<el-form-item label="车辆状态">
					<el-select v-model="formInline.carStatus">
						<el-option label="全部" value="0"></el-option>
						<el-option label="正常" value="1"></el-option>
						<el-option label="报废" value="2"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="filterData">搜索</el-button>
				</el-form-item>
			</el-form>
			<el-table ref="multipleTable" :data="carList" header-row-class-name="center" border tooltip-effect="dark" style="width: 98%;margin-left: 1%;margin-right: 1%;" size="small">
				<el-table-column type="index" :index="indexMethod" label="序号"> </el-table-column>
				<el-table-column prop="carNo" label="车牌号">
				</el-table-column>
				<el-table-column prop="brand" label="品牌">
				</el-table-column>
				<el-table-column prop="type" label="型号">
				</el-table-column>
				<el-table-column prop="buyTime" label="购买时间">
				</el-table-column>
				<el-table-column prop="usageLimit" label="使用年限">
				</el-table-column>
				<el-table-column prop="contactPhone" label="联系电话">
				</el-table-column>
				<el-table-column prop="status" label="状态">
				</el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button type="text" size="small" @click="seeDetail(scope.row.id)">查看</el-button>
					</template>
				</el-table-column>

			</el-table>
			<!-- <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page.current" :page-sizes="[10, 15, 20, 50]" :page-size="page.size" layout="total, sizes, prev, pager, next, jumper" :total="page.total" style="float: right; margin: 1.5rem 1.5rem;">
			</el-pagination> -->
			<el-pagination :current-page="1" :page-sizes="[10, 15, 20, 50]" :page-size="1" layout="total, sizes, prev, pager, next, jumper" :total="3" style="float: right; margin: 1.5rem 1.5rem;">
			</el-pagination>
		</section>
</template>

<script>
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
			},
			seeDetail(id) {
				this.$router.push({name: 'carDetail', params:{id}});
			},
			filterData() {
				
			}
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

	.main-content {
	  width: 80%;
	  display: inline-block;
	  padding-top: 20px;
	}
</style>
