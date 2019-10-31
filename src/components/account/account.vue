<template>

    <div class="__my" :style="my_pic_style" @mouseover="accountIn('in')" @mouseout="accountIn('out')">
        <div class="account_my">
            <div class="account_pic" :style="[my_pic_pic,{ background:'url(' + account.img + ') no-repeat center center',backgroundSize: '100% 100%'}]" >
<!--            <img :src="account.img" alt=""/>-->
            </div>
        </div>
        <div class="account_drop" v-show="my_account">

        </div>
    </div>

</template>



<script>


    export default {
        name: 'Account',
        props: ['account','test'],
        data(){
            return{
                my_account: false,
                my_pic_style: { width: '60px' },
                my_pic_pic: { width: '46px', height: '46px', margin: '7px auto auto'},
            }
        },
        methods:{
            test_(){
                this.test && console.log(this.noticeData);
            },

            // 鼠标滑过
            accountIn(what){
                if(what === 'in'){
                    this.my_account = true;
                    this.my_pic_style = {width: '90px'};
                    this.my_pic_pic = {width: '60px', height: '60px', margin: '20px auto auto'};
                } else {
                    this.my_account = false;
                    this.my_pic_style = {width: '60px'};
                    this.my_pic_pic = {width: '46px', height: '46px', margin: '7px auto auto'}
                }
            },

        },

        created(){
            this.test_();
            // this.noticeTrigger();
        },

    };
</script>




<style lang="scss">
    @import '../../styles/brick';


    .__my{
        display: block;
        transition: width 300ms;
        /*overflow: hidden;*/
        /*background-color: #fff9a5;*/
    }
    .__my:hover{
        width: 160px;
    }

    .account_my{
        display: flex;
        height: 60px;
        width: 100%;
        /*background-color: #42b983;*/
    }
    .account_pic{
        position: relative;
        display: flex;
        border-radius: 100px;
        /*overflow: hidden;*/
        transition: width 300ms, height 300ms, margin 300ms;
        background-size: cover;

        &::after{
            content: '';
            position: absolute;
            top: 10%;
            width: 100%;
            height: 100%;
            border-radius: 100px;
            background: inherit;
            background-size: cover;
            filter: blur(10px) brightness(80%) opacity(.8);
            z-index: -1;
        }
    }
    .account_pic:hover{
        cursor: pointer;
    }
    .account_pic img{
        display: flex;
        height: 100%;
        width: 100%;
        margin: auto;
    }


    .account_drop{
        display: flex;
        float: right;
        height: 200px;
        width: 160px;
        margin-top: -10px;
        background-color: white;
        border-radius: $ThemeBorder - 6;
        border: 1px solid #cdcdcd;
    }






</style>
