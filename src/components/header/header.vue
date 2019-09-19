<template>
    <div class="header_bac" :style="header_width" v-cloak>

        <!--header主体-->
        <div class="one" style="height: 1px; width:1px"></div>
        <div class="header_bac_frame" v-for="(value , index) in router" @click="userClick(value.onclick,value.To)" @mouseover="value.show_ = !value.show_" @mouseout="value.show_ = !value.show_">
            <div class="frame_table" :class="index === 0 && 'table_hover'" >
                <a class="mar" v-show = "!value.show_ || index === 0">{{ value.name }}</a>
                <img src="../../../static/xia_white.png" alt="▼" class="mar icon" v-show = "value.show_ && index !== 0"/>
            </div>
            <div class="frame_table table_b" v-for="(valueIn , indexIn) in value.lab" v-show = "value.show_" :class="indexIn === value.lab.length - 1 && 'header_child_css'" @click="userClick(valueIn.onclick,valueIn.To)">
                <a class="mar" >{{ valueIn.name }}</a>
            </div>
        </div>

        <Link v-if="pattern === 'simple'"/>

        <My :loginStatus="loginStatus" v-if="pattern === 'account'"/>

    </div>
</template>




<script>
    import Link from '../link/link.vue'
    import My from '../my/my.vue'

    export default {
        name: 'Header',
        props: ['menuData__','pattern','loginStatus'],
        components: {
            Link,
            My
        },
        // inject: ['turnTo','reload','OutSide','ComponentCall','requestTo'],
        data() {
            return {
                router: [],    // 路由数据，用来填充header
                header_width: { width:'' },
                pattern_style:''
            };
        },

        methods:{
            // 计算宽度
            headWidth(num){
                this.header_width = { width: `${(num + 1)*100 + 50 }px` };
                if(this.pattern === '' || this.pattern === undefined){
                    this.header_width -= 100;
                }
            },

            // 计算menuData
            menuData(){
                // 配置header宽度
                this.headWidth(this.menuData__.length);

                // 解析目录
                const routerData = [];
                this.menuData__.map(
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

            },



            // 用户点击了选项
            userClick(Todo,to){
                if(to !== undefined){
                    if(Todo === 'toTurn'){
                        console.log(`点击跳转到内部链接 ${to}`);
                        this.$emit('return',to) // @return
                    } else {
                        // 外部链接
                        window.open(to,"_blank");
                    }
                }
            },

            // 检测是否登录
            CheckLog(){
                // return this.LoginCheck;
            },


        },

        created(){
            // 解析目录
            this.menuData();

            // 检查登录
            // this.CheckLog();

            // 主题设置
            // this.Theme = STo.ThemeConfig;

        },

    };
</script>



<style lang="scss">
    @import '../../styles/brick';
    .mar{
        margin: auto;
    }
    .icon{
        height: 18px;
        width: 18px;
    }
    .header_bac{
        position: fixed;
        top: 12px;
        right: 0;
        z-index: 99;
        display: flex;
        height: 40px;
        text-align: right;
        border-bottom-left-radius: $ThemeBorder;
        border-top-left-radius: $ThemeBorder;
        background-color: rgba($BacColor, 0.5);
    }

    .header_bac_frame{
        height: 100%;
        width: 100px;
        margin: auto 0 auto 15px;
        font-size: 14px;
    }
    .header_bac_frame:hover{
        cursor: pointer;
    }
    .one{
        margin: auto 0 auto auto;
    }
    .frame_table{
        display: flex;
        height: 100%;
        width: 100%;
        color: white;
        margin: 0 auto;
        font-weight: bolder;
    }

    .table_b{
        border-left: 0 solid rgba(0,0,0,0);
        border-right: 0 solid rgba(0,0,0,0);
        background-color: rgba($BacColor, 0.5);
        animation: table_in 0.25s infinite;
        animation-iteration-count:1;
    }
    .table_b:hover{
        transition: box-shadow 200ms ,background-color 200ms, border-left-color 200ms, border-right-color 200ms;
        margin: 0 auto 0 -3px;
        border-left: 3px solid rgba($ThemeColor,0.5);
        border-right: 3px solid rgba($ThemeColor,0.5);
        background-color: rgba($ThemeColor,0.9);
        box-shadow: 0 0 20px rgba($ThemeColor,0.8);
    }
    .table_hover:hover{
        transition: box-shadow 200ms ,background-color 200ms;
        background-color: rgba($ThemeColor,0.9);
        box-shadow: 0 0 20px rgba($ThemeColor,0.8);
    }
    .header_child_css{
        border-bottom-left-radius: $ThemeBorder;
        border-bottom-right-radius: $ThemeBorder;
    }





    @keyframes table_in
    {
        from { background-color: rgba($BacColor, 0.1);height: 75%;width: 90%}
        to { background-color: rgba($BacColor, 0.5);height: 100%;width: 100%}
    }

</style>
