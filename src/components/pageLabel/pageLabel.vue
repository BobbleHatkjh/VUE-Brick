<template>

    <div id="PageLabel" class="b_page_label">
        <div v-if="avatar" class="b_page_label_avatar"></div>
        <a>{{title}}</a>
    </div>

</template>


<script>
    export default {
        name: 'PageLabel',
        props: ['avatar','title'],
        data() {
            return {

            };
        },

        methods:{


        },

        created(){

            // 主题设置
            // this.Theme = STo.ThemeConfig;

        },

    };
</script>

<style lang="scss">
    @import '../../styles/brick';

    .b_page_label{
        display: flex;
        height: 60px;
        width: 100%;
        text-align: left;
    }
    .b_page_label a{
        font-size: 22px;
        font-weight: bolder;
        margin: auto auto auto 20px;
    }

    .b_page_label_avatar{
        height: 40px;
        width: 40px;
        margin: auto -10px auto 13px;
        border-radius: 100px;
        overflow: hidden;
        background: url("../../../static/noface.png") no-repeat 100% 100%;
        background-size: 100%;
        box-shadow: 0 0 10px rgba($BacColor, 0.5);
    }


</style>