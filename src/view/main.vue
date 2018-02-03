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
		<!-- 底部版权栏 -->
		<home-footer></home-footer>
    </div>
</template>

<script>
import HomeHeader from '@/components/page-common/HomeHeader.vue';
import HomeFooter from '@/components/page-common/HomeFooter.vue';
export default {
    components:{
		'home-header': HomeHeader,
		'home-footer': HomeFooter,
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
	main{
		height: auto;
		min-height: 810px;
		position: relative;
	}
}
</style>