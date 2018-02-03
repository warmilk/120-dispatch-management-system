<template>
  <div>
    <div class="leftPart">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
.leftPart
  position absolute
  left 0;
  width 360px;
  top 0
  bottom 0
  background: #FFFFFF;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.50);
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
