<template>
  <section>
    <section class="nav-top">
      <span class="nav-title">账号管理 > 资料编辑</span>
      <router-link to="12" class="back-link">返回</router-link>
    </section>
    <section>
      <section class="content-form">
        <el-form ref="form" :model="form" label-width="80px" size="small" style="padding:3rem 4rem;">
          <el-form-item label="邮箱账号">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="登录密码">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input v-model="form.confirmPassword"></el-input>
          </el-form-item>
          <el-form-item label="用户姓名">
            <el-input v-model="form.name"></el-input>
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
        <form>
          <label>头像</label>
        </form>
      </section>
    </section>
  </section>
</template>

<script>
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
        }
      };
    },
    methods: {
      indexMethod(index) {
        return index + 1;
      },
      filterData() {},
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
    display: inline-block;
    width: 55%;
  }
  .content-upload {
    display: inline-block;
    width: 40%;
    padding: 2rem 3rem;
  }
</style>