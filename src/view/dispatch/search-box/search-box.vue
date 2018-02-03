<template>
  <div>
    <el-form :inline="true" :model="formInline" class="acceptRecord-form-com" flex="main:justify wrap:wrap">

  <el-form-item label="派单公席" class="form-item">
    <el-input v-model="formInline.user" size="medium" placeholder="审批人"></el-input>
  </el-form-item>

  <el-form-item label="开始受理时间" class="form-item">
    <el-date-picker
      size="medium"
      v-model="formInline.user"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </el-form-item>

  <el-form-item label="受理结束时间" class="form-item">
    <el-date-picker
      size="medium"
      v-model="formInline.user"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </el-form-item>

  <el-form-item label="受理状态" class="form-item">
    <el-select size="medium" v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>

  <el-form-item label="指派单位" class="form-item">
    <el-input size="medium" v-model="formInline.user" placeholder="审批人"></el-input>
  </el-form-item>
  

  <el-form-item label="时间类型" class="form-item label-wid-98">
    <el-select size="medium" v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>

  <el-form-item label="患者类型" class="form-item label-wid-98">
    <el-select size="medium" v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
  
   <el-form-item label="报案电话" class="form-item">
    <el-input v-model="formInline.user" size="medium" placeholder="审批人"></el-input>
  </el-form-item>
</el-form>
  <div class="btn-con" flex="main:center">
    <div class="grey-button">导出记录</div>
    <div class="grey-button">筛选</div>
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
  .grey-button
    height 34px;
    width 152px;
    background: #f5f7fa;
    text-align center 
    line-height 34px
    border: 1px solid #D9D9D9;
    border-radius: 3px;
    font-size: 12px;
    color: #666;
    margin 0 15px;
    cursor pointer
    &:hover
      background #f6f6f6
</style>

<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
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
        value: ''
      }
    },
    components: {}
  }
</script>
