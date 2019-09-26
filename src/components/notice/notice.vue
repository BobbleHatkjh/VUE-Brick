<template>

  <div class="roll_container_notice">
    <div class="roll_container_img">
      <img :src="Loader" alt="" />
    </div>
    <div class="swiper-wrapper notice_frame">
      <div class="swiper-slide notice_word" v-for="value in noticeData" :key="value">
        <a style="margin: auto 0">{{value}}</a>
      </div>
    </div>
  </div>

</template>



<script>
  import Swiper from "swiper"
  import Loader from '../../../static/loader.png'

  export default {
    name: 'Notice',
    props: ['noticeData','trigger','test'],
    data(){
      return{
        home_page: {},
        conObj:{
          height:''
        },
        Loader: Loader,  // 鼠标滑过的动画
      }
    },
    methods:{
      test_(){
        this.test && console.log(this.noticeData);
      }

    },
    mounted() {
      let myRoll = new Swiper('.roll_container_notice', {
        direction: 'vertical',
        mousewheel: true,
        loop: false,
        autoplay: {
          delay: 2500,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },
    created(){
      this.test_();
      // this.noticeTrigger();
    },

  };
</script>




<style lang="scss">
  @import '../../styles/brick';

  .roll_container_notice{
    position: fixed;
    top: 12px;
    left: 0;
    z-index: 99;
    display: flex;
    height: 40px;
    width: 40px;
    transition: width 400ms;
    border-top-right-radius: $ThemeBorder;
    border-bottom-right-radius: $ThemeBorder;
    background-color: rgba($BacColor,0.5);
    color: white;
    overflow: hidden;
  }
  .roll_container_notice:hover{
    width: 340px;
  }
  .roll_container_img{
    position: absolute;
    display: flex;
    height: 40px;
    width: 40px;
  }
  .roll_container_img img{
    margin: auto;
    height: 20px;
    width: 20px;
  }
  .roll_container_img:hover{
    cursor: pointer;
  }
  .notice_frame{
    width: 300px;
    margin-left: 40px;
  }
  .notice_word{
    display: flex;
    width: 300px;
    height: 40px;
  }

</style>
