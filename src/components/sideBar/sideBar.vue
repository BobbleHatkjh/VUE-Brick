<template>

    <div id="left" class="side_bar" :style="styles && styles">
        <div class="occupy">
            <slot></slot>
        </div>

        <div class="div_frame" v-for="(value, index) in sideRouter" :key="value.name">
            <div
                    class="left_frame"
                    @click="value.lab.length === 0 ? turn(value.path,index) : value.show_ = !value.show_"
                    :class="(value.show_ && value.lab.length !== 0) && 'drop_off_css'"
                    @mouseover="value.hover_ = !value.hover_"
                    @mouseout="value.hover_ = !value.hover_"
            >
                <div
                        class="left_frame_animate"
                        :class="[( value.hover_) && 'left_frame_animate_hover',value.show_ && 'left_frame_animate_hover']"
                >
                </div>

                <div class="left_frame_word">
                    <a
                            :class="select_open[0] === index && (value.show_ ? 'left_frame_select_color_w' : 'left_frame_select_color_t')"
                            :style="value.hover_ && { color:'white' }"
                    >
                        {{ value.name }}
                    </a>
                </div>

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
        name: 'SideBar',
        props: ['menuData','styles','link','test'],
        data(){
            return{
                sideRouter: [],   // 路由数据
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

            menuDataAnalyse(){
                // 解析目录
                const routerData = [];
                this.menuData.map(
                    (item) => {
                        const newData = {};
                        newData.show_ = false;
                        newData.hover_ = false;
                        newData.name = item.name;
                        if(item.path !== undefined && item.path !== ''){
                            newData.onclick = 'toTurn';
                            newData.To = item.path
                        } else {
                            newData.onclick = 'toOut';
                            newData.To = item['linkUrl']
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
                                        newDataIn.To = itemIn['linkUrl']
                                    }
                                    newData.lab.push(newDataIn);
                                }
                            )
                        }
                        routerData.push(newData);
                    }
                );
                this.sideRouter = routerData;
                this.test && console.log(routerData);
            },


        },

        created(){
            // 解析目录
            this.menuDataAnalyse();

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
        min-height: 30px;
    }
    .side_bar{
        position: relative;
        text-align: center;
        height: 100%;
        width: 100%;
        float: left;
        margin: 0 auto auto auto;
        overflow: auto;
    }
    .side_bar::-webkit-scrollbar{
        width: 8px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 8px;
    }
    .side_bar::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius: 5px;
        background: #878787;
    }

    .div_frame{
        display: block;
        width: 80%;
        margin: 20px auto;
    }
    .left_frame{
        position: relative;
        z-index: 1;
        display: block;
        height: 34px;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        color: rgba($BacColor,0.6);
        font-weight: bolder;
        border-radius: $ThemeBorder;
        background-color: rgba($BacColor,0.08);
        box-shadow: 0 0 3px rgba($BacColor,0.08);
        overflow: hidden;
    }
    .left_frame:hover{
        cursor: pointer;
        color: white;
    }
    .left_frame_animate{
        position: absolute;
        display: block;
        z-index: 2;
        transition: width 300ms;
        height: 100%;
        width: 0;
        @include Theme-Bac($theme-color-green)
    }
    .left_frame_animate_hover{
        width: 100%;
    }
    .left_frame_word{
        position: absolute;
        display: flex;
        z-index: 3;
        height: 100%;
        width: 100%;
    }
    .left_frame_word a{
        transition: color 300ms;
        margin: auto;
    }

    .drop_off_css{
        border-bottom-right-radius: 0;
    }
    .left_frame_select_color_t{
        @include Theme-Color($theme-color-green);
    }
    .left_frame_select_color_w{
        color: white;
    }


    .left_frame_drop{
        display: flex;
        width: 100%;
        margin: 0 0 0 auto;
    }
    .drop_paste{
        display: block;
        width: 87%;
        margin: 0 0 auto auto;
    }
    .left_frame_drop_mid{
        display: flex;
        height: 30px;
        width: 100%;
        margin: 0 0 auto auto;
        font-size: 14px;
        animation: table_side 0.25s infinite;
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



    @keyframes table_side
    {
        from { height: 22px }
        to { height: 30px }
    }



</style>
