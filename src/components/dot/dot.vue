<template>

    <div id="Dot" class="b_dot" :style="b_dot_style" :class="backGroundColor === 'white' && 'b_dot_white'">
        <div class="b_dot_slot">
            <slot></slot>
        </div>
    </div>

</template>


<script>
    export default {
        name: 'Dot',
        props: ['fillet','backGroundColor'],
        data(){
            return{
                b_dot_style:{
                    borderRadius:'100px'
                }
            }
        },
        methods:{
            filletSelect (){
                if(!this.fillet){
                    this.b_dot_style.borderRadius = '5px'
                }
            }
        },
        created() {
            this.filletSelect();

        }

    }
</script>


<style lang="scss">
    @import '../../styles/brick';

    .b_dot{
        position: fixed;
        bottom: 100px;
        right: 30px;
        display: flex;
        height: 54px;
        width: 54px;
        color: white;
        background-color: rgba($BacColor, 0.6);
        box-shadow: 0 0 8px rgba($BacColor, 0.4);
        overflow: hidden;
    }
    .b_dot:hover{
        cursor: pointer;
        @include Theme-Bac($theme-color-green,0.9);
        @include Theme-BoxShadow(12px,$theme-color-green,0.9);
    }
    .b_dot_white{
        color: #161616;
        background-color: white
    }
    .b_dot_white:hover{
        color: white;
    }

    .b_dot_slot{
        margin: auto;
        font-weight: bolder;
        font-size: 14px;
    }

</style>