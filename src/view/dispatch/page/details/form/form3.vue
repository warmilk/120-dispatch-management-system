<template>
  <div class="contain">
    <Title>操作日志</Title>
    <tableCon>
      <tr>
        <td class="key">时间</td>
        <td class="key">操作人</td>
        <td class="key">操作事项</td>
        <td class="key">备注</td>
      </tr>
      <tr>
        <td class="value">017-07-07  11:13:25</td>
        <td class="value">张涛</td>
        <td class="value">派单</td>
        <td class="value">发起任务</td>
      </tr>
      <tr>
        <td class="value">2017-07-07  14:33:15</td>
        <td class="value">萧峰</td>
        <td class="value">受理出车</td>
        <td class="value">受理出车</td>
      </tr>
      <tr>
        <td class="value">2017-07-07  14:35:19</td>
        <td class="value">吴思凡</td>
        <td class="value">途中遇变</td>
        <td class="value">途中遇变</td>
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
    text-align center
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
