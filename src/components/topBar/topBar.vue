<template>

    <div id="PageLabel" class="b_top_bar">
        <div class="label_logo">
            <div class="label_logo_img">
                <img :src="logo" alt=""/>
            </div>
            <a>{{msg}}</a>
        </div>

        <div class="label_search" >
            <div class="label_search_frame">
                <div class="search_img" @mouseover="changeSearchImg('in')" @mouseout="changeSearchImg('out')">
                    <img :src="search_img" alt="" draggable="false"/>
                </div>
                <label class="search_label_d">
                    <input class="search_input"/>
                </label>
            </div>
        </div>
        <div class="label_router">

            <div class="router_frame" v-for="(value , index) in router" @click="" @mouseover="value.show_ = !value.show_" @mouseout="value.show_ = !value.show_">
                <div class="router_title">
                    <a :class="value.show_ && 'router_border'">{{ value.name }}</a>
                </div>
                <div class="drop_occupy" :class="index === router.length -1 && 'drop_occupy_last'">
                    <div class="drop_frame" v-show = "value.lab.length !== 0 && value.show_" :class="index === router.length -1 && 'drop_occupy_last'">
                        <div class="drop_frame_title" v-for="(valueIn , indexIn) in value.lab" @click="userClick(valueIn.onclick,valueIn.To)">
                            <a>{{ valueIn.name }}</a>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    </div>

</template>


<script>
    import search_w from '../../../static/search_white.png'
    import search_d from '../../../static/search_dark.png'

    export default {
        name: 'TopBar',
        props: ['logo','msg','search','menuData'],
        data() {
            return {
                router:[],
                search_img: search_d,
            };
        },

        methods:{

            // 改变搜索颜色
            changeSearchImg(what){
                if(what === 'in'){
                    this.search_img = search_w
                } else {
                    this.search_img = search_d
                }
            },

            // 用户点击了选项
            userClick(Todo,to){
                if(to !== undefined){
                    if(Todo === 'toTurn'){
                        console.log(`点击了跳转到${to}`);

                    } else {
                        // 外部链接
                        window.open(to,"_blank");
                    }
                }
            },


            // 计算路由
            menuDataAnalyse(){
                // 解析目录
                const routerData = [];
                this.menuData.map(
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
                this.router = routerData;
                // console.log(this.router);

            }

        },

        created(){

            // 计算路由
            this.menuDataAnalyse();

            // 主题设置
            // this.Theme = STo.ThemeConfig;

        },

    };
</script>

<style lang="scss">
    @import '../../styles/brick';

    .b_top_bar{
        position: fixed;
        top: 0;
        z-index: 99;
        display: flex;
        height: 60px;
        width: 100%;
        text-align: left;
        box-shadow: 0 0 3px #D7D7D7;
    }

    .label_logo{
        display: flex;
        height: 100%;
        width: 200px;
        margin: 0 auto 0 40px;
    }
    .label_logo_img{
        display: flex;
        height: 45px;
        width: 45px;
        margin: auto 10px auto 8px;
    }
    .label_logo_img img{
        height: auto;
        width: 100%;
        margin: auto;
        overflow: hidden;
    }
    .label_logo a{
        font-size: 22px;
        margin: auto auto auto 2px;
    }


    .label_search{
        display: flex;
        height: 100%;
        width: 190px;
        margin: 0 0 0 auto;
    }
    .label_search_frame{
        display: flex;
        height: 30px;
        width: 173px;
        margin: auto auto auto 0;
        border-radius: 100px;
        border: 1px solid #D7D7D7;
    }
    .label_search_frame:hover{
        border: 1px solid $ThemeColor;
    }

    .search_img{
        display: flex;
        height: 26px;
        width: 26px;
        margin: auto 2px;
        border-radius: 50px;
        overflow: hidden;
    }
    .search_img:hover{
        cursor: pointer;
        background-color: rgba($ThemeColor,0.8);
    }
    .search_img img{
        height: 80%;
        width: 80%;
        margin: auto;
    }
    .search_label_d{
        display: flex;
        height: 100%;
        width: 130px;
    }
    .search_label_d input{
        border: none;
        outline: none;
    }






    .label_router{
        display: flex;
        height: 100%;
        margin: 0 15px 0 0;
    }
    .router_frame{
        display: block;
        height: 100%;
        margin: auto 0;
        color: #304455;
    }
    .router_frame:hover{
        cursor: pointer;
        color: $ThemeColor;
    }
    .router_title{
        display: flex;
        height: 100%;
        padding-left: 20px;
        padding-right: 20px;
    }
    .router_title a{
        font-size: 16px;
        margin: auto;
    }
    .router_border{
        border-bottom: 3px solid $ThemeColor
    }
    .drop_occupy{
        display: block;
        height: 1px;
        width: 1px;
        /*float: right;*/
        margin: -10px auto auto 0;
    }
    .drop_occupy_last{
        float: right;
    }
    .drop_frame{
        display: block;
        min-width: 120px;
        /*float: right;*/
        margin: 0 0 auto auto;
        padding: 8px;
        background-color: white;
        border-radius: 4px;
        border: 1px solid #cdcdcd;
    }
    .drop_frame_title{
        display: flex;
        height: 32px;
        width: 100%;
        color: #595959;
        margin: 0 auto;
        border-radius: 3px;
    }
    .drop_frame_title:hover{
        background-color: rgba($ThemeColor,0.8);
        color: white;
    }
    .drop_frame_title a{
        font-size: 15px;
        margin: auto auto auto 8px;
    }

</style>
