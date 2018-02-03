<template>
  <div  class="acceptRecord-table-con">
    <table>
      <slot></slot>
    </table>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
.acceptRecord-table-con{
  table,table tr th, table tr td {
    border:1px solid #e4e4e4; 
  }
  table { 
    width 100%; 
    background #fff
    text-align: left; 
    border-collapse: collapse; 
    } 
  td {
    min-height 40px
    padding 11px 10px
    vertical-align middle
    font-size: 13px;
    color #333
    word-break break-all
  }
}
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
