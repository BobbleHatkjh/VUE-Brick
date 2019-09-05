<template>


    <!--右边 我 的部分-->
    <div class="header_bac_right" :style="widObj" @mouseover="mouIN('over')" @mouseout="mouIN('out')">
        <div class="manPhoto">
            <img v-if="loginStatus" class="manPhoto_img" :src="user_pho" alt="" draggable="false" />
        </div>

        <div class="two_pull" :style="heiObj" @mouseover="mouIN('over')" @mouseout="mouIN('out')">
            <!--这是登陆后的状态-->
            <div class="login_switch" v-if="loginStatus">

                <div class="name_div">
                    <a class="mar">{{user_name}}</a>
                </div>

                <div class="rather">
                    <div class="coin">
                        <div class="coin_img">
                            <img :src="coin" alt="币" draggable="false"/>
                        </div>
                        <div class="coin_a">
                            <a>{{user_coin}}</a>
                        </div>
                    </div>
                    <div class="coin">
                        <div class="coin_img">
                            <img :src="Grade" alt="分" draggable="false"/>
                        </div>
                        <div class="coin_a">
                            <a>{{user_win_time}}</a>
                        </div>
                    </div>
                </div>

            </div>


            <!--这是没登录的状态-->
            <div class="login_switch" v-if="!loginStatus">
                <div class="name_div">
                    <a class="mar">{{me.not_sign_in.un_log}}</a>
                </div>
                <div class="login_register">
                    <div class="login_register_frame" @click="userClick('toTurn',0,0,'Login')">
                        <a class="mar">{{me.not_sign_in.sign_in}}</a>
                    </div>
                    <div class="line_shu"></div>
                    <div class="login_register_frame" @click="userClick('toTurn',0,0,'Register')">
                        <a class="mar">{{me.not_sign_in.register_}}</a>
                    </div>
                </div>
                <div class="ad">
                    <div class="ad_img">
                        <img :src="man" alt=""/>
                    </div>
                    <div class="ad_word">
                        <a class="mar">{{me.not_sign_in.ad_}}</a>
                    </div>
                </div>

            </div>


            <div v-if="loginStatus" class="my_game" @click="myGame">
                <a class="mar">{{me.sign_in.personal_center}}</a>
            </div>

            <div v-if="loginStatus" class="quit" @click="logOut">
                <a class="mar">{{me.sign_in.log_out}}</a>
            </div>
        </div>
    </div>



</template>




