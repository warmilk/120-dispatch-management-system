<template>
  <div class="contain">
    <Title>求救信息</Title>
    <tableCon>
      <tr>
        <td class="key">急救编号</td><td class="value">20172210</td>
        <td class="key">求救类型</td><td class="value">群体事件</td>
        <td class="key">危重等级</td><td class="value">危重</td>
        <td class="key">发单时间</td><td class="value">2017-07-01  14:32:55</td>
      </tr>
       <tr>
        <td class="key">患者姓名</td><td class="value">张雯雯</td>
        <td class="key">性  别</td><td class="value">男</td>
        <td class="key">年  龄</td><td class="value">61岁</td>
        <td class="key">身  份</td><td class="value">普通</td>
      </tr>
      <tr>
        <td class="key">主  诉</td><td class="value" colspan="7">早上起床心绞痛，突然就感觉不行了</td>
      </tr>
      <tr>
        <td class="key">待  诉</td><td class="value" colspan="7"></td>
      </tr>
    </tableCon>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
.contain
  margin-bottom 30px
.key{
    width 100px
    background #f6f6f6
    text-align center
  }
  .value{

  }
</style>
<script>
  import Title from './title/title.vue'
  import tableCon from './tableCon/tableCon.vue'
  export default {
    data() {
      return {
        msg: 'hello vue'
      }
    },
    components: {
      Title, tableCon
    }
  }
</script>
