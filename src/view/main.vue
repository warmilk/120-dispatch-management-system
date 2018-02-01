<template>
    <el-row class="container">

    <!--顶部栏-->
    <el-col :span="24" class="container__header" ref="container-header">
        <section class="container__limitWidth">
        </section>
    </el-col>

    <!--正文栏-->
    <el-col :span="24" id="containerBody" v-bind:class="[ !!$route.meta.showMainPageBg ? 'has-body-bg' : '' ,'container__body']" ref="container-body">
        <section class="container__limitWidth">
            <!--侧边栏-->
            <aside class="container__aside">
                <!-- <home-aside></home-aside> -->
            </aside>
            <!--内容栏-->
            <section id="containerContent" class="container__content container__discard-margin-collapse">
                <!--面包屑-->
                <!-- <bread-crumb></bread-crumb> -->
                <!--其他内容-->
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </section>
        </section>
    </el-col>

    <!--底部栏-->
    <el-col :span="24" class="container__footer" ref="container-footer">
        <section class="container__limitWidth">
        </section>
        <!--备案栏-->
        <section class="container__record">
            <section class="container__limitWidth">
                <!-- <home-record></home-record> -->
            </section>
        </section>
    </el-col>

    </el-row>
</template>

<script>
export default {
    
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
</style>