<script>

    import Coin from '../../../static/coin.png'
    import Grade from '../../../static/grade.png'
    import AD from '../../../static/logo.png'

    export default {
        name: 'My',
        // inject: ['turnTo','reload','OutSide','ComponentCall','requestTo'],
        props: ['loginStatus'],
        data() {
            return {
                user_name: '',
                user_pho : '',
                user_coin : 0,
                user_win_time: 0,

                me:{     // 我的 部分，全球化用的
                    not_sign_in:{
                        un_log: '未登录',
                        sign_in: '登录',
                        register_: '注册',
                        ad_: '空缺待投喂~'
                    },

                    sign_in:{
                        personal_center: '个人中心',
                        log_out: '退出登录'
                    }
                },
                heiObj:{
                    height: '0px'
                },
                widObj:{
                    width: '100px'
                },
                man: AD,
                coin: Coin,
                Grade: Grade
            };
        },

        methods:{

            // 用户点击了选项
            userClick(Todo,from,index,to){
                // if(to !== undefined){
                //     if(Todo === 'toTurn'){
                //         if(to === 'Login'){
                //             this.$store.state.state_login = true;
                //             this.turnTo(from,index,to);
                //         } else if(to === 'Register'){
                //             this.$store.state.state_login = false;
                //             this.turnTo(from,index,'Login');
                //         } else {
                //             this.turnTo(from,index,to);
                //         }
                //
                //     } else {
                //         this.OutSide(to);
                //     }
                // }
            },

            // 检测是否登录
            CheckLog(){
                // return this.LoginCheck;
            },

            myGame(){
                console.log('2323232');
                // this.turnTo(0,0,'PersonalCenter');
                // this.ComponentCall('Tip', { status: 'info', message: '肥肠抱歉，功能还在研发中' });
            },
            async logOut(){
                // const ans = await this.requestTo('/user/logOut.action');
                // if(ans.status === 200){
                //     this.$store.state.Login = false;
                //     localStorage.setItem('log_status', 'false');
                //     localStorage.setItem('user_name', '');
                //     this.turnTo(0,0,'Home');
                    // this.ComponentCall('Tip', { status: 'success', message: '成功退出账号' });
                // } else {
                    // this.ComponentCall('Tip', { status: 'error', message: '我们无法退出您的账号，请稍后再试' });
                // }


            },
            mouIN(what){
                if (what === 'over'){
                    this.heiObj.height = '182px';
                    this.widObj.width = '190px'
                } else {
                    this.heiObj.height = '0px';
                    this.widObj.width = '100px'
                }

            },


        },

        async created(){
            // let STo = this.$store.state;

            // 检查登录
            // this.CheckLog();
            // 我的



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

    .two_pull{
        position: fixed;
        z-index: -1;
        transition: height 350ms;
        top: 52px;
        right: 0;
        height: 300px;
        width: 150px;
        overflow: hidden;
        border-bottom-left-radius: $ThemeBorder;
        border-bottom-right-radius: $ThemeBorder;
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
        background-color: rgba($BacColor, 0.5);
        animation: table_in 0.25s infinite;
        animation-iteration-count:1;
    }
    .table_b:hover{
        transition: box-shadow 200ms ,background-color 200ms;
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


    .header_bac_right{
        display: flex;
        transition: width 350ms;
        /*height: 100px;*/
        width: 100px;
        /*<!--background-color: rgba($BacColor, 0.5);-->*/
        margin: auto 0 auto 10px;
    }
    .manPhoto{
        display: flex;
        margin: 10px auto;
        height: 60px;
        width: 60px;
        border-radius: 50%;
        overflow: hidden;
        background: url("../../../static/noface.png") no-repeat 100% 100%;
        background-size: 100%;
        box-shadow: 0 0 20px rgba($BacColor, 0.7);
    }
    .manPhoto_img{
        margin: auto;
        width: 100%;
        height: 100%;
    }

    .qub{
        display: flex;
        height: 30px;
        width: 30px;
        margin: auto 3px;
        background-color: #191919;
    }
    .qub:hover{
        cursor: pointer;
        background-color: #3e3e3e;
    }
    .qub_2{
        display: flex;
        height: 30px;
        width: 30px;
        margin: auto 5px auto 3px;
        color: black;
        font-weight: bolder;
        font-size: 14px;
        background-color: #ffffff;
    }
    .qub_2:hover{
        color: rgba($ThemeColor,1);
        cursor: pointer;
    }
    .qub_img{
        height: 90%;
        width: 90%;
        margin: auto;
    }

    .login_switch{
        height: 57px;
        margin: 45px 0 0 0;
    }
    .login_register{
        display: flex;
        height: 36px;
        width: 100%;
    }
    .login_register_frame{
        display: flex;
        height: 30px;
        width: 74px;
        margin: auto;
        color: white;
        font-weight: bolder;
        font-size: 14px;
    }
    .login_register_frame:hover{
        cursor: pointer;
        background-color: rgba($ThemeColor,0.8);
        box-shadow: 0 0 20px rgba($ThemeColor,0.8);
    }
    .line_shu{
        height: 20px;
        margin: auto 0;
        border-left: 1px solid white;
        border-right: 1px solid white;
    }
    .ad{
        display: block;
        text-align: center;
        height: 76px;
        width: 100%;
    }
    .ad_img{
        display: flex;
        height: 40px;
        width: 100%;
        margin: 0 auto;
    }
    .ad_img img{
        height: 40px;
        width: 70%;
        margin: auto;
        border-radius: $ThemeBorder;
        overflow: hidden;
    }
    .ad_word{
        display: flex;
        height: 28px;
        width: 100%;
        margin: 0 auto;
        font-size: 14px;
        color: white;
        font-weight: bolder;
    }


    .name_div{
        display: flex;
        height: 30px;
        width: 100%;
        color: white;
        font-size: 16px;
        font-weight: bolder;
        margin: 0;
    }
    .rather{
        display: flex;
        height: 23px;
        width: 85%;
        margin: 0 auto;
    }
    .coin{
        display: flex;
        height: 100%;
        width: 50px;
        margin: auto;
    }
    .coin_img{
        height: 18px;
        width: 18px;
        margin: auto auto auto 0;
    }
    .coin_img img{
        height: 100%;
        width: 100%;
    }
    .coin_a{
        display: flex;
        height: 100%;
        margin: auto;
    }
    .coin_a a{
        font-size: 14px;
        font-weight: bolder;
        color: white;
        margin: auto;
    }

    .my_game{
        display: flex;
        height: 40px;
        width: 100%;
        margin-top: 0;
        color: white;
        font-size: 14px;
        font-weight: bolder;
    }
    .my_game:hover{
        cursor: pointer;
        background-color: rgba($ThemeColor,0.8);
        box-shadow: 0 0 20px rgba($ThemeColor,0.8);
    }
    .quit{
        display: flex;
        height: 40px;
        width: 100%;
        color: white;
        font-size: 14px;
        font-weight: bolder;
    }
    .quit:hover{
        cursor: pointer;
        background-color: rgba($ThemeColor,0.8);
        box-shadow: 0 0 20px rgba($ThemeColor,0.8);
    }

    @keyframes table_in
    {
        from { background-color: rgba($BacColor, 0.1);height: 75%;width: 90%}
        to { background-color: rgba($BacColor, 0.5);height: 100%;width: 100%}
    }




</style>
