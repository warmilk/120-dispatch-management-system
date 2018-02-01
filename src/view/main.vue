<template>
    <div class="container">

    <!--顶部栏-->
    <!-- <el-col :span="24" class="container__header" ref="container-header">
        <section class="container__limitWidth">
			
        </section>
    </el-col> -->

    <!--内容栏-->
    <!-- <el-col :span="24" id="containerBody">
        <section class="container__limitWidth">
            <transition name="fade" mode="out-in">
				<router-view></router-view>
			</transition>
        </section>
    </el-col> -->

    <!--底部栏-->
    <!-- <el-col :span="24" class="container__footer" ref="container-footer">
        <section class="container__limitWidth">
        </section>
        <section class="container__record">
            <section class="container__limitWidth">
            </section>
        </section>
    </el-col> -->

		<!-- 顶部导航条 -->
		<home-header></home-header>

		<!-- 网站内容 -->
		<main>
            <transition name="fade" mode="out-in">
				<router-view></router-view>
			</transition>
        </main>
    </div>
</template>

<script>
import HomeHeader from '@/components/page-common/HomeHeader.vue';
export default {
    components:{
		'home-header': HomeHeader,
	},
    data(){
        return {
            
        }
    },
    methods: {
        
    },
    mounted(){
        
    }
}
</script>

<style lang="scss" scoped>
.container{
}
</style>