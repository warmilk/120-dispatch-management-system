<template>
  <section>
    <section class="nav-top">
      <span class="nav-title">管理员管理 > 新增用户账户</span>
      <router-link to="/admin/account" class="back-link">返回</router-link>
    </section>
    <section class="main-content">
      <section class="content-form">
        <el-form ref="form" :model="form" label-width="80px" size="small" style="padding:3rem 4rem;">
          <el-form-item label="用户姓名">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item label="坐席工号">
            <el-input v-model="form.confirmPassword"></el-input>
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input v-model="form.phoneNo"></el-input>
          </el-form-item>
          <el-form-item label="账号状态">
            <el-radio-group v-model="form.status">
              <el-radio label="启用"></el-radio>
              <el-radio label="禁用"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </section>
      <section class="content-upload">
          <div class="upload-lable">
            <span style="color:red;">*</span>用户头像
          </div>
          <div class="upload-tip" style="width:300px;display:inline-block;">
            <div>上传图片的最佳尺寸：300像素*300像素，其他尺寸会影响页效果，格式png，jpeg，jpg，gif。大小不超过1M</div>
            <div style="margin-top:30px;">
              <el-button :disabled="diableUpload" @click="showUploadDialog">立即上传</el-button>
              <UploadAvatar ref="uploadAvatar" @uploadAvatar="uploadAvatar"></UploadAvatar>
            </div>
            <div class="upload-avatar" @click="showUploadDialog">
              <img :src="preview.url" class="avatar-preview" v-if="preview.show"/>
              <button class="avatar-delete" v-if="showDelete" @click="deletePreview">删除</button>
            </div>
          </div>
      </section>
    </section>
  </section>
</template>

<script>
  import UploadAvatar from 'components/upload/uploadAvatar';
  export default {
    data() {
      return {
        workerList,
        form: {
          email: "",
          password: "",
          confirmPassword: "",
          name: "",
          phoneNo: "",
          status: ""
        },
        diableUpload: true,
        showDelete: false,
        preview:{ 
          show: false,
          url : '',
          srcData: ''
        }
      };
    },
    methods: {
      indexMethod(index) {
        return index + 1;
      },
      filterData() {},
      uploadAvatar(data) {
        this.preview.url = window.URL.createObjectURL(data) ;
        this.preview.srcData = data;
        this.preview.show = true;
        this.toggleStatus();
      },
      showUploadDialog() {
        this.$refs.uploadAvatar.dialogVisible = true;
      },
      deletePreview(e) {
        e.stopPropagation();
        this.preview = {
          show: false,
          url: '',
          srcData: ''
        }
        this.toggleStatus();
      },
      toggleStatus() {
        this.diableUpload = !!!this.diableUpload;
        this.showDelete = !!!this.showDelete
      },
      initPreview(data){
        if (data) {
          
        }
        return { 
          show: false,
          url : '',
          srcData: ''
        };
      }
    },
    components: {
      UploadAvatar
    }
  };

  var workerList = [
    {
      name: "张冉冉",
      email: "cn.sat@live.cn",
      workerNo: "02633",
      phoneNo: "13308033531",
      status: "启用",
      createTime: "2016-01-01"
    },
    {
      name: "李小敏",
      email: "123123@qq.com",
      workerNo: "026123",
      phoneNo: "13308033531",
      status: "禁用",
      createTime: "2017-01-01"
    },
    {
      name: "周雯雯",
      email: "dadafh@gmai.com",
      workerNo: "0266765",
      phoneNo: "13308033531",
      status: "启用",
      createTime: "2018-01-01"
    }
  ];
</script>


<style lang="scss" scoped>
  section.nav-top {
    height: 40px;
    border-bottom: 1px solid #e9e9e9;
  }
  .nav-title {
    margin-left: 20px;
    line-height: 40px;
  }
  .back-link {
    width: 55px;
    height: 26px;
    font-size: 90%;
    line-height: 26px;
    text-align: center;
    color: black;
    background: #f6f6f6;
    border: 1px solid #d9d9d9;
    border-radius: 3px;
    float: right;
    margin: 6px 20px;
  }
  .content-form {
    width: 55%;
    display: inline-block;
  }
  .content-upload {

    padding: 30px 20px;
    display: inline-block;
    vertical-align: top;
  }
  .upload-lable {
    display: inline-block;
    width: 150px;
    vertical-align: top;
  }
  .upload-tip{
    width:300px;
    display:inline-block;
  }
  .upload-avatar{
    width:184px;
    height:184px;
    background:#f6f6f6;
    border:1px solid #D9D9D9;
    position:relative;
    margin-top: 30px;
    cursor: pointer;
  }
  .avatar-delete{
    width:182px; 
    height:30px; 
    text-align:center;
    line-height:30px; 
    position:absolute; 
    bottom: 0px; 
    display:inline-block;
    color: white;
    background-color:rgba(0,0,0,0.3);
    // z-index: 9999;
    border: none;
    &:visited {
      color: white;
    }
  }
  .avatar-preview{
    width:184px;
    height:184px;
  }
</style>