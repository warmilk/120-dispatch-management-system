<template>
  <section>
    <el-form :inline="true" :model="formInline" size="small" style="padding: 10px 15px;">
      <el-form-item>
        <el-input v-model="formInline.name" placeholder="用户昵称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="filterData">搜索</el-button>
      </el-form-item>
      <el-form-item style="float:right;">
        <el-button type="primary" @click="filterData">新增用户</el-button>
      </el-form-item>
    </el-form>
    <el-table ref="multipleTable" :data="workerList" header-row-class-name="center" border tooltip-effect="dark" style="width: 98%;margin-left: 1%;margin-right: 1%;" size="small">
      <el-table-column type="index" :index="indexMethod" label="序号"> </el-table-column>
      <el-table-column prop="name" label="名称">
      </el-table-column>
      <el-table-column prop="email" label="邮箱">
      </el-table-column>
      <el-table-column prop="workerNo" label="坐席工号">
      </el-table-column>
      <el-table-column prop="phoneNo" label="手机号">
      </el-table-column>
      <el-table-column prop="status" label="状态">
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="seeDetail(scope.row.id)">查看</el-button>
          <span>|</span>
          <el-button type="text" size="small" @click="open(scope.row)">{{scope.row.status=='启用'?'禁用':'启用'}}</el-button>
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
      filterData() {},
      open(r) {
        if (r.status == "禁用") {
          this.enableWorker(r);
        } else {
          this.disableWorker(r);
        }
      },
      disableWorker(r) {
        this.$confirm(`是否禁用 ${r.email}`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "error"
        })
          .then(() => {
            this.$message({
              type: "success",
              message: "禁用成功!"
            });
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

</style>