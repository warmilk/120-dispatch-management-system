<template>
    <section class="left-nav">
        <section class="nav-title">
            急救站列表
        </section>
        <ul class="nav-ul">
            <li v-for="(item, index) in hospitalList" :key="item.id" v-bind:class="index==activeIndex? 'active-li':''" @click="activeItemIndex(index)">{{item.name}}</li>
        </ul>
    </section>
</template>

<script>
    export default {
      data() {
        return {
            hospitalList: hospitalList,
            activeIndex: 0
        };
      },
      methods: {
        activeItemIndex(index) {
          this.activeIndex = index;
          this.$emit("selectHospital", this.hospitalList[index]);
        }
      }
    };

    // 医院列表模拟的数据;
	var hospitalList = [
	  {
	    id: 1,
	    name: "乳源县瑶族自治区120中心"
	  },
	  {
	    id: 2,
	    name: "乳源中医院120中心"
	  },
	  {
	    id: 3,
	    name: "乳源县瑶族自治区120中心"
	  },
	  {
	    id: 4,
	    name: "乳源中医院120中心"
	  },
	  {
	    id: 5,
	    name: "乳源第一人民医院120中心"
	  },
	  {
	    id: 6,
	    name: "乳源县瑶族自治区120中心"
	  },
	  {
	    id: 7,
	    name: "乳源中医院120中心"
	  },
	  {
	    id: 8,
	    name: "乳源第一人民医院120中心"
	  }
	];
</script>


<style lang="scss" scoped>
    .left-nav {
      width: 20%;
      float: left;
    }
    .nav-title {
      height: 40px;
      color: #ffffff;
      background: #7680a5;
      text-align: center;
      line-height: 40px;
      font-size: 14px;
    }
    .nav-ul {
      li {
        list-style-position: inside;
        list-style-image: url("~img/right-arrow.png");
        list-style-type: none;
        margin-top: 1px;
        padding-left: 15px;
        height: 46px;
        font-size: 12px;
        color: #333333;
        background: #f9f9f9;
        line-height: 46px;

        &:hover {
          color: #3b56b6;
          border-left: 3px solid #3b56b6;
        }
        &.active-li {
          color: #3b56b6;
          border-left: 3px solid #3b56b6;
        }
      }
    }
</style>
