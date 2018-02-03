<template>
    <div class="phone-container">
      
    </div>
</template>

<script>
export default {
    data () {
        return {
            "callRecords" : [{
              "id": 1,
              "address": "广东广州",
              "phone": "13890228795",
              "time": "昨天15:00"
            },{
              "id": 2,
              "address": "广东广州",
              "phone": "13890228795",
              "time": "昨天15:00"
            }]
        }
    }
}
</script>

<style lang="scss" scoped>

   .phone-container {
	   position: absolute;
	   z-index: 3;
      box-sizing: border-box;
      width: 20%;
      height: 518px;
      font-size: 14px;
      background: #8d7373;
	  right: 0;
   }
</style>
