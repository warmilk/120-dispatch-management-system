<template>
  <div class="contain">
    <Title>操作任务</Title>
    <div class="do-con">
      <div class="select-con">
        <el-form :inline="true" :model="formInline" label-width="100px" flex="main:justify wrap:wrap">
          <el-form-item label="调度性质" class="form-item">
            <el-select size="medium" v-model="v1" placeholder="请选择">
              <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="接诊急救站" class="form-item">
            <el-select size="medium" v-model="v2" placeholder="请选择">
              <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="车辆数量" class="form-item">
            <el-select size="medium" v-model="v3" placeholder="请选择">
              <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
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
        v1: '1',
        v2: '1',
        v3: '1',
        options1: [{
          value: '1',
          label: '改派订单'
        },
        {
          value: '2',
          label: '增派支援'
        },
        {
          value: '1',
          label: '再次调度'
        }],
        options2: [{
          value: '1',
          label: '中医院120急救站'
        },
        {
          value: '2',
          label: '人民医院急救站'
        }],
        options3: [{
          value: '1',
          label: '1'
        },
        {
          value: '2',
          label: '2'
        },
        {
          value: '3',
          label: '3'
        },
        {
          value: '4',
          label: '4'
        }]
      }
    },
    components: {
      Title,
      tableCon,
      greyButton
    }
  }
</script>
