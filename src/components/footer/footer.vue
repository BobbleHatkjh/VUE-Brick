<template>
    <div ref="foot" :class="footFold ? 'foot':'foot_unfold'" :style="footer_height" @mouseover="hov(1)" @mouseout="hov(0)">
        <div class="up" v-if="footFold" :style="footer_trigger_style">
            <img src="../../../static/up_white.png" alt="up" class="up_img">
        </div>
        <div class="foot_con">
            <div class="foot_logo">
                <img :src="logo" alt="logo" class="foot_img" draggable="false"/>
            </div>
            <div class="foot_list">
                <div class="foot_input_frame">
                    <div class="foot_input_div">
                        <div class="foot_input_textarea" v-model="text_word">
                            <slot></slot>
                        </div>
                    </div>
                </div>


                <div class="foot_list_frame">
                    <div class="foot_list_frame_div"><a class="mar">联系我们</a></div>
                    <div class="qr_code">
                        <img :src="QRCode" alt="QR_code" draggable="false">
                    </div>
                </div>

            </div>

        </div>
        <div class="supplier">
            <div class="supplier_text"><a class="mar">合作链接</a></div>
            <div class="tou_wei" v-for="value in support" :key="value.name">
                <a class="mar support" @click="OutLink(value.link)">{{value.name}}</a>
            </div>

            <!--<div class="supplier_link" v-if="$store.state.header_style === 'account'">-->
                <!--<Link/>-->
            <!--</div>-->

        </div>
    </div>
</template>


<script>
    import QRCode from '../../../static/QRcode.png'

    export default {
        name: 'Footer',
        props: ['logo', 'support', 'trigger', 'footFold'],
        data() {
            return {
                footer_trigger_style: { margin: '-60px auto 0 auto',opacity:'' },
                QRCode: QRCode,
                footer_height:{ height:'' },
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
            // turn (from,index,to){  // 依据所选header项载入二级页面
            //     this.turnTo(from,index,to);
            // },
            OutLink(linkUrl) {
                window.open(linkUrl, "_blank");
            },


        },
        created() {
            // let STo = this.$store.state;
            // this.footer__ = STo[STo.language].footer;

            this.footerTrigger();

            // 主题设置
            // this.Theme = STo.ThemeConfig;

        },


    };
</script>

<style lang="scss">
    @import '../../styles/brick';

    .mar {
        margin: auto;
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
        background-color: rgba($BacColor, 0.5);
        transition: height 300ms;
    }
    .foot_unfold{
        width: 100%;
        padding-top: 1px;
        background-color: rgba($BacColor, 0.5);
        transition: height 300ms;
    }

    .foot_con {
        display: flex;
        height: 200px;
        width: 1080px;
        margin: 30px auto 0 auto;
    }

    .supplier {
        display: flex;
        height: 30px;
        width: 1080px;
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
        margin: auto 10px auto 0;
        background-color: rgba($BacColor, 0.6);
        box-shadow: 0 0 20px rgba($BacColor, 0.6);
        border-radius: $ThemeBorder;
    }

    .foot_input_frame {
        display: flex;
        height: 200px;
        width: 560px;
        margin: auto 0;
    }

    .foot_input_div {
        display: block;
        height: 100%;
        width: 380px;
    }

    .foot_input_textarea {
        height: 172px;
        width: 512px;
        margin: 0 auto auto 10px;
        padding: 14px;
        background-color: rgba($BacColor, 0.6);
        box-shadow: 0 0 20px rgba($BacColor, 0.6);
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

    .qr_code img {
        margin: auto;
        height: 81%;
        width: 81%
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

    .support:hover {
        cursor: pointer;
        color: $ThemeColor;
    }


</style>
