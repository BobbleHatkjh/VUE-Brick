<template>

    <div id="PageLabel" class="b_top_bar">
        <div class="label_logo">
            <div class="label_logo_img">
                <img :src="logo" alt=""/>
            </div>
            <a>{{name}}</a>
        </div>

        <div class="label_search" >
            <div class="label_search_frame">
                <div class="search_img" @click="searchButton" @mouseover="changeSearchImg('in')" @mouseout="changeSearchImg('out')">
                    <img :src="search_img" alt="" draggable="false"/>
                </div>
                <label class="search_label_d">
                    <input @input="searchCon($event)" @keyup.enter="searchButton"/>
                </label>
            </div>
        </div>
        <div class="label_router">

            <div class="router_frame" v-for="(value , index) in router" @click="" @mouseover="value.show_ = !value.show_" @mouseout="value.show_ = !value.show_">
                <div class="router_title">
                    <a :class="value.show_ && 'router_border'">{{ value.name }}</a>
                </div>
                <div class="drop_occupy" :class="!themeConfig && index === router.length -1 && 'drop_occupy_last'">
                    <div class="drop_frame" v-show = "value.lab.length !== 0 && value.show_" :class="!themeConfig && index === router.length -1 && 'drop_occupy_last'">
                        <div class="drop_frame_title" v-for="(valueIn , indexIn) in value.lab" @click="userClick(valueIn.onclick,valueIn.To)">
                            <a>{{ valueIn.name }}</a>
                        </div>
                    </div>
                </div>
            </div>

            <!--主题配置 -->
            <div class="router_frame" v-if="themeConfig" @mouseover="themeShow = !themeShow" @mouseout="themeShow = !themeShow">
                <div class="router_title theme_title">
                    <div class="theme_show_div"></div>
                </div>
                <div class="drop_occupy" :class="'drop_occupy_last'">
                    <div class="drop_frame theme_drop_frame" v-show = "themeShow" :class="'drop_occupy_last'">
                        <div class="drop_frame_title theme_change_green" @click="themeFun('green')">
                            <a>绿色</a>
                        </div>
                        <div class="drop_frame_title theme_change_blue" @click="themeFun('blue')">
                            <a>蓝色</a>
                        </div>
                        <div class="drop_frame_title theme_change_red" @click="themeFun('red')">
                            <a>粉色</a>
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
        props: ['logo','name','search','menuData','themeConfig','test'],
        data() {
            return {
                router:[],
                search_img: search_d,
                search_word:'',
                themeShow: false,
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
                        this.test && console.log(`点击跳转到内部链接 ${to}`);
                        this.$emit('return',to) // @return
                    } else {
                        // 外部链接
                        window.open(to,"_blank");
                    }
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

            // 搜索按钮
            searchButton(){
                this.$emit('search',this.search_word)
            },

            // 搜索输入框内容
            searchCon(event){
                this.search_word = event.currentTarget.value
            },

            // 测试用
            test_(){
                const testData = {
                    logo:this.logo,
                    name:this.name,
                    search:this.search,
                    menuData:this.menuData,
                    themeConfig:this.themeConfig
                };
                console.log('props' + testData);
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
                this.test && console.log('路由表'+this.router);

            }

        },

        created(){

            // 计算路由
            this.menuDataAnalyse();
            this.test && this.test_();

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
        background-color: white;
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
        @include Theme-Border(1px,$theme-color-green);
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
        @include Theme-Bac($theme-color-green,0.8);
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
        width: 100%;
        background-color: rgba(255,255,255,0);
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
        @include Theme-Color($theme-color-green);
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
    .theme_title{
        padding-left: 12px;
        padding-right: 8px;
    }
    .router_border{
        @include Theme-BorderBottom(3px,$theme-color-green,0.8);
    }
    .theme_show_div{
        height: 20px;
        width: 40px;
        margin: auto;
        border-radius: 4px;
        @include Theme-Bac($theme-color-green,0.8);
    }
    .drop_occupy{
        display: block;
        height: 1px;
        width: 1px;
        margin: -10px auto auto 0;
    }
    .drop_occupy_last{
        float: right;
    }
    .drop_frame{
        display: block;
        min-width: 120px;
        margin: 0 0 auto auto;
        padding: 8px;
        background-color: white;
        border-radius: 4px;
        border: 1px solid #cdcdcd;
    }
    .theme_drop_frame{
        min-width: 66px;
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
        @include Theme-Bac($theme-color-green,0.8);
        color: white;
    }
    .drop_frame_title a{
        font-size: 15px;
        margin: auto auto auto 8px;
    }

    .theme_change_green:hover{
        background-color: rgba($theme-color-green,0.8);
    }
    .theme_change_blue:hover{
        background-color: rgba($theme-color-blue,0.8);
    }
    .theme_change_red:hover{
        background-color: rgba($theme-color-red,0.8);
    }

</style>
