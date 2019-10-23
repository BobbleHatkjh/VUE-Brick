<template>

    <div id="Tip" class="b_tip" @click="hrefJump()">

    </div>

</template>

<script>
    export default {
        name: 'Tip',
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



</style>
