<template>
    <div class="records-container">
      <section class="records-title">
        <a>通话记录
        </a><a>紧急通信
        </a>
      </section>
      <div v-for="item in callRecords" :key="item.id" class="records-cont-container">
        <div class="record-top">
          <div class="record-img-container">
          <img src="~img/small-incoming.png" alt="small-incoming"/>
          </div>
          <div class="record-main">
          <div class="record-phone-time"> 
            <span>{{item.phone}}</span>
            <span>{{item.time}}</span>
          </div>
          
          <div class="record-addr"> 
            <span>({{item.address}})</span>
          </div>
          </div>
        </div>
        <div class="record-bottom" >
          <a href="#" >已接听</a>
          <a href="#" >00:00:52</a>
        </div>
      </div>
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

   .records-container {
	   background: #fff;
     width: 20%;
     height: 518px;
     font-size: 14px;
	 position: absolute;
	 z-index: 3;
	 box-shadow: 0 3px 8px 0 rgba(0,0,0,0.15);
     /** 标题 */
     .records-title {
       a {
         display: inline-block;
         line-height: 3rem;
         width: 50%; /** 这里使用px */
         text-align: center;
         margin: 0;
         &:first-child{
           background: #7680A5;
           color: #ffffff;
         }
         &:last-child{
           background: #F2F1F1;
         }
       }
       
       
     }

    /** 内容 */
     .records-cont-container {
       margin-top:0.8rem;

       .record-top{
         width: 100%;
       /** 图像 */
       .record-img-container{
         display: inline-block;
         vertical-align: top;
         width: 15%;
         margin-left: 5%;
       }

       .record-main {
         width: 75%;
         display: inline-block;

       }

      // 号码与时间
       .record-phone-time {
         display: inline-block;
         margin-top: .5rem;
        //  line-height: 50px;
        //  width: 250px;
         span{
           &:first-child{
              color: #333333;
              
          }
          &:last-child {
            color: #999999;
            font-size: 0.75rem;
            margin-left: 2.1rem;
          }
         }
         
       }

       .record-addr{
          color: #666666;
          span{
          font-size: 0.75rem;
          }
        }
      }

       .record-bottom {
         margin-top: .8rem;
         a {
           color: #333333;
         }
       }
     }
   }
</style>
