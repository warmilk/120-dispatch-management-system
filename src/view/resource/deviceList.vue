<template>
		<section class="main-content">
			<el-form :inline="true" :model="formInline" size="small" style="padding: 0 15px;">
				<el-form-item label="名称" >
					<el-input v-model="formInline.name"></el-input>
				</el-form-item>
				<el-form-item label="品牌">
					<el-input v-model="formInline.brand"></el-input>
				</el-form-item>
				<el-form-item label="型号">
					<el-input v-model="formInline.type"></el-input>
				</el-form-item>
				<el-form-item label="状态">
					<el-select v-model="formInline.status">
						<el-option label="全部" value="0"></el-option>
						<el-option label="正常" value="1"></el-option>
						<el-option label="报废" value="2"></el-option>
						<el-option label="保养/检修" value="3"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="filterData">搜索</el-button>
				</el-form-item>
			</el-form>
			<el-table ref="multipleTable" :data="deviceList" header-row-class-name="center" border tooltip-effect="dark" style="width: 98%;margin-left: 1%;margin-right: 1%;" size="small">
				<el-table-column type="index" :index="indexMethod" label="序号"> </el-table-column>
				<el-table-column prop="name" label="设备名称">
				</el-table-column>
				<el-table-column prop="brand" label="品牌">
				</el-table-column>
				<el-table-column prop="type" label="型号">
				</el-table-column>
				<el-table-column prop="region" label="所在区域">
				</el-table-column>
				<el-table-column prop="status" label="状态">
				</el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button type="text" size="small" @click="seeDetail(scope.row.id)">保养记录</el-button>
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
	      deviceList,
	      formInline: {
	        name: "",
	        brand: "",
	        type: "",
	        status: ""
	      }
	    };
	  },
	  methods: {
	    indexMethod(index) {
	      return index + 1;
			},
			seeDetail(id) {
				this.$router.push({name: 'deviceDetail', params:{id}});
			},
			filterData() {
				
			}
	  }
	};

	var deviceList = [
	  {
	    id: 1,
	    name: "小儿呼吸机",
	    brand: "普朗医疗",
	    type: "JHW5040XJHJX",
	    region: "院内",
	    status: "正常"
	  },
	  {
	    id: 2,
	    name: "医用磁共振成像系统",
	    brand: "飞利浦",
	    type: "JHW5040XJHJX",
	    region: "院内",
	    status: "保养/检修"
	  },
	  {
	    id: 3,
	    name: "移动式C形臂X射线系统",
	    brand: "飞利浦",
	    type: "JHW5040XJHJX",
	    region: "院内",
	    status: "正常"
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
