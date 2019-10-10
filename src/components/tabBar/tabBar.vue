<template>

    <div id="TabBar" class="b_tab_bar" :style="styles && styles">
        <slot></slot>
    </div>

</template>

<script>
    export default {
        name: 'TabBar',
        props: ['menuData', 'styles'],
        data() {
            return {

            };
        },

        methods:{
            // a标签的跳转功能
            hrefJump(){
                if(this.href !== '' && this.href !== undefined){
                    window.open(this.href,"_blank")
                }
            }

        },

        created(){
            // 主题设置
            // this.Theme = STo.ThemeConfig;

        },

    };
</script>

<style lang="scss">
    @import '../../styles/brick';

    .b_tab_bar{
        height: 60px;
        width: 200px;
        background-color: #42b983;
    }



</style>