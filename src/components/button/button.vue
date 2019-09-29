<template>
    <div>
        <div id="Button_p" class="b_button_ _primary" v-if="b_type === 'primary'">
            <div class="b_button_slot">
                <slot></slot>
            </div>
        </div>

        <div id="Button_def" class="b_button_ _default" v-if="b_type === 'default'">
            <div class="b_button_slot">
                <slot></slot>
            </div>
        </div>

        <div id="Button_dan" class="b_button_ _danger" v-if="b_type === 'danger'">
            <div class="b_button_slot">
                <slot></slot>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Button',
        props: ['type'], // primary default danger
        data() {
            return {
                b_type: 'default'
            };
        },

        methods: {
            //
            setType(){
                if(this.type !== undefined && this.type !== ''){
                    this.b_type = this.type
                }

            }
        },

        created() {
            // 设置类型
            this.setType();

        },

    };
</script>


<style lang="scss">
    @import '../../styles/brick';

    .b_button_{
        display: flex;
        height: fit-content;
        width: fit-content;
        min-width: 56px;
        padding: 6px 14px;
        font-size: 14px;
        border-radius: $ThemeBorder - 4;
        user-select: none;
    }
    .b_button_slot {
        margin: auto;
    }





    ._primary {
        color: white;
        @include Theme-Bac($theme-color-green,0.9);
    }
    ._primary:hover {
        transition: background-color 100ms, box-shadow 100ms;
        cursor: pointer;
        @include Theme-Bac($theme-color-green);
        @include Theme-BoxShadow(6px,$theme-color-green,0.6);
    }



    ._default{
        color: rgba($BacColor,0.65);
        border: 1px solid #d2d2d2;
        background-color: white;
    }
    ._default:hover{
        transition: border 100ms, color 100ms, box-shadow 100ms;
        cursor: pointer;
        @include Theme-Color($theme-color-green);
        @include Theme-Border(1px,$theme-color-green,0.8);
        @include Theme-BoxShadow(6px,$theme-color-green,0.6);
    }


    ._danger{
        color: white;
        background-color: #ff4d4f;
    }
    ._danger:hover{
        transition: background-color 100ms, box-shadow 100ms;
        cursor: pointer;
        background-color: rgba(255, 21, 35, 0.85);
        box-shadow: 0 0 6px rgba(255, 77, 79, 0.61);
    }

</style>
