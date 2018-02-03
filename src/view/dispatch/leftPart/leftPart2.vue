<template>
  <div>
    <leftPartCon>
     <div class="head" flex="cross:center main:center">
       当日事件
     </div>
     <el-table
     class="navigationManage-table"
     border
      :data="tableData"
      >
      <el-table-column
        prop="1"
        label="事件编号"
        min-width="80px">
      </el-table-column>
      <el-table-column
        prop="2"
        label="车辆"
        min-width="80px">
      </el-table-column>
      <el-table-column
        prop="3"
        min-width="80px"
        label="状态">
      </el-table-column>
      <el-table-column
        prop="4"
        min-width="80px"
        label="操作">
      </el-table-column>
    </el-table>
    <div class="page-con">
      <el-pagination
  background
  layout="prev, pager, next"
  :total="50">
</el-pagination>
    </div>
    </leftPartCon>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
.navigationManage-table
  margin 8px;
  width auto
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
.head
  height 39px
  font-size 14px;
  color #333
  background: #f2f2f2;
.page-con
  position absolute
  left 10px
  right 10px
  bottom 20px
  text-align right   
</style>
<script>
import leftPartCon from './leftPartCon'
import carList from '../car/car-list'
  export default {
    data() {
      return {
        tableData: [{
            1: '02102',
            2: '粤F09881',
            3: '未推荐路线',
            4: '设置导航'
          }, 
          {
            1: '02102',
            2: '粤F09881',
            3: '未推荐路线',
            4: '设置导航'
          },
          {
            1: '02102',
            2: '粤F09881',
            3: '未推荐路线',
            4: '设置导航'
          },
          {
            1: '02102',
            2: '粤F09881',
            3: '未推荐路线',
            4: '设置导航'
          }]
      }
    },
    components: {
      leftPartCon, carList
    }
  }
</script>
