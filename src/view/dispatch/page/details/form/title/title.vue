<template>
  <div class="title-con" flex="cross:center">
    <slot></slot>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
.title-con
  height 34px
  background #8E95AF
  padding-left 22px
  font-size 12px
  color #fff
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
