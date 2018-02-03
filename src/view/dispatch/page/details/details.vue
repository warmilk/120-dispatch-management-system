<template>
  <div class="contain">
   <Nav></Nav>
   <form1></form1>
   <form2></form2>
   <form3></form3>
   <formDo></formDo>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
.contain
  margin 0 10px
</style>
<script>
import Nav from './compontent/nav'
import form1 from './form/form1'
import form2 from './form/form2'
import form3 from './form/form3'
import formDo from './form/formDo'
  export default {
    data() {
      return {
        msg: 'hello vue'
      }
    },
    components: {
      Nav, form1, form2, form3, formDo
    }
  }
</script>
