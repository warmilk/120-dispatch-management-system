<template>
    <div class="container">
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