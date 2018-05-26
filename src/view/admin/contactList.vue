<template>
	<section>
		<el-form :inline="true" :model="formInline" size="small" style="padding: 10px 15px;">
			<el-form-item style="float:right;">
				<el-button type="primary" @click="$router.push('/admin/contactAdd')">新建联系人</el-button>
			</el-form-item>
		</el-form>
		<el-table ref="multipleTable" :data="workerList" header-row-class-name="center" border tooltip-effect="dark" style="width: 98%;margin-left: 1%;margin-right: 1%;" size="small">
			<el-table-column type="index" :index="indexMethod" label="序号"> </el-table-column>
			<el-table-column prop="deptName" label="单位名称">
			</el-table-column>
			<el-table-column prop="workerName" label="联系人名称">
			</el-table-column>
			</el-table-column>
			<el-table-column prop="phoneNo" label="手机号">
			</el-table-column>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
	          <el-button type="text" size="small" @click="seeDetail(scope.row.id)">修改</el-button>
	          <span>|</span>
	          <el-button type="text" size="small" @click="open(scope.row)">删除</el-button>
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
				workerList,
				formInline: {
					name: ""
				}
			};
		},
		methods: {
			indexMethod(index) {
				return index + 1;
			},
			seeDetail(id) {
				this.$router.push({
					name: 'contactEdit',
					params: {
						id: id
					}
				});
			},
			filterData() {},
			open(r) {
				if (r.status == "禁用") {
					this.enableWorker(r);
				} else {
					this.disableWorker(r);
				}
			},
			disableWorker(r) {
				this.$confirm(`是否删除 ${r.workerName}`, "提示", {
						confirmButtonText: "确定",
						cancelButtonText: "取消",
						type: "error"
					})
					.then(() => {
						this.$message({
							type: "success",
							message: "删除成功!"
						});
						workerList.splice(workerList.findIndex(item => item.id === r.id), 1)
					})
					.catch(() => {
						this.$message({
							type: "info",
							message: "已取消"
						});
					});
			},
			enableWorker(r) {
				this.$confirm(`是否启用 ${r.email}`, "提示", {
						confirmButtonText: "确定",
						cancelButtonText: "取消",
						type: "warning"
					})
					.then(() => {
						this.$message({
							type: "success",
							message: "启用成功!"
						});
					})
					.catch(() => {
						this.$message({
							type: "info",
							message: "已取消"
						});
					});
			}
		}
	};
	var workerList = [{
			deptName: '乳源县中医院',
			workerName: "张冉冉",
			phoneNo: "13900000789",
		},
		{
			deptName: '乳源县第一人民医院',
			workerName: "张根硕",
			phoneNo: "13308033531",
		},
		{
			deptName: '乳源县中医院',
			workerName: "李冰冰",
			phoneNo: "13307733531",
		}
	];
</script>


<style lang="scss" scoped>

</style>