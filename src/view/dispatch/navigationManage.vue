<template>
  <div>
    <leftPart2></leftPart2>
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
  background url('./car/image/B09调度管理-导航管理.png')
  background-size cover
</style>
<script>
import leftPart2 from './leftPart/leftPart2'
  export default {
    data() {
      return {
        msg: 'hello vue'
      }
    },
    components: {
    leftPart2
    }
  }
</script>
