<template>
    <div class="link_bac">
        <div class="qub" style="margin: auto 3px auto auto">
            <img src="../../../static/weiChat.png" alt="" class="qub_img">
        </div>
        <div class="qub">
            <img src="../../../static/weiBo.png" alt="" class="qub_img">
        </div>
        <div class="qub_2" @click="language">
            <a class="mar">{{lan}}</a>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Link',
        // inject: ['ComponentCall'],
        props: ['link__'],
        data() {
            return {
                lan: 'EN',
            };
        },
        methods:{
            // 改变了显示语言
            language(){
                console.log('点击了切换语言');
                // let STo = this.$store.state;
                // switch (STo.language) {
                //     case 'ENG':  // 原先是英文 变成中文
                //         STo.language = 'CHN';
                //         // this.ComponentCall('Tip', { status: 'success', message: '语言已切换至 中文' });
                //         break;
                //     case 'CHN':  // 原先是中文 变成英文
                //         STo.language = 'ENG';
                //         // this.ComponentCall('Tip', { status: 'success', message: 'Language switched to English' });
                //         break;
                // }
            }

        },

        created() {
            // let STo = this.$store.state;
            // if(STo.language === 'CHN'){
            //     console.log('中文');
            //     this.lan = 'EN';
            // } else {
            //     this.lan = '中';
            // }
        }


    };
</script>




<style lang="scss">
    @import '../../styles/brick';
    .mar{
        margin: auto;
    }
    .link_bac{
        display: flex;
        height: 40px;
        width: 120px;
        margin: auto 0;
    }

    .qub{
        display: flex;
        height: 30px;
        width: 30px;
        margin: auto 3px;
        background-color: rgba($BacColor,0.4);
        border-radius: $ThemeBorder - 4;
    }
    .qub:hover{
        cursor: pointer;
        background-color: rgba($ThemeColor,0.8);
        box-shadow: 0 0 10px rgba($ThemeColor,0.6);
    }
    .qub_2{
        display: flex;
        height: 30px;
        width: 30px;
        margin: auto 5px auto 3px;
        color: black;
        font-weight: bolder;
        font-size: 14px;
        border-radius: $ThemeBorder - 4;
        background-color: #ffffff;
    }
    .qub_2:hover{
        color: $ThemeColor;
        cursor: pointer;
        box-shadow: 0 0 10px rgba(255,255,255,0.3);
    }
    .qub_img{
        height: 90%;
        width: 90%;
        margin: auto;
    }

</style>
