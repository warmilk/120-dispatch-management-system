<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small" style="margin-top:1.5rem;">
      <el-form-item label="接通时间" style="margin-left:3rem;">
        <el-col :span="20">
          <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date1" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
        </el-col>
        <!-- <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date2" value-format="yyyy-MM-dd" style="width: 100%; margin-left:1rem;"></el-date-picker>
        </el-col> -->
      </el-form-item>
      <el-form-item label="电话">
        <el-col :span="24">
          <el-input v-model="formInline.phone"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="通话员工号" style="margin-left:2.8rem;">
        <el-col :span="24">
          <el-input v-model="formInline.employeeId"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item style="float:right;margin-right:4rem;">
        <el-button type="primary" @click="filterData">筛选</el-button>
      </el-form-item>
    </el-form>

    <!-- table -->
    <el-table ref="multipleTable" :data="tableData" header-row-class-name="center" border tooltip-effect="dark" style="width: 98%;margin-left: 1%;margin-right: 1%;" size="small" @selection-change="handleSelectionChange" @select="handleCheckedSelection" @select-all="handleAllSelection">
      <el-table-column label="通话员" >
        <template slot-scope="props">{{ props.row.phoneNumber }}</template>
      </el-table-column>
      <el-table-column prop="callCount" label="通话次数">
      </el-table-column>
      <el-table-column prop="lastTime" label="通话日期">
      </el-table-column>
      <el-table-column prop="phoneNumber" label="电话号码" >
      </el-table-column>
      <el-table-column prop="ascription" label="归属地" show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page.current" :page-sizes="[10, 15, 20, 50]" :page-size="page.size" layout="total, sizes, prev, pager, next, jumper" :total="page.total" style="float: right; margin: 1.5rem 1.5rem;">
    </el-pagination>
  </div>
</template>

<script>
  import * as BlackListInterface from "api/call/black-list";

  export default {
    data() {
      return {
        page: {
          tatal: 0,
          size: 0,
          current: 1
        },
        formInline: {
          phone: "",
          date1: "",
          employeeId: ""
        },
        tableData: [],
        multipleSelection: [],
        selectedRows: []
      };
    },
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleCheckedSelection(selection) {
        this.selectedRows = selection;
      },
      handleAllSelection(selection) {
        this.selectedRows = selection;
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleSizeChange(val) {
        this.page.size = val;
        this._getCallRecord({
          pageSize: val
        });
      },
      handleCurrentChange(val) {
        this.page.current = val;
        this._getCallRecord({
          pageIndex: val
        });
      },
      _getList(data) {
        BlackListInterface.getList(data)
          .then(resp => {
            this.tableData = resp.list;
            this.page.total = resp.totalSize;
            this.page.size = resp.pageSize;
            this.page.current = resp.pageIndex;
          })
          .catch(msg => {
            console.error(msg);
          });
      },
      formattedCallTime(val) {
        if (isNaN(val)) return "";
        let hours = Math.floor(val / 3600);
        let minutes = Math.floor((val - hours * 3600) / 60);
        let seconds = val - hours * 3600 - minutes * 60;

        if (hours < 10) {
          hours = "0" + hours;
        }
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        return hours + ":" + minutes + ":" + seconds;
      },
      filterData() {
        let data = {};
        if (this.formInline.date1)
          data["callDate"] = Date.parse(this.formInline.date1);
        if (this.formInline.phoneNumber)
          data["phoneNumber"] = Date.parse(this.formInline.phoneNumber);
        if (this.formInline.employeeId)
          data["employeeId"] = this.formInline.employeeId;
        this._getList(data);
      },
      addBlackList() {
        new Promise((reslove, reject) => {
          if (this.selectedRows.length <= 0)
            return Promise.reject().catch(() => {
              this.$message.warning("请选择至少一条记录");
            });
          reslove();
        }).then(() => {
          let list = this.selectedRows.map(record => {
            return {
              phoneNumber: record["phoneNumber"]
            };
          });
          if (list && list.length > 0) {
            BlackListInterface.addList({ list })
              .then(resp => {
                this.$refs.multipleTable.clearSelection();
              })
              .catch(msg => {
                this.$message.error(msg);
              });
          }
        });
      }
    },
    created() {
      this._getList();
    }
  };
</script>

