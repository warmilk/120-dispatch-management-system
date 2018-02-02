<template>
	<section class="main-content">
		<section class="detail-info">
			<img class="device-image" src="~img/device-preview.png" alt="device" />
			<div class="device-info">
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
				<span>
					<strong>小儿呼吸机</strong>
				</span>
				<span>状态：正常</span>
			</div>
			<div class="device-info">
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
				<span>普朗医疗 | NLF-200A</span>
				<span>所在区域：粤F-120JJ</span>
			</div>
		</section>
		<el-table ref="carCareTable" :data="deviceCareList" header-row-class-name="center" border tooltip-effect="dark" style="width: 98%;margin-left: 1%;margin-right: 1%;" size="small">
			<el-table-column type="index" :index="indexMethod" label="序号" width="50"> </el-table-column>
			<el-table-column prop="date" label="日期">
			</el-table-column>
			<el-table-column prop="note" label="记录">
			</el-table-column>
		</el-table>
		<el-pagination :current-page="1" :page-sizes="[10, 15, 20, 50]" :page-size="1" layout="total, sizes, prev, pager, next, jumper" :total="3" style="float: right; margin: 1.5rem 1.5rem;">
		</el-pagination>
	</section>
</template>

<script>
	export default {
	  data() {
	    return {
	      deviceCareList,
	      activeName: "first"
	    };
	  },
	  methods: {
	    indexMethod(index) {
	      return index + 1;
	    }
	  }
	};

	// 医院列表模拟的数据;
	var deviceCareList = [
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

	.device-image {
	  height: 80px;
	  width: 80px;
	  float: left;
	  margin-left: 30px;
	}

	.device-info {
	  margin: 15px 0 0 120px;
	  span {
	    padding-left: 40px;
	  }
	}
</style>
