<template>
  <div>
    <el-table
      class="acceptRecord-table-con"
      :data="tableData"
      border
      style="width: 100%">
       <el-table-column
      type="selection"
      width="55">
    </el-table-column>

      <el-table-column
        prop="date"
        label="派车座席"
        min-width="64px">
      </el-table-column>

      <el-table-column
        prop="date"
        label="事件编号"
        min-width="80px">
      </el-table-column>

      <el-table-column
        prop="date"
        label="报案电话"
        min-width="106px">
      </el-table-column>

      <el-table-column
        prop="date"
        label="联系人"
        min-width="70px">
      </el-table-column>

      <el-table-column
        prop="date"
        label="开始受理时间"
        min-width="146px">
      </el-table-column>
    
    <el-table-column
        prop="date"
        label="受理结束时间"
        min-width="146px">
      </el-table-column>

      <el-table-column
        prop="date"
        label="指派单位"
        min-width="128px">
      </el-table-column>

      <el-table-column
        prop="date"
        label="受理状态"
        min-width="83px">
      </el-table-column>

      <el-table-column
        prop="date"
        label="受理人"
        min-width="64px">
      </el-table-column>

      <el-table-column
        prop="date"
        label="患者类型"
        min-width="80px">
      </el-table-column>

      <el-table-column
        prop="date"
        label="事件类型"
        min-width="80px">
      </el-table-column>

      <el-table-column
        prop="date"
        label="操作"
        min-width="130px">
      </el-table-column>

    </el-table>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
.acceptRecord-table-con
  thead th
    background #f5f7fa
    .cell
      font-size: 14px;
      color: #333333;
      font-weight normal
  .cell
    text-align center    
    white-space nowrap
    padding 0 5px
</style>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
.acceptRecord-table-con
  margin 0 10px
  width auto !important
</style>
<script>
  export default {
    data() {
      return {
        msg: 'hello vue'
      }
    },
    components: {}
  }
</script>
