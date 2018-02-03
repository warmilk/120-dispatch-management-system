<template>
  <div>
    <searchBox></searchBox>
    <aTable></aTable>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
</style>
<script>
import searchBox from './search-box/search-box'
import aTable from './table/table'
  export default {
    data() {
      return {
        msg: 'hello vue'
      }
    },
    components: {
      searchBox,
      aTable
    }
  }
</script>
