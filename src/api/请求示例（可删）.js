import axios from 'axios'
import qs from 'qs'

// 1. get示例（不用传任何query参数）
export const getCheckList = params => {
    return axios.get(`/sys/flow/getInfo/`).then(res => res.data)
}




// 2. get示例（要求传query参数）
export const getCheckInfo = params => {// 2.1 定义发请求的function
    return axios.get(`/sys/flow/getInfo/`, { params: params.query }).then(res => res.data)
}
let invokeGetCheckInfo = () => {// 2.2 在.vue文件内调用发请求的function
	let params = {
		query: {
			'后台叫前端传的字段名字': '你的本地vue文件自己写的变量名',
			photo: this.groupUuid,
			idCard: this.form.idCard,
			email: this.form.email,
			major: this.form.major,
			summary: this.form.summary
		}
	  };
	  getCheckInfo(params).then(res => {
		if (res.code !== 1){
			this.$message({ message: `${res.msg}`, type: "error" });
			return;
		}
		this.$message({ message: `${res.msg}`, type: "success" })
	  });
}






// 3.post示例（后台要求传formdata，所以要用qs.stringify()来转一下）
export const updateUserInfo = params => {// 3.1 定义发请求的function
    return axios.post(`/workbench/personalCenter/updatePersonalData`, qs.stringify(params.data)).then(res => res.data)
}
let invokeUpdateUserInfo = () => {// 3.2 在.vue文件内调用发请求的function
	let params = {
		data: {
			'后台定义的字段名字': '你的本地vue文件自己写的变量名',
			summary: this.form.summary,
		}
	  };
	  updateUserInfo(params).then(res => {
		if (res.code !== 1){
			this.$message({ message: `${res.msg}`, type: "error" });
			return;
		}
		this.$message({ message: `${res.msg}`, type: "success" })
	  });
}





// 4.post示例（后台要求传json，直接带过去即可）
export const updateUserInfo = params => {
    return axios.post(`/workbench/personalCenter/updatePersonalData`, params.data).then(res => res.data)
}




// 5.post示例（这个post不用带任何request payload 数据）
export const updateUserInfo = params => {
    return axios.post(`/workbench/personalCenter/updatePersonalData`).then(res => res.data)
}



// 6.post示例（带query参数）
export const updateUserPwd = params => {// 更新密码
    return axios.post(`/sys/user/updatePwd`, qs.stringify(params.query)).then(res => res.data)
}