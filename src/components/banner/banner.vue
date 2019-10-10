<template>

    <div id="photo" class="head_view" :style="{backgroundImage:'url(' + Img + ')'}" >
        <a>{{title}}</a>
    </div>

</template>



<script>
    export default {
        name: 'Banner',
        props: ['Img','title'],
        data(){
            return{

            }
        },
        methods:{

        },


    }
</script>




<style lang="scss">
    @import '../../styles/brick';

    .head_view{
        display: flex;
        height: 234px;
        width: 100%;
        box-shadow: 0 0 30px #969696;
        background: #7d7d7d no-repeat center;
        background-size:cover;
        @include Theme-Color($theme-color-green);
    }
    .head_view a{
        margin: auto;
        color: white;
        font-size: 40px;
        font-weight: bolder
    }
</style>