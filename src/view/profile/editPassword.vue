<template>
	<section>
		<div class="middle">
			<el-form ref="comonRecieveform" :model="form" label-width="100px" size="small" :rules="rules">
				<el-form-item label="当前密码" prop="currentPsw">
					<el-input v-model="form.currentPsw"></el-input>
				</el-form-item>
				<el-form-item label="输入新密码" prop="newPsw">
					<el-input v-model="form.newPsw"></el-input>
				</el-form-item>
				<el-form-item label="确认新密码" prop="againNewPsw">
					<el-input v-model="form.againNewPsw"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm" class="editBtn">修改</el-button>
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
					currentPsw: '',
					newPsw: '',
					againNewPsw: ''
				},
				rules: {
					currentPsw: [{
						required: true,
						message: "请输入当前账号密码",
						trigger: "blur"
					}],
					newPsw: [{
						required: true,
						message: "请输入新密码",
						trigger: "blur"
					}],
					againNewPsw: [{
						required: true,
						message: "请再次输入新密码",
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

