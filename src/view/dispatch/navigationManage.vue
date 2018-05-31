<template>
  <div>
    <leftPart2></leftPart2>
    <baidu-map class="main-con">
    <bm-view class="map-con">
    </bm-view>
    <bm-driving
      start="广东医科大学东莞校区"
      end="大岭山镇"
      :auto-viewport="true"
      policy="BMAP_DRIVING_POLICY_LEAST_DISTANCE"
      :panel="false"
      location="东莞"
      :waypoints="['松山湖']">
    </bm-driving>
  </baidu-map>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
.main-con
  position absolute
  left 360px
  right 0
  top 0;
  bottom: 0
  // background url('./car/image/B09调度管理-导航管理.png')
  background-size cover
.map-con
  width 100%
  height 100%  
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
