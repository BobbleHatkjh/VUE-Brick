<template>
    <div ref="foot" :class="footFold ? 'foot':'foot_unfold'" :style="footer_height" @mouseover="hov(1)" @mouseout="hov(0)">
        <div class="up" v-if="footFold" :style="footer_trigger_style">
            <img :src="drop_img" alt="up" class="up_img">
        </div>
        <div class="foot_con">
            <div class="foot_logo">
                <img :src="logo" alt="logo" class="foot_img" draggable="false"/>
            </div>
            <div class="foot_list">
                <div class="foot_input_frame">
                    <div class="foot_input_div">
                        <div class="foot_input_textarea" :class="grid && 'grid'" v-model="text_word">
                            <slot></slot>
                        </div>
                    </div>
                </div>


                <div class="foot_list_frame" :class="[themeConfig && 'foot_list_frame_theme', grid && 'grid']">
                    <div class="foot_list_frame_div"><a class="mar">联系我们</a></div>
                    <div class="qr_code">
                        <img :src="QRCode" class="qr_code_img" :class="themeConfig && 'QRCode_img_theme'" alt="QR_code" draggable="false">
                    </div>

                    <div class="theme_drop" v-if="themeConfig" :class="!grid && 'grid_drop'">
                        <div class="theme_drop_title">

                        </div>

                        <div class="theme_drop_color">
                            <div class="theme_drop_green" @click="themeFun('green')"></div>
                            <div class="theme_drop_blue" @click="themeFun('blue')"></div>
                            <div class="theme_drop_red" @click="themeFun('red')"></div>
                        </div>


                    </div>
                </div>

            </div>

        </div>
        <div class="supplier">
            <div class="supplier_text"><a class="mar">合作链接</a></div>
            <div class="tou_wei" v-for="value in support" :key="value.name">
                <a class="mar support" @click="OutLink(value.link)">{{value.name}}</a>
            </div>

            <!--            <div class="supplier_link">-->

            <!--            </div>-->


        </div>

    </div>
</template>


<script>
    import up_white from '../../../static/up_white.png'

    export default {
        name: 'Footer',
        props: ['logo', 'support', 'trigger', 'footFold', 'themeConfig', 'QRCode', 'grid'],
        data() {
            return {
                footer_trigger_style: { margin: '-60px auto 0 auto',opacity:'' },
                footer_height:{ height:'' },
                drop_img: up_white,
                text_word: ''
            }
        },
        methods: {
            footerTrigger() {
                switch (this.trigger) { // 默认居中
                    case 'left':
                        this.footer_trigger_style = {margin: '-60px auto 0 0'};
                        break;
                    case 'mid':
                        this.footer_trigger_style = {margin: '-60px auto 0 auto'};
                        break;
                    case 'right':
                        this.footer_trigger_style = {margin: '-60px 0 0 auto'};
                        break;
                    default:
                        break
                }
                if(!this.footFold){
                    this.footer_height.height = '310px';
                }
            },

            // 改变主题
            themeFun(color){
                const config_ = window.document.documentElement;
                if(color === 'red'){
                    config_.setAttribute('data-theme', 'red');
                } else if (color === 'blue'){
                    config_.setAttribute('data-theme', 'blue');
                } else {
                    config_.setAttribute('data-theme', 'green');
                }
            },

            hov(from) {
                if(this.footFold){
                    if (from) {
                        this.footer_height.height = '310px';
                        this.footer_trigger_style.opacity = '0'
                    } else {
                        this.footer_height.height = '0';
                        this.footer_trigger_style.opacity = '1'
                    }
                }
            },

            OutLink(linkUrl) {
                window.open(linkUrl, "_blank");
            },


        },
        created() {
            // this.footer__ = STo[STo.language].footer;
            this.footerTrigger();

        },


    };
</script>

