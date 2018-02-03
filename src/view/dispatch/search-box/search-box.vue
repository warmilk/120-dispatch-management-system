<template>
  <div>
    <el-form :inline="true" :model="formInline" class="acceptRecord-form-com" flex="main:justify wrap:wrap">

  <el-form-item label="派单公席" class="form-item">
    <el-input size="medium" placeholder="审批人"  v-model="formInline.v8"></el-input>
  </el-form-item>

  <el-form-item label="开始受理时间" class="form-item">
    <el-date-picker
      size="medium"
      v-model="formInline.v1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </el-form-item>

  <el-form-item label="受理结束时间" class="form-item">
    <el-date-picker
      size="medium"
      v-model="formInline.v2"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </el-form-item>

  <el-form-item label="受理状态" class="form-item">
    <el-select size="medium" v-model="formInline.v3" placeholder="请选择">
    <el-option
      v-for="item in options3"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>

  <el-form-item label="指派单位" class="form-item">
    <el-input size="medium" v-model="formInline.v4" placeholder="审批人"></el-input>
  </el-form-item>
  

  <el-form-item label="事件类型" class="form-item label-wid-98">
    <el-select size="medium" v-model="formInline.v5" placeholder="请选择">
    <el-option
      v-for="item in options5"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>

  <el-form-item label="患者类型" class="form-item label-wid-98">
    <el-select size="medium" v-model="formInline.v6" placeholder="请选择">
    <el-option
      v-for="item in options6"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
  
   <el-form-item label="报案电话" class="form-item">
    <el-input v-model="formInline.v7" size="medium" placeholder="审批人"></el-input>
  </el-form-item>
</el-form>
  <div class="btn-con" flex="main:center">
    <greyButton>导出记录</greyButton>
    <greyButton>筛选</greyButton>
  </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
.acceptRecord-form-com
  .el-input
    width 180px
.label-wid-98
  .el-form-item__label
    width 98px    
</style>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
.acceptRecord-form-com
  width 1200px
  margin 16px auto 8px
  color #333
  .form-item
    margin 0 10px 17px;
.btn-con    
  margin-bottom 23px
</style>

<script>
import greyButton from '../button/grey-button'
  export default {
    data() {
      return {
        formInline: {
          v1: '',
          v2: '',
          v3: '1',
          v4: '',
          v5: '1',
          v6: '1',
          v7: '',
          v8: '',
        },
        options5: [
          {
          value: '1',
          label: '全部求救类型'
        },
        {
          value: '2',
          label: '个人求救'
        },
        {
          value: '3',
          label: '群体事件'
        }],
         options6: [
          {
          value: '1',
          label: '普通'
        },
        {
          value: '2',
          label: '三无患者'
        },
],
        options3: [
          {
          value: '1',
          label: '全部受理状态'
        },
        {
          value: '2',
          label: '代受理'
        },
        {
          value: '3',
          label: '已受理'
        },
        {
          value: '4',
          label: '未受理'
        },
        {
          value: '5',
          label: '已取消'
        }
        ],
         options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      }
    },
    components: {
      greyButton
    }
  }
</script>
