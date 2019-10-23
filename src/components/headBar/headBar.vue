<template>

    <div id="PageLabel" class="b_top_bar" @mouseover="bac_('in')" @mouseout="bac_('out')" :style="head_bac">
        <div class="label_logo">
            <div class="label_logo_img">
                <img :src="logo" alt=""/>
            </div>
            <a>{{name}}</a>
        </div>

        <!-- 搜索框 -->
        <div class="label_search">
            <div class="label_search_frame" @mouseover="search_focus('in')" @mouseout="search_focus('out')">
                <div class="search_img" @click="searchButton">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#iconsearch"></use>
                    </svg>
                </div>
                <label class="search_label_d">
                    <input @input="searchCon($event)" @keyup.enter="searchButton"/>
                </label>
            </div>
            <div class="label_search_drop" v-if="search_drop_show" @mouseover="search_focus('in')" @mouseout="search_focus('out')">
                <slot></slot>
            </div>
        </div>

        <div class="label_router">
            <div class="router_frame" v-for="(value , index) in router" @click="" @mouseover="value.show_ = !value.show_" @mouseout="value.show_ = !value.show_">
                <div class="router_title">
                    <a :class="value.show_ && 'router_border'">{{ value.name }}</a>
                </div>
                <div class="drop_occupy" :class="!themeConfig && index === router.length -1 && 'drop_occupy_last'">
                    <div class="drop_frame" v-show = "value.lab.length !== 0 && value.show_" :class="!themeConfig && index === router.length -1 && 'drop_occupy_last'">
                        <div class="drop_frame_title" v-for="(valueIn) in value.lab" @click="userClick(valueIn.onclick,valueIn.To)">
                            <a>{{ valueIn.name }}</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 主题配置 -->
            <div class="router_frame" v-if="themeConfig" @mouseover="theme_show = !theme_show" @mouseout="theme_show = !theme_show">
                <div class="router_title theme_title">
                    <div class="theme_show_div"></div>
                </div>
                <div class="drop_occupy" :class="'drop_occupy_last'">
                    <div class="drop_frame theme_drop_frame" v-show = "theme_show" :class="'drop_occupy_last'">
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
    import '../../styles/iconfont.js'

    export default {
        name: 'HeadBar',
        props: ['logo','name','search','menuData','themeConfig','test'],
        data() {
            return {
                router:[],
                head_show: false,        // 是否在聚焦背景
                head_bac: { backgroundColor: 'rgba(255,255,255,0.7)' },
                search_need: true,       // 是否需要搜索框
                search_word:'',
                search_drop_show: false, // 搜索下拉框状态
                focus_search: false,     // 是否在聚焦搜索
                theme_show: false
            };
        },


        methods:{
            // 全局监听鼠标点击
            click_(){
                if(!this.focus_search){
                    this.search_drop_show = false;
                    if(this.head_show === false){
                        this.head_bac = { backgroundColor: 'rgba(255,255,255,0.7)' }
                    }
                }
            },

            // 聚焦背景
            bac_(what){
                if(what === 'in'){
                    this.head_show = true;
                    this.head_bac = { backgroundColor: 'white' }
                } else {
                    this.head_show = false;
                    if(!this.search_drop_show){
                        this.head_bac = { backgroundColor: 'rgba(255,255,255,0.7)' }
                    }
                }
            },

            // 判定是否在聚焦搜索
            search_focus(what){
                what === 'in' ? this.focus_search = true : this.focus_search = false
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
                this.$emit('search',this.search_word);
                this.search_drop_show = true
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
                this.router = routerData;
                this.test && console.log('路由表'+this.router);

            }

        },

        created(){
            window.addEventListener('click', this.click_);

            // 计算路由
            this.menuDataAnalyse();
            this.test && this.test_();

        },

    };
</script>

<style lang="scss">
    @import '../../styles/brick';

    .icon {
        width: 18px; height: 18px;
        margin: auto;
        vertical-align: -0.15em;
        fill: #D7D7D7; /* d7d7d7 */
        overflow: hidden;
    }
    .icon:hover{
        cursor: pointer;
        @include Theme-Fill($theme-color-green)
    }

    .b_top_bar{
        position: fixed;
        top: 0;
        z-index: 99;
        display: flex;
        height: 60px;
        width: 100%;
        text-align: left;
        box-shadow: 0 0 3px #D7D7D7;
        transition: background-color 300ms;
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
        display: block;
        text-align: center;
        height: 100%;
        width: 190px;
        margin: 0 0 0 auto;
    }
    .label_search_frame{
        display: flex;
        height: 30px;
        width: 173px;
        margin: 14px auto 6px 0;
        border-radius: 100px;
        border: 1px solid #D7D7D7;
    }
    .label_search_frame:hover{
        @include Theme-Border(1px,$theme-color-green,0.8);
    }
    .label_search_drop{
        min-height: 10px;
        max-height: 200px;
        width: 138px;
        margin: 0 auto auto 10px;
        padding: 8px;
        text-align: left;
        background-color: white;
        border-radius: 4px;
        border: 1px solid #cdcdcd;
        overflow: auto;
    }
    .label_search_drop::-webkit-scrollbar {
        /*滚动条整体样式*/
        width: 8px;  /*高宽分别对应横竖滚动条的尺寸*/
        height: 8px;
    }
    .label_search_drop::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius: 5px;
        background: #878787;
    }


    .search_img{
        display: flex;
        height: 26px;
        width: 26px;
        margin: auto 2px;
        border-radius: 50px;
        overflow: hidden;
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
