<template>
  <div>
    <leftPart></leftPart>
    <div class="main-con">
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
.main-con
  position absolute
  left 360px
  right 0
  top 0;
  bottom: 0
  background url('./car/image/B07调度管理-实时位置01车辆.png')
  background-size cover
</style>
<script>
import leftPart from './leftPart/leftPart'
  export default {
    data() {
      return {
        msg: 'hello vue'
      }
    },
    components: {
    leftPart
    }
  }
</script>
