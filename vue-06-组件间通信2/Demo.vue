<template>
    <div> 
        <!--头部导航区域-->
        <app-navbar></app-navbar>

        <!--核心区域:分左右两边-->
        <div class="container-fluid">
        <div class="row">

            <!--左边菜单栏区域-->
            <app-leaf></app-leaf>

            <!--右边主页面区域: 分上下两个区域-->
            <app-home>
            <h1 slot="dashboard" class="page-header">{{ title }}</h1>            
            </app-home>
        </div>
        </div>
    </div>
</template>

<script>
export default {
        template,
        data() {
            return {
                title:'表格'
            }
        },
        components:{
            AppNavbar,
            AppLeaf,
            AppHome
        }
}
</script>

<style lang="">
    .header {
        color:red
    }
</style>
