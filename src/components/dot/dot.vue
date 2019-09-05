<template>

    <div id="Dot" class="b_dot">
        <a>{{dot__}}</a>
    </div>

</template>


<script>
    export default {
        name: 'Dot',
        props: ['dot__'],
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

    .b_dot{
        position: fixed;
        bottom: 24px;
        right: 24px;
        display: flex;
        height: 54px;
        width: 54px;
        border-radius: 100px;
        background-color: rgba($BacColor, 0.6);
        box-shadow: 0 0 5px rgba($BacColor, 0.5);
        overflow: hidden;
    }
    .b_dot:hover{
        cursor: pointer;
        background-color: rgba($ThemeColor,0.9);
        box-shadow: 0 0 12px rgba($ThemeColor,0.9);
    }
    .b_dot a{
        margin: auto;
        font-weight: bolder;
        font-size: 14px;
        color: white;
    }


</style>