<template>

    <div id="Inclusion" class="b_inclusion" >

    </div>

</template>


<script>
    export default {
        name: 'Inclusion',
        props: ['inclusion'],
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