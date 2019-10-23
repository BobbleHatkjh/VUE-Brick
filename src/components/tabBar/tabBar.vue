<template>

    <div id="TabBar" class="b_tab_bar" :style="styles && styles">

        <div class="tab_menu">
            <div class="tab_menu_up">
                <div
                        class="tab_menu_frame"
                        v-for="(value,index) in router"
                        :key="value.name"
                        :style="select_index === index && 'select_hover'"
                        @click="tabClick($event,value,index)"
                        @mouseover="tabMenuMove('over',$event,index)"
                        @mouseout="tabMenuMove('out')"
                >
                    <a>{{ value.name }}</a>
                </div>
            </div>

            <div class="tab_menu_down">
                <div class="tab_dynamic" :style="dynamic"></div>
            </div>
        </div>


        <!-- 搜索框 -->
        <div class="tab_search" v-if="search_need">
            <div class="tab_search_frame" @mouseover="search_focus('in')" @mouseout="search_focus('out')">
                <div class="search_img" @click="searchButton">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#iconsearch"></use>
                    </svg>
                </div>
                <label class="search_label_d">
                    <input @input="searchCon($event)" @keyup.enter="searchButton"/>
                </label>
            </div>
            <div class="tab_search_drop" v-if="search_drop_show" @mouseover="search_focus('in')" @mouseout="search_focus('out')">
                <slot></slot>
            </div>
        </div>




    </div>

</template>

<script>
    import '../../styles/iconfont.js'

    export default {
        name: 'TabBar',
        props: ['menuData','search','styles','test'],
        data() {
            return {
                router:[],
                select_index: -1,
                select_data: { width:'0px', left: '0px' },
                dynamic: { width:'0px', left: '0px' },
                search_need: true,       // 是否需要搜索框
                focus_search: false,     // 是否在聚焦搜索
                search_drop_show: false, // 搜索下拉框状态
                search_word:'',
            }
        },

        methods:{
            // 全局监听鼠标点击
            click_(){
                if(!this.focus_search){
                    this.search_drop_show = false;
                }
            },

            // 点击选择选项卡
            tabClick(event,value,index){
                let select = this.tabMenuHover(event,index);
                this.select_index = index;
                this.select_data = select;
                this.dynamic = select
            },

            // Hover动态
            tabMenuMove(fun,event,index){
                fun === 'over' ?
                    this.dynamic = this.tabMenuHover(event,index)
                    :
                    this.dynamic = this.select_data
            },

            // 动态效果
            tabMenuHover(event,index){
                let find_num = 2;
                let left_ = 30;
                let width_ = event.currentTarget.clientWidth - 60 + 'px';
                let path_ = event.path || (event.composedPath && event.composedPath());
                path_[0].className === 'tab_menu_frame' && find_num --;
                for(let i=0; i<index; i++){
                    left_ += path_[find_num].children[i].clientWidth
                }
                left_ += 'px';
                return {
                    width: width_,
                    left: left_
                };
            },

            // 判定是否在聚焦搜索
            search_focus(what){
                what === 'in' ? this.focus_search = true : this.focus_search = false
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

            // 解析目录
            menuDataAnalyse(){
                // 是否需要搜索框
                if(this.search === false) this.search_need = false;

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
                        if(item.lab){
                            newData.lab = [];
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

    .b_tab_bar{
        display: flex;
        height: 60px !important;
        width: 100%;
        box-shadow: 0 0 3px #D7D7D7;
    }
    .tab_menu{
        position: relative;
        display: block;
        height: 100%;
        min-width: 60px;
        margin: 0 15px 0 0;
    }

    .tab_menu_up{
        display: flex;
        height: 95%;
        width: 100%;
    }
    .tab_menu_frame{
        display: flex;
        transition: color 300ms;
        height: 100%;
        padding: 2px 30px 0 30px;
    }
    .tab_menu_frame:hover{
        cursor: pointer;
        @include Theme-Color($theme-color-green)
    }
    .tab_menu_frame a{
        margin: auto;
    }
    .select_hover{
        @include Theme-Color($theme-color-green)
    }

    .tab_menu_down{
        position: relative;
        height: 5%;
        width: 100%;
    }
    .tab_dynamic{
        position: relative;
        height: 100%;
        left: 100px;
        border-radius: 100px;
        transition: left 300ms, width 300ms;
        @include Theme-Bac($theme-color-green,1);
    }

    .tab_search{
        display: block;
        text-align: center;
        height: 100%;
        width: 190px;
        margin: 0 auto 0 0;
    }
    .tab_search_frame{
        display: flex;
        height: 30px;
        width: 173px;
        margin: 14px auto 6px 0;
        border-radius: 100px;
        border: 1px solid #D7D7D7;
    }
    .tab_search_frame:hover{
        @include Theme-Border(1px,$theme-color-green,0.8);
    }
    .tab_search_drop{
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
    .tab_search_drop::-webkit-scrollbar {
        /*滚动条整体样式*/
        width: 8px;  /*高宽分别对应横竖滚动条的尺寸*/
        height: 8px;
    }
    .tab_search_drop::-webkit-scrollbar-thumb {
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



</style>
