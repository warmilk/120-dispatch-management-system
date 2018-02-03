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
        prop="1"
        label="派车座席"
        min-width="64px">
      </el-table-column>

      <el-table-column
        prop="2"
        label="事件编号"
        min-width="80px">
      </el-table-column>

      <el-table-column
        prop="3"
        label="报案电话"
        min-width="106px">
      </el-table-column>

      <el-table-column
        prop="4"
        label="联系人"
        min-width="70px">
      </el-table-column>

      <el-table-column
        prop="5"
        label="开始受理时间"
        min-width="146px">
      </el-table-column>
    
    <el-table-column
        prop="6"
        label="受理结束时间"
        min-width="146px">
      </el-table-column>

      <el-table-column
        prop="7"
        label="指派单位"
        min-width="128px">
      </el-table-column>

      <el-table-column
        prop="8"
        label="受理状态"
        min-width="83px">
      </el-table-column>

      <el-table-column
        prop="9"
        label="受理人"
        min-width="64px">
      </el-table-column>

      <el-table-column
        prop="10"
        label="患者类型"
        min-width="80px">
      </el-table-column>

      <el-table-column
        prop="11"
        label="事件类型"
        min-width="80px">
      </el-table-column>

      <el-table-column
        label="操作"
        min-width="130px">
        <template slot-scope="scope">
         <div>
            <el-button type="text" @click="toDetail">
             查看
           </el-button>
           <span v-show="scope.row[8]== '已受理'">
             |
           <el-button type="text" @click="cancelD">
             取消派单
           </el-button>
           </span>
         </div>
      </template>
      </el-table-column>
    </el-table>
    <div class="page-con">
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[7, 20, 30, 40]"
      :page-size="7"
      layout="total, sizes, prev, pager, next, jumper"
      :total="50">
    </el-pagination>
    </div>

    <!-- modal -->
    <cancelModal ref="cancelModal"></cancelModal>
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
.page-con
  text-align right 
  margin 50px 10px  20px
</style>
<script>
let tableData = [
  {
  1: '李小姐',
  2: '021302',
  3: 13898221821,
  4: '李小姐',
  5: '2017/09/24 14:20',
  6: '2017/09/24 14:20',
  7: '乳源县中医院',
  8: '处理中',
  9: '李小姐',
  10: '患者类型',
  11: '普通事件',
},
{
  1: '李小姐',
  2: '021302',
  3: 13898221821,
  4: '李小姐',
  5: '2017/09/24 14:20',
  6: '2017/09/24 14:20',
  7: '乳源县中医院',
  8: '已受理',
  9: '李小姐',
  10: '患者类型',
  11: '普通事件',
},
{
  1: '李小姐',
  2: '021302',
  3: 13898221821,
  4: '李小姐',
  5: '2017/09/24 14:20',
  6: '2017/09/24 14:20',
  7: '乳源县中医院',
  8: '处理中',
  9: '李小姐',
  10: '患者类型',
  11: '普通事件',
},
{
  1: '李小姐',
  2: '021302',
  3: 13898221821,
  4: '李小姐',
  5: '2017/09/24 14:20',
  6: '2017/09/24 14:20',
  7: '乳源县中医院',
  8: '处理中',
  9: '李小姐',
  10: '患者类型',
  11: '群体事件',
},
{
  1: '李小姐',
  2: '021302',
  3: 13898221821,
  4: '李小姐',
  5: '2017/09/24 14:20',
  6: '2017/09/24 14:20',
  7: '乳源县中医院',
  8: '处理中',
  9: '李小姐',
  10: '患者类型',
  11: '普通事件',
},
{
  1: '李小姐',
  2: '021302',
  3: 13898221821,
  4: '李小姐',
  5: '2017/09/24 14:20',
  6: '2017/09/24 14:20',
  7: '乳源县中医院',
  8: '处理中',
  9: '李小姐',
  10: '患者类型',
  11: '普通事件',
},
{
  1: '李小姐',
  2: '021302',
  3: 13898221821,
  4: '李小姐',
  5: '2017/09/24 14:20',
  6: '2017/09/24 14:20',
  7: '乳源县中医院',
  8: '处理中',
  9: '李小姐',
  10: '患者类型',
  11: '普通事件',
},
]
import cancelModal from '../modal/cancel-moadl'
  export default {
    data() {
      return {
        tableData: tableData,
        currentPage4: 1
      }
    },
    methods: {
      handleSizeChange() {},
      handleCurrentChange() {},
      cancelD() {
        this.$refs.cancelModal.open()
      },
      toDetail() {
        this.$router.push('/dispatch/acceptRecord/details')
      }
    },
    components: {
      cancelModal
    }
  }
</script>
