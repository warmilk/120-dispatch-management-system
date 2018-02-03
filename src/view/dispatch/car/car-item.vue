<template>
  <div>
    <div class="carCon">
      <img src="../car/image/car.png" alt="" class="carImg">
      <div class="text-con">
        <p>
          <img src="../car/image/车-地图.png" alt="" class="car-icon">粤F000021
        </p>
        <p>
          <img src="../car/image/地址.png" alt="" class="car-icon">鹰峰中路25号
        </p>
        <p>
          <img src="../car/image/地址.png" alt="" class="car-icon">联系电话：13987391122
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
.carCon
  padding 18px 10px
  border-bottom 1px solid #e9e9e9
  min-height 80px
  .carImg
    width 64px
    height 46px
    float left
  .text-con
    margin-left 85px  
</style>
<script>
  export default {
    data() {
      return {
        msg: 'hello vue'
      }
    },
    components: {}
  }
</script>
