<template>
	<section class="main-content">
		<el-form :inline="true" :model="formInline" size="small">
			<el-row style="margin-left: 3rem;">
				<el-col :span="8">
					<el-form-item label="姓名">
						<el-input v-model="formInline.carNo"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="性别">
						<el-select v-model="formInline.carStatus">
							<el-option label="全部" value="0"></el-option>
							<el-option label="男" value="1"></el-option>
							<el-option label="女" value="2"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="电话">
						<el-input v-model="formInline.carType"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row style="margin-left: 3rem;">
				<el-col :span="8">
					<el-form-item label="科室">
						<el-input v-model="formInline.carType"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item label="职务">
						<el-input v-model="formInline.carType"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="8">
					<el-form-item>
						<el-button type="primary" @click="filterData">搜索</el-button>
					</el-form-item>
				</el-col>
			</el-row>
		</el-form>
		<el-table ref="multipleTable" :data="workerList" header-row-class-name="center" border tooltip-effect="dark" style="width: 98%;margin-left: 1%;margin-right: 1%;" size="small">
			<el-table-column type="index" :index="indexMethod" label="序号"> </el-table-column>
			<el-table-column prop="name" label="姓名">
			</el-table-column>
			<el-table-column prop="workerNo" label="工号">
			</el-table-column>
			<el-table-column prop="sex" label="性别">
			</el-table-column>
			<el-table-column prop="position" label="职称">
			</el-table-column>
			<el-table-column prop="workType" label="职务">
			</el-table-column>
			<el-table-column prop="contactPhone" label="电话">
			</el-table-column>
			<el-table-column prop="dept" label="所在科室">
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
				workerList: workerList,
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
				this.$router.push({
					name: 'workerDetail',
					params: {
						id
					}
				});
			},
			filterData() {}
		}
	};
	// 医院列表模拟的数据;
	var hospitalList = [{
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
	var workerList = [{
			id: 1,
			name: "胡佳文",
			workerNo: "10253",
			sex: "男",
			position: "主任护师",
			workType: "一般医生",
			contactPhone: "13872409888",
			dept: "外科-普通外科"
		},
		{
			id: 1,
			name: "胡佳文",
			workerNo: "10253",
			sex: "男",
			position: "主任护师",
			workType: "一般医生",
			contactPhone: "13872409888",
			dept: "外科-普通外科"
		},{
			id: 1,
			name: "胡佳文",
			workerNo: "10253",
			sex: "男",
			position: "主任护师",
			workType: "一般医生",
			contactPhone: "13872409888",
			dept: "外科-普通外科"
		},{
			id: 1,
			name: "胡佳文",
			workerNo: "10253",
			sex: "男",
			position: "主任护师",
			workType: "一般医生",
			contactPhone: "13872409888",
			dept: "外科-普通外科"
		},{
			id: 1,
			name: "胡佳文",
			workerNo: "10253",
			sex: "男",
			position: "主任护师",
			workType: "一般医生",
			contactPhone: "13872409888",
			dept: "外科-普通外科"
		},{
			id: 1,
			name: "胡佳文",
			workerNo: "10253",
			sex: "男",
			position: "主任护师",
			workType: "一般医生",
			contactPhone: "13872409888",
			dept: "外科-普通外科"
		},
	];
</script>


<style lang="scss" scoped>
	.main-content {
		width: 80%;
		display: inline-block;
		padding-top: 20px;
	}
</style>
