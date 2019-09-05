<template>

    <div id="A" class="b_a" @click="hrefJump()">
        <slot></slot>
    </div>

</template>


<script>
    export default {
        name: 'A',
        props: ['href'],
        data() {
            return {

            };
        },

        methods:{
            //
            hrefJump(){
                window.open(this.href,"_blank");
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

    .b_a{
        height: fit-content;
        width: fit-content;
        color: $ThemeColor;
    }
    .b_a:hover{
        cursor: pointer;
        font-weight: bold;
    }


</style>
