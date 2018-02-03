<template>
  <div class="carListCon">
    <!-- <carItem></carItem> -->
    <img src="../car/image/carlist.png" alt="" class="cardlist">
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
.carListCon
  .el-collapse-item__content
   padding-bottom 0
.cardlist
  width 100%
</style>
<script>
import carItem from './car-item'
  export default {
    data() {
      return {
        msg: 'hello vue'
      }
    },
    components: {
      carItem
    }
  }
</script>
