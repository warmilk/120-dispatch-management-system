<template>
  <div>
    <el-dialog
  title="取消派单"
  :visible.sync="dialogVisible"
  width="462px"
  class="cancelD-modal"
  >
  
  <el-form ref="form" label-width="80px" label-position="right">

  <el-form-item label="取消理由">
    <el-select size="medium" v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>

<el-form-item label="说明">
    <el-input type="textarea" v-model="value" style="width: 289px; height: 100px"></el-input>
  </el-form-item>
  </el-form>

  <span slot="footer" class="dialog-footer" style="text-align: center;display: block">
    <greyButton @doClick="close">取消</greyButton>
    <greyButton @doClick="close">确定</greyButton>
  </span>
</el-dialog>

  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
.cancelD-modal
  .el-dialog__body
    padding 15px
  textarea
    height 100%  
</style>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
</style>
<script>
import greyButton from '../button/grey-button'
  export default {
    data() {
      return {
        dialogVisible: false,
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
    methods: {
      open() {
        this.dialogVisible = true
      },
      close() {
        this.dialogVisible = false
      }
    },
    components: {
      greyButton
    }
  }
</script>
