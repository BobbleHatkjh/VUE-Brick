<template>

    <div id="left" class="left_bar">
        <div class="occupy">

        </div>


        <div class="div_frame" v-for="(value, index) in naviRouter" :key="value.name">
            <div class="left_frame" @click="value.lab.length === 0 ? turn(value.path,index) : value.show_ = !value.show_" :class="(value.show_ && value.lab.length !== 0) && 'drop_off_css'">
                <a :class="select_open[0] === index && 'left_frame_select_color'">{{ value.name }}</a>
            </div>
            <div class="left_frame_drop" v-show = "value.show_">
                <div class="drop_paste">
                    <div class="left_frame_drop_mid" v-for="(valueIn, indexIn) in value.lab" @click="turn(valueIn.onclick,valueIn.To,index,indexIn)" :class="indexIn === value.lab.length - 1 && 'drop_last_css'">
                        <div class="left_frame_drop_select" :class="(select_open[0] === index && select_open[1] === indexIn) && 'left_frame_drop_select_bac'">
                            <a>{{ valueIn.name }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<script>
    export default {
        name: 'NaviBar',
        props: ['naviBarData','link','test'],
        data(){
            return{
                naviRouter: [],   // 路由数据
                select_open: [99,99],  // 打开的位置
            }
        },
        methods:{
            turn(Todo,to,index,indexIn) {
                if(to !== undefined){
                    if(Todo === 'toTurn'){
                        this.test && console.log(`点击跳转到内部链接 ${to}`);
                        this.$emit('return',to) // @return
                    } else {
                        // 外部链接
                        window.open(to,"_blank");
                    }
                }
                this.select_open = [index,indexIn];
            },

            naviData(){
                // 解析目录
                const routerData = [];
                this.naviBarData.map(
                    (item) => {
                        const newData = {};
                        newData.show_ = false;
                        newData.name = item.name;
                        if(item.path !== undefined && item.path !== ''){
                            newData.onclick = 'toTurn';
                            newData.To = item.path
                        } else {
                            newData.onclick = 'toOut';
                            newData.To = item.linkUrl
                        }
                        newData.lab = [];
                        if(item.lab){
                            item.lab.map(
                                (itemIn) => {
                                    const newDataIn = {};
                                    newDataIn.show_ = false;
                                    newDataIn.name = itemIn.name;
                                    if(itemIn.path !== undefined && itemIn.path !== ''){
                                        newDataIn.onclick = 'toTurn';
                                        newDataIn.To = itemIn.path
                                    } else {
                                        newDataIn.onclick = 'toOut';
                                        newDataIn.To = itemIn.linkUrl
                                    }
                                    newData.lab.push(newDataIn);
                                }
                            )
                        }
                        routerData.push(newData);
                    }
                );
                this.naviRouter = routerData;
                this.test && console.log(routerData);
            },


        },

        created(){
            // 解析目录
            this.naviData();

            // 主题设置
            // this.Theme = STo.ThemeConfig;

        },

        destroyed() {
            this.select_open = [99,99]
        }

    }
</script>



<style lang="scss">
    @import '../../styles/brick';

    .occupy{
        height: 30px;
    }
    .left_bar{
        text-align: center;
        height: 100%;
        width: 100%;
        float: left;
        margin: 0 auto auto auto;
        overflow: auto;
    }
    .left_bar::-webkit-scrollbar{
        width: 0;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 0;
    }

    .div_frame{
        display: block;
        width: 80%;
        margin: 20px auto;
    }
    .left_frame{
        display: flex;
        height: 34px;
        width: 100%;
        margin: 0 auto;
        color: rgba($BacColor,0.6);
        font-weight: bolder;
        border-radius: $ThemeBorder;
        border-left: 3px solid rgba(0,0,0,0);
        border-right: 3px solid rgba(0,0,0,0);
        background-color: rgba($BacColor,0.08);
        box-shadow: 0 0 5px rgba($BacColor,0.08);
    }
    .left_frame:hover{
        cursor: pointer;
        @include Theme-Color($theme-color-green);
        @include Theme-BorderLeft(3px,$theme-color-green);
        @include Theme-BorderRight(3px,$theme-color-green);
        transition: box-shadow 200ms, background-color 200ms;
        background-color: white;
        @include Theme-BoxShadow(5px,$theme-color-green,0.6);
    }
    .left_frame a{
        margin: auto;
    }
    .drop_off_css{
        border-bottom-right-radius: 0;
        @include Theme-BorderLeft(3px,$theme-color-green);
        @include Theme-BorderRight(3px,$theme-color-green);
    }
    .left_frame_select_color{
        @include Theme-Color($theme-color-green);
    }


    .left_frame_drop{
        display: flex;
        width: 100%;
        margin: 0 -3px 0 auto;
    }
    .drop_paste{
        display: block;
        width: 82%;
        margin: 0 0 auto auto;
    }
    .left_frame_drop_mid{
        display: flex;
        height: 30px;
        width: 100%;
        margin: 0 0 auto auto;
        font-size: 14px;
        @include Theme-BorderRight(3px,$theme-color-green);
        animation: table_navi 0.25s infinite;
        animation-iteration-count:1;
        color: rgba($BacColor,0.6);
        background-color: rgba($BacColor,0.03);
        overflow: hidden;
    }
    .left_frame_drop_mid:hover{
        cursor: pointer;
        color: white;
        transition: box-shadow 100ms ,background-color 100ms;
        @include Theme-Bac($theme-color-green,0.8);
    }
    .left_frame_drop_select{
        display: flex;
        height: 100%;
        width: 100%;
        margin: auto;
    }
    .left_frame_drop_select a{
        margin: auto;
    }
    .left_frame_drop_select_bac{
        color: white;
        @include Theme-Bac($theme-color-green,0.9);
    }


    .drop_last_css{
        border-bottom-left-radius: $ThemeBorder;
        border-bottom-right-radius: $ThemeBorder;
    }
    .drop_select{
        @include Theme-Bac($theme-color-green,0.9);
    }



    @keyframes table_navi
    {
        from { height: 22px }
        to { height: 30px }
    }



</style>