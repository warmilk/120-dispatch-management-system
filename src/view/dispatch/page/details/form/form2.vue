<template>
  <div class="contain">
    <Title>调度信息</Title>
    <tableCon>
      <tr>
        <td class="key">急救单位</td><td class="value">乳源县瑶族自治县人民医院</td>
        <td class="key">受理时间</td><td class="value">2017-07-07  14:33:15</td>
        <td class="key">任务状态</td><td class="value">已受理</td>
      </tr>
       <tr>
        <td class="key">车  辆</td><td class="value">粤F-120JJ</td>
        <td class="key">司  机</td><td class="value">张一凡</td>
        <td class="key">司机电话</td><td class="value">18528286422</td>
      </tr>
      <tr>
        <td class="key">出诊医生</td><td class="value">吴思凡（产科)</td>
        <td class="key">出诊护士</td><td class="value">欧阳姗姗</td>
        <td class="key">担架员</td><td class="value">张桥</td>
      </tr>
      <tr>
        <td class="key">调度派单事件</td><td class="value">2017-07-07  15:00:00</td>
        <td class="key">调度人员</td><td class="value">萧峰</td>
        <td class="key">车辆状态</td><td class="value">途中遇变-车辆故障</td>
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