<style lang="scss">
    @import '../../styles/brick';

    .mar {
        margin: auto;
    }
    .grid{
        background-color: rgba($BacColor, 0.6);
        box-shadow: 0 0 15px rgba($BacColor, 0.5);
    }

    .up {
        display: flex;
        height: 60px;
        width: 120px;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        transition: opacity 300ms;
        background-color: rgba($BacColor, 0.5);
    }

    .up_img {
        height: 80px;
        width: 80px;
        margin: -8px auto 0 auto;
    }

    .foot {
        position: fixed;
        z-index: 99;
        bottom: 0;
        height: 0;
        width: 100%;
        padding-top: 1px;
        background-color: rgba($BacColor, 0.6);
        transition: height 300ms;
    }
    .foot_unfold{
        width: 100%;
        padding-top: 1px;
        background-color: rgba($BacColor, 0.6);
        transition: height 300ms;
    }

    .foot_con {
        display: flex;
        height: 200px;
        width: 1024px;
        margin: 30px auto 0 auto;
    }

    .supplier {
        display: flex;
        height: 30px;
        width: 1024px;
        z-index: -0;
        margin: 24px auto 0 auto;
    }

    .foot_logo {
        display: flex;
        height: 200px;
        width: 300px;
        margin: 0 0 0 auto;
        border-right: 2px solid white;
    }

    .foot_img {
        height: 78%;
        width: auto;
        max-width: 95%;
        margin: auto auto auto 0;
    }

    .foot_list {
        display: flex;
        height: 200px;
        width: 950px;
        padding-left: 6px;
        margin: 0 auto 0 0;
        color: white;
    }

    .foot_list_frame {
        height: 200px;
        width: 150px;
        margin: 0 10px auto 0;
        border-radius: $ThemeBorder;
    }
    .foot_list_frame_theme{
        height: 170px;
    }

    .foot_input_frame {
        display: flex;
        height: 200px;
        width: 600px;
        margin: auto 0;
    }

    .foot_input_div {
        display: block;
        height: 100%;
        width: 600px;
    }

    .foot_input_textarea {
        height: 172px;
        width: 552px;
        margin: 0 auto auto 8px;
        padding: 14px;
        color: white;
        border: none;
        font-size: 16px;
        outline: none;
        border-radius: $ThemeBorder;
        resize: none;
    }


    .foot_list_frame_div {
        display: flex;
        height: 40px;
        width: 100%;
        font-weight: bolder;
        font-size: 16px;
        margin: 0 auto;
        border-radius: $ThemeBorder;
    }


    .qr_code {
        display: flex;
        height: 150px;
        width: 100%;
        margin: 0 auto;
    }
    .qr_code_img {
        margin: auto;
        height: 81%;
        width: 81%
    }
    .QRCode_img_theme{
        margin: 0 auto auto auto;
        height: 74%;
        width: 74%
    }
    .theme_drop{
        display: block;
        position: relative;
        height: 25px;
        width: 150px;
        margin: -15px auto auto auto;
        text-align: center;
        border-radius: $ThemeBorder;
        z-index: 100;
        background-color: rgba($BacColor,0.6);
        box-shadow: 0 0 15px rgba($BacColor, 0.6);
        overflow: hidden;
    }
    .theme_drop:hover{
        cursor: pointer;
        transition: height 200ms;
        height: 80px;
    }
    .grid_drop{
        width: 120px;
    }

    .theme_drop_title{
        height: 11px;
        width: 88.6%;
        /* 134 */
        margin: 7px auto;
        border-radius: $ThemeBorder;
        @include Theme-Bac($theme-color-green,0.8);
    }
    .theme_drop_title:hover{
        cursor: default;
    }

    .theme_drop_color{
        display: flex;
        height: 38px;
        width: 88.6%;
        /* 134 */
        margin: 16px auto 0 auto;
    }

    .theme_drop_green{
        height: 100%;
        width: 30%;
        margin: 0 auto 0 0;
        border-radius: $ThemeBorder - 6;
        background-color: $theme-color-green;
    }
    .theme_drop_blue{
        height: 100%;
        width: 30%;
        margin: 0 auto;
        border-radius: $ThemeBorder - 6;
        background-color: $theme-color-blue;
    }
    .theme_drop_red{
        height: 100%;
        width: 30%;
        margin: 0 0 0 auto;
        border-radius: $ThemeBorder - 6;
        background-color: $theme-color-red;
    }


    .supplier_text {
        display: flex;
        height: 100%;
        width: 65px;
        margin: auto 14px auto 10px;
        font-size: 14px;
        font-weight: bolder;
        color: white;
    }


    .tou_wei {
        display: flex;
        height: 80%;
        margin: auto 7px;
        font-size: 16px;
        font-weight: bolder;
        color: white;
    }

    .support {
        text-decoration: none;
        color: white;
    }

    .supplier_link{
        display: flex;
        height: 32px;
        width: 80px;
        padding-left: 5px;
        margin: -2px 105px auto auto;
        border-radius: $ThemeBorder;
        background-color: rgba($BacColor,0.5);
        box-shadow: 0 0 20px rgba($BacColor, 0.6);
    }
    .link_drop{
        display: block;
        height: 20px;
        width: 50px;
        background-color: #66ccff;
    }
    .support:hover {
        cursor: pointer;
        @include Theme-Color($theme-color-green);
    }


</style>
