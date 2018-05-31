<template>
  <div>
    <leftPart></leftPart>
    <baidu-map class="main-con"
               @ready="handler"
               :center="center"
               :scroll-wheel-zoom="true"
               :zoom="zoom">
               <!-- 比例尺 -->
     <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
     <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
     <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
     <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-overview-map>

     <bm-marker :position="{lng: 113.71, lat:  23.044}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
      <bm-label content="途中待命" :labelStyle="{color: 'green', fontSize : '12px'}" :offset="{width: 0, height: 30}"/>
    </bm-marker>
     <bm-marker :position="{lng: 113.72, lat:  23.042}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
      <bm-label content="出勤" :labelStyle="{color: 'red', fontSize : '12px'}" :offset="{width: 0, height: 30}"/>
    </bm-marker>
     <bm-marker :position="{lng: 113.74, lat:  23.045}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
      <bm-label content="途中待命" :labelStyle="{color: 'red', fontSize : '12px'}" :offset="{width: 0, height: 30}"/>
    </bm-marker>
     <bm-marker :position="{lng: 113.73, lat:  23.042}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
      <bm-label content="待命" :labelStyle="{color: 'grey', fontSize : '12px'}" :offset="{width: 0, height: 30}"/>
    </bm-marker>

    </baidu-map>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
.main-con {
  position: absolute;
  left: 360px;
  right: 0;
  top: 0;
  bottom: 0;
  // background url('./car/image/B07调度管理-实时位置01车辆.png')
  background-size: cover;
}
</style>
<script>
import leftPart from './leftPart/leftPart'
export default {
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3
    }
  },
  methods: {
    handler({ BMap, map }) {
      this.center  = {lng: 113.72, lat:  23.042}
      this.zoom = 15
       console.log(BMap, map)
    }
  },
  components: {
    leftPart
  }
}
</script>
