<template>
  <div>
    <leftPartCon>
      <div class="head" flex="main:center cross:center">
        出勤车辆实时定位
      </div>
      <div class="real-coll-con">
        <el-collapse accordion  v-model="activeName">
  <el-collapse-item title="乳源瑶族自治县人民医院120中心" name="1">
    <carList></carList>
  </el-collapse-item>
  <el-collapse-item title="乳源中医院120中心" name="2">
    <carList></carList>
  </el-collapse-item>
  <el-collapse-item title="乳源第一人民医院120中心" name="3">
    <carList></carList>
  </el-collapse-item>
  </el-collapse>
      </div>
    </leftPartCon>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
.real-coll-con
  .el-collapse-item__header
    background: #F8F8F8;
    height 40px;
    line-height 40px;
    font-size 12px
    color #333
    border-bottom 1px solid #fff
    font-weight normal
    padding-left 12px
  .el-collapse-item__arrow
    line-height 40px  
</style>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
.head
  height 39px
  font-size 14px;
  color #fff
  background: #7680A5;
</style>
<script>
import leftPartCon from './leftPartCon'
import carList from '../car/car-list'
  export default {
    data() {
      return {
        activeName: '1'
      }
    },
    components: {
      leftPartCon, carList
    }
  }
</script>
