<template>
	<section>
		<div class="middle">
			<el-form ref="comonRecieveform" :model="form" label-width="100px" size="small" :rules="rules">
				<el-form-item label="单位名称" prop="currentPsw">
					<el-input v-model="form.currentPsw"></el-input>
				</el-form-item>
				<el-form-item label="联系人" prop="newPsw">
					<el-input v-model="form.newPsw"></el-input>
				</el-form-item>
				<el-form-item label="联系电话" prop="againNewPsw">
					<el-input v-model="form.againNewPsw"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm" class="editBtn">保存</el-button>
				</el-form-item>
			</el-form>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					currentPsw: '乳源县中医院',
					newPsw: '张冉冉',
					againNewPsw: '13900000789'
				},
				rules: {
					currentPsw: [{
						required: true,
						message: "请输入单位名称",
						trigger: "blur"
					}],
					newPsw: [{
						required: true,
						message: "请输入联系人",
						trigger: "blur"
					}],
					againNewPsw: [{
						required: true,
						message: "请输入联系电话",
						trigger: "blur"
					}],
				},
			};
		},
		methods: {
			submitForm() {},
			indexMethod(index) {
				return index + 1;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.middle {
		width: 40%;
		margin: 20px auto;
	}
</style>
<style lang="scss">
.editBtn{
	background: #48b868;
	width: 50%;
	margin: 20px 0;
}
</style>

