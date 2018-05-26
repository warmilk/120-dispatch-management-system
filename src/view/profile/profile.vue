<template>
	<section>
		<!-- <img :src="require('@/assets/layout/F01个人中心-个人资料.jpg')" alt=""> -->
		<div class="middle">
			<el-form ref="comonRecieveform" :model="form" label-width="100px" size="small" :rules="rules">
				<el-form-item label="头像" class="tx_desc">
					<img :src="require('@/assets/img/user.png')" alt="" @click="dialogVisible = true" class="touxiang">
					<div :photo="photo">
						<el-dialog class="avatar-uploader emgcy-dialog" title="修改头像" :visible.sync="dialogVisible" width="490px" :before-close="handleClose" :close-on-click-modal="false" ref="editAvatar">
							<div class="avatar-uploader-wrap">
								<!-- step1 -->
								<div class="avatar-uploader__choose avatar-uploader_left" v-show="!photo && !isSuccess">
									<button class="avatar-uploader_left__btn" @click="handleClick">+选择图片</button>
									<p>只支持JPG,PNG,GIF,大小不超过5M</p>
									<input type="file" v-show="false" ref="fileinput" accept=".jpg, .jpeg, .png, .gif" @change="handleChange">
								</div>
								<!-- step2 -->
								<div class="avatar-uploader__edit" v-show="photo || isSuccess">
									<div class="avatar-uploader_left avatar-uploader__edit-area">
										<vueCropper ref="cropper" :img="cropper.img" :info="false" :autoCrop="cropper.autoCrop" :autoCropWidth="cropper.autoCropWidth" :autoCropHeight="cropper.autoCropHeight" :fixedBox="cropper.fixedBox" @realTime="realTime" :outputType="cropper.outputType"
										    :fixed="cropper.fixed" :fixedNumber="cropper.fixedNumber"></vueCropper>
									</div>
									<input type="file" v-show="false" ref="fileinput" accept=".jpg, .jpeg, .png, .gif" @change="handleChange">
									<button class="avatar-uploader_left__btn" @click="handleClick">+重新选择</button>
									<button class="avatar-uploader_left__btn" @click="rotateRight">+旋转90°</button>
								</div>
								<div class="avatar-uploader__preview">
									<span class="avatar-uploader__preview-title">预览</span>
									<img :src="previews.url" alt="" class="avatar-uploader__preview-120">
									<span>120*120</span>
									<img :src="previews.url" alt="" class="avatar-uploader__preview-65">
									<span>65*65</span>
									<img :src="previews.url" alt="" class="avatar-uploader__preview-40">
									<span>40*40</span>
								</div>
							</div>
							<div slot="footer" class="dialog-footer">
								<el-button @click="handleClose" size="mini">取 消</el-button>
								<el-button type="primary" size="mini" @click="summitAvata()">确 定</el-button>
							</div>
						</el-dialog>
					</div>
				</el-form-item>
				<el-form-item label="坐席工号" prop="workerId">
					<el-input v-model="form.workerId"></el-input>
				</el-form-item>
				<el-form-item label="邮箱账号" prop="emailAccount">
					<el-input v-model="form.emailAccount"></el-input>
				</el-form-item>
				<el-form-item label="用户姓名" prop="userName">
					<el-input v-model="form.userName"></el-input>
				</el-form-item>
				<el-form-item label="手机号码" prop="phoneNum">
					<el-input v-model="form.phoneNum"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" class="btn">取消</el-button>
					<el-button type="primary" @click="submitForm" class="editBtn btn">保存</el-button>
				</el-form-item>
			</el-form>
		</div>
	</section>
</template>

