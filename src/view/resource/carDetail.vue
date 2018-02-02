<template>
	<section class="main-content">
		<section class="detail-info">
			<img class="car-image" src="~img/car-preview.png" alt="car" />
			<div class="car-info">
				<!-- <el-row>
					<el-col :span="8">
						<span>车牌号:粤F000021</span>
					</el-col>
					<el-col :span="8">
						<span>联系电话：13312345678</span>
					</el-col>
					<el-col :span="8">
						<span>状态：途中待命</span>
					</el-col>
				</el-row> -->
				<span><strong>车牌号:粤F000021</strong></span>
				<span>联系电话：13312345678</span>
				<span>状态：途中待命</span>
			</div>
			<div class="car-info">
				<!-- <el-row>
					<el-col :span="8">
						<span>多士星 | JHW5040XJHJX</span>
					</el-col>
					<el-col :span="8">
						<span>购买时间：2016-01-01</span>
					</el-col>
					<el-col :span="8">
						<span>使用年限：9年</span>
					</el-col>
				</el-row> -->
				<span>多士星 | JHW5040XJHJX</span>
				<span>购买时间：2016-01-01</span>
				<span>使用年限：9年</span>
			</div>
		</section>
		<el-tabs type="card" style="padding: 0 10px;" v-model="activeName">
			<el-tab-pane label="保养记录" name="first">
				<el-table ref="carCareTable" :data="carCareList" header-row-class-name="center" border tooltip-effect="dark" style="width: 98%;margin-left: 1%;margin-right: 1%;" size="small">
					<el-table-column type="index" :index="indexMethod" label="序号" width="50"> </el-table-column>
					<el-table-column prop="date" label="日期">
					</el-table-column>
					<el-table-column prop="note" label="记录">
					</el-table-column>
				</el-table>
				<el-pagination :current-page="1" :page-sizes="[10, 15, 20, 50]" :page-size="1" layout="total, sizes, prev, pager, next, jumper" :total="3" style="float: right; margin: 1.5rem 1.5rem;">
				</el-pagination>
			</el-tab-pane>
			<el-tab-pane label="车载医疗设备" name="second">
				<el-table ref="carDevicesTable" :data="carDevicesList" header-row-class-name="center" border tooltip-effect="dark" style="width: 98%;margin-left: 1%;margin-right: 1%;" size="small">
					<el-table-column type="index" :index="indexMethod" label="序号" width="50"> </el-table-column>
					<el-table-column prop="name" label="设备名称">
					</el-table-column>
					<el-table-column prop="brand" label="品牌">
					</el-table-column>
					<el-table-column prop="type" label="型号">
					</el-table-column>
					<el-table-column prop="brand" label="操作">
						<template slot-scope="scope">
							<el-button type="text" size="small">保养记录</el-button>
						</template>
					</el-table-column>
				</el-table>
				<el-pagination :current-page="1" :page-sizes="[10, 15, 20, 50]" :page-size="1" layout="total, sizes, prev, pager, next, jumper" :total="3" style="float: right; margin: 1.5rem 1.5rem;">
				</el-pagination>
			</el-tab-pane>
		</el-tabs>
	</section>
</template>

<script>
	export default {
	  data() {
	    return {
	      carDevicesList,
				carCareList,
				activeName: 'first'
	    };
	  },
	  methods: {
	    indexMethod(index) {
	      return index + 1;
	    }
	  }
	};

	// 医院列表模拟的数据;
	var carCareList = [
	  {
	    id: 1,
	    date: "2017-09-12",
	    note: "保养/检修"
	  },
	  {
	    id: 2,
	    date: "2016-08-11",
	    note: "报废"
	  },
	  {
	    id: 3,
	    date: "2015-02-06",
	    note: "报废"
	  }
	];

	var carDevicesList = [
	  {
	    id: 1,
	    name: "急救呼吸机",
	    brand: "九久信",
	    type: "9XL3QN"
	  },
	  {
	    id: 2,
	    name: "笔记本式B超",
	    brand: "KONTED",
	    type: "Q8JJ2"
	  },
	  {
	    id: 3,
	    name: "笔记本式B超",
	    brand: "久九信",
	    type: "KKL9065M"
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
	}

	.detail-info {
	  padding: 20px 10px;
	  overflow: auto;
	}

	.car-image {
	  height: 80px;
	  width: 132px;
	  float: left;
	  margin-left: 10px;
	}

	.car-info {
	  margin: 15px 0 0 150px;;
	  span {
	    padding-left: 40px;
	  }
	}
</style>
