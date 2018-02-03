<template>
  <div class="contain">
    <Title>操作任务</Title>
    <div class="do-con">
      <div class="select-con">
        <el-form :inline="true" :model="formInline" label-width="100px" flex="main:justify wrap:wrap">
          <el-form-item label="调度性质" class="form-item">
            <el-select size="medium" v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="接诊急救站" class="form-item">
            <el-select size="medium" v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="车辆数量" class="form-item">
            <el-select size="medium" v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-form label-width="100px">
          <el-form-item label="描述" class="form-item">
            <el-input type="textarea" class="big-textarea">
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <div style="text-align: center">
        <greyButton>派送任务</greyButton>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
.big-textarea
    width 100% 
    textarea
      resize none
      height 130px;
</style>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
.contain
  margin-bottom 30px
  .do-con
    border 1px solid #e9e9e9
    padding 17px 24px
    border-top 0
</style>

<script>
  import Title from './title/title.vue'
  import tableCon from './tableCon/tableCon.vue'
  import greyButton from '../../../button/grey-button.vue'
  export default {
    data() {
      return {
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
    components: {
      Title,
      tableCon,
      greyButton
    }
  }
</script>