<script>
	import vueCropper from "vue-cropper";
	import avatar from '@/components/upload/uploadAvatar.vue'
	export default {
		props: {
			photo: {
				type: String,
				default: ""
			},
			dialogVisible: {
				type: Boolean,
				default: false
			}
		},
		components: {
			vueCropper
		},
		data() {
			return {
				dialogVisible: false,
				cropper: {
					img: this.photo,
					autoCrop: true,
					autoCropWidth: 200,
					autoCropHeight: 200,
					fixedBox: false,
					fixed: true,
					fixedNumber: [1, 1],
					outputType: "png"
				},
				isSuccess: false,
				cropImgBlob: null,
				previews: {},
				form: {
					workerId: '0278',
					emailAccount: '',
					userName: '',
					phoneNum: ''
				},
				rules: {
					workerId: [{
						required: false,
						message: "请输入坐席工号",
						trigger: "blur"
					}],
					emailAccount: [{
						required: true,
						message: "请输入邮箱账号",
						trigger: "blur"
					}],
					userName: [{
						required: true,
						message: "请输入用户姓名",
						trigger: "blur"
					}],
					phoneNum: [{
						required: true,
						message: "请输入手机号码",
						trigger: "blur"
					}],
				},
			};
		},
		methods: {
			preventDefault(e) {
				e.preventDefault();
				return false;
			},
			// 点击按钮打开文件资源窗口
			handleClick(e) {
				if (e.target !== this.$refs.fileinput) {
					e.preventDefault();
					if (document.activeElement !== this.$refs) {
						this.$refs.fileinput.click();
					}
				}
			},
			// 检测选择的文件是否合适
			checkFile(file) {
				// 仅限图片
				if (file.type.indexOf("image") === -1) {
					this.$message({
						message: "请选择合适的文件类型",
						type: "warning"
					});
					return false;
				}
				// 超出大小
				if (file.size / 1024 > 5120) {
					this.$message({
						message: "图片大小超出5MB，请重新选择",
						type: "warning"
					});
					return false;
				} else {
					// console.log((file.size / 1024).toFixed(1) + 'KB')
				}
				return true;
			},
			// 设置图片源
			setSourceImg(file) {
				let that = this;
				let fr = new FileReader();
				fr.onload = function(e) {
					that.cropper.img = fr.result;
				};
				fr.readAsDataURL(file);
			},
			// 触发input框的change事件选择图片
			handleChange(e) {
				e.preventDefault();
				let files = e.target.files || e.dataTransfer.files;
				console.log(this.$refs);
				this.$refs.cropper.rotate = 0; //重置要裁剪的图片的旋转角度
				this.isSuccess = true;
				if (this.checkFile(files[0])) {
					this.setSourceImg(files[0]);
				}
			},
			// 点击向右旋转
			rotateRight(e) {
				e.preventDefault();
				this.$refs.cropper.rotateRight();
			},
			// 点击关闭弹窗
			handleClose() {
				this.cropper.img = "";
				this.dialogVisible = !this.dialogVisible;
			},
			// 实时预览
			realTime(data) {
				this.previews = data;
			},
			//点击确定上传裁剪完的头像图片（blob类型）
			summitAvata() {
				this.$refs.cropper.getCropBlob(data => {
					// this.cropImgBlob = data;
					let params = {
						file: data
					};
					this.$emit("uploadAvatar", data);
					this.dialogVisible = !this.dialogVisible;
				});
			},
			showEditAvatar() {
				this.dialogVisible = true;
			},
			submitForm() {},
			indexMethod(index) {
				return index + 1;
			}
		},
		watch: {
			// 实时预览
			previews: function() {
				this.$refs.cropper.getCropData(data => {
					this.previews.url = data;
				});
			}
		},
		activated() {
			this.isSuccess = false;
		}
	};
</script>

<style lang="scss" scoped>
	.middle {
		width: 40%;
		margin: 20px auto;
	}
	.touxiang {
		width: 100px;
		height: 100px;
		background: #ccc;
		background-image: url('data:image/png;base64,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');
		// background-image: url('../../assets/img/来电-大头像.png');
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 100px;
		cursor: pointer;
	}

	.avatar-uploader {
	  &-wrap {
	    display: flex;
	    justify-content: space-between;
	    width: 100%;
	    height: 100%;
	  }
	  &_left {
	    height: 280px;
	    width: 280px;
	    font-size: 13px;
	    color: #999999;
	    position: relative;
	    background: #ecf2f6;
	    &__btn {
	      color: #999999;
	      width: 88px;
	      height: 34px;
	      border: none;
	      background: #fff;
	      outline: none;
	      border: 1px solid #cecece;
	      border-radius: 82px;
	    }
	  }
	  &__choose {
	    p {
	      margin-top: 59%;
	      width: 100%;
	      text-align: center;
	    }
	    button {
	      position: absolute;
	      top: 50%;
	      left: 50%;
	      transform: translate(-50%, -50%);
	    }
	  }
	  &__edit {
	    &-area {
	      // display: flex;
	      // justify-content: center;
	      // align-items: center;
	      overflow: hidden;
	      &-img {
	        object-fit: cover; // width: 100%;
	        // height: 100%;
	      }
	    }
	    button {
	      margin-top: 13px;
	    }
	    button:last-child {
	      float: right;
	    }
	  }
	  &__preview {
	    background: #ecf2f6;
	    text-align: center;
	    width: 158px;
	    height: 280px;
	    display: flex;
	    flex-direction: column;
	    align-items: center;
	    padding-top: 12px;
	    font-size: 13px;
	    &-title {
	      color: #999999;
	    }
	    img {
	      background: #fff;
	      margin-top: 5px;
	      border-radius: 500px;
	    }
	    &-120 {
	      height: 60px;
	      width: 60px;
	    }
	    &-65 {
	      height: 45px;
	      width: 45px;
	    }
	    &-40 {
	      height: 30px;
	      width: 30px;
	    }
	  }
	}
</style>
<style lang="scss">
	.tx_desc.el-form-item--small .el-form-item__label {
		line-height: 100px;
	}
	.btn {
		width: 30%;
		margin: 20px 0;
	}
	.editBtn {
		background: #48b868;
	}

	// 小的弹窗用el-messagebox，大弹窗有复杂交互的用el-dialog
	// 弹窗（el-dialog）样式修改
	.emgcy-dialog {
	  .el-dialog__body {
	    padding: 5px 20px;
	    overflow: hidden;
	  }
	  .el-dialog__headerbtn .el-dialog__close {
	    font-size: 20px;
	  }
	  .el-dialog__footer {
	    text-align: center;
	    padding: 20px 20px 30px 20px;
	  }
	}
</style>

