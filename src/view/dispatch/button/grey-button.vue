<template>
  <div class="grey-button" @click="doClick">
    <slot></slot>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
.grey-button
    height 34px;
    width 152px;
    background: #f5f7fa;
    text-align center 
    line-height 34px
    border: 1px solid #D9D9D9;
    border-radius: 3px;
    font-size: 12px;
    color: #666;
    margin 0 15px;
    cursor pointer
    display inline-block
    &:hover
      background #f6f6f6
</style>
<script>
  export default {
    data() {
      return {
        msg: 'hello vue'
      }
    },
    methods: {
      doClick() {
        this.$emit('doClick')
      }
    },
    components: {}
  }
</script>
