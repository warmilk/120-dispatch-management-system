<template>
  <div>
     <div class="nav-con" flex="main:justify cross:center">
      <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/dispatch/acceptRecord' }">受理记录</el-breadcrumb-item>
  <el-breadcrumb-item>事件详情</el-breadcrumb-item>
</el-breadcrumb>
   <el-button size="mini" @click="returnHref">返回</el-button>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
.nav-con
  height  42px
  margin 0 12px
  font-size 12px !important
</style>
<script>
  export default {
    data() {
      return {
        msg: 'hello vue'
      }
    },
    methods: {
      returnHref() {
        this.$router.back()
      }
    },
    components: {}
  }
</script>
