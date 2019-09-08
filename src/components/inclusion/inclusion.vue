<template>

    <div id="Inclusion" class="b_inclusion" >



        <div class="b_inclusion_line_frame" v-for="(value , index) in Data__">

            <div class="b_inclusion_con_frame" @click="hrefJump(value.info[0].url)">
                <div class="b_inclusion_con_logo">
                    <div class="b_inclusion_con_logo_img">
                        <img :src="value.info[0].logo" alt=""/>
                    </div>
                </div>
                <div class="b_inclusion_con_title">
                    <a>{{value.info[0].title}}</a>
                </div>
                <div class="b_inclusion_con_introduce">
                    <a>{{value.info[0].introduce}}</a>
                </div>
            </div>

            <div class="line_vertical" v-if="value.info.length > 1 && Grid"></div>

            <div class="b_inclusion_con_frame" v-if="value.info.length > 1" @click="hrefJump(value.info[1].url)">
                <div class="b_inclusion_con_logo">
                    <div class="b_inclusion_con_logo_img">
                        <img :src="value.info[1].logo" alt=""/>
                    </div>
                </div>
                <div class="b_inclusion_con_title">
                    <a>{{value.info[1].title}}</a>
                </div>
                <div class="b_inclusion_con_introduce">
                    <a>{{value.info[1].introduce}}</a>
                </div>
            </div>

            <div class="line_vertical" v-if="value.info.length > 2 && Grid"></div>

            <div class="b_inclusion_con_frame" v-if="value.info.length > 2" @click="hrefJump(value.info[2].url)">
                <div class="b_inclusion_con_logo">
                    <div class="b_inclusion_con_logo_img">
                        <img :src="value.info[1].logo" alt=""/>
                    </div>
                </div>
                <div class="b_inclusion_con_title">
                    <a>{{value.info[1].title}}</a>
                </div>
                <div class="b_inclusion_con_introduce">
                    <a>{{value.info[1].introduce}}</a>
                </div>
            </div>

        </div>




    </div>

</template>


<script>
    export default {
        name: 'Inclusion',
        props: ['listData','gridLine'],
        data() {
            return {
                Data__:[],
                Grid: true
            };
        },

        methods:{
            //
            gridSelect(){
                console.log(this.gridLine);
                if(this.gridLine !== undefined && this.gridLine !== ''){
                    this.Grid = this.gridLine
                }
            },
            //
            checkData(){

                const allData = [];
                let singleLine = {};
                let listLine = [];

                this.listData.map(
                    (item,index) =>{
                        const supportSingle = {};

                        supportSingle.url = item.url;
                        supportSingle.logo = item.logo;
                        supportSingle.title = item.title;
                        supportSingle.introduce = item.introduce;

                        listLine.push(supportSingle);

                        if(listLine.length === 3 || index === this.listData.length - 1){
                            singleLine.info = listLine;
                            allData.push(singleLine);
                            listLine = [];
                            singleLine = {}
                        }

                    }
                );
                this.Data__ = allData;
                console.log(this.Data__);

            },


            //
            hrefJump(url){
                window.open(url,"_blank");
            }

        },

        created(){
            this.gridSelect();
            this.checkData();

            // 主题设置
            // this.Theme = STo.ThemeConfig;

        },

    };
</script>


<style lang="scss">
    @import '../../styles/brick';

    .b_inclusion{
        display: block;
        height: 100%;
        width: 100%;
        margin: auto;
        padding: 0;
    }
    .b_inclusion_line_frame{
        display: flex;
        height: 230px;
        width: 100%;
    }

    .b_inclusion_con_frame{
        display: block;
        height: 90%;
        width: 32%;
        margin: auto;
        border-radius: $ThemeBorder - 4;
        overflow: hidden;
    }
    .b_inclusion_con_frame:hover{
        cursor: pointer;
        background-color: rgba($ThemeColor,0.1);
        box-shadow: 0 0 10px rgba($ThemeColor,0.6);
    }
    .b_inclusion_con_logo{
        display: flex;
        height: 40%;
        width: 100%;
    }
    .b_inclusion_con_logo_img{
        display: flex;
        height: 55px;
        width: 100%;
        overflow: hidden;
        margin: auto auto 10px auto;
    }
    .b_inclusion_con_logo_img img{
        height: 100%;
        width: auto;
        margin: auto;
    }
    .b_inclusion_con_title{
        display: flex;
        height: 16%;
        width: 100%;
    }
    .b_inclusion_con_title a{
        margin: 0 auto;
        font-size: 20px;
        font-weight: bolder;
    }
    .b_inclusion_con_introduce{
        display: flex;
        height: 32%;
        width: 80%;
        margin: 1% auto auto auto
    }
    .b_inclusion_con_introduce a{
        color: #878787;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        word-break: break-all;
        overflow: hidden;
    }


    .line_vertical{
        height: 60%;
        width: 0;
        margin: auto;
        border-right: 1px solid rgba($ThemeColor,0.7);

    }

</style>
