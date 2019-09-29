<template>

  <div class="roll_container_notice" :class="show && 'roll_container_notice_click'" @click="show =! show">
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
        show:false,
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
    top: 72px;
    left: 0;
    z-index: 99;
    display: flex;
    height: 45px;
    width: 45px;
    transition: width 400ms, background-color 400ms, box-shadow 400ms;
    border-top-right-radius: $ThemeBorder - 2;
    border-bottom-right-radius: $ThemeBorder - 2;
    background-color: rgba($BacColor,0.08);
    box-shadow: 0 0 5px rgba($BacColor,0.08);
    color: white;
    overflow: hidden;
  }
  .roll_container_notice:hover{
    @include Theme-BorderRight(3px,$theme-color-green);
    @include Theme-BoxShadow(3px,$theme-color-green,0.4)
  }
  .roll_container_notice_click{
    width: 340px;
    background-color: white;
    @include Theme-BorderRight(3px,$theme-color-green);
    @include Theme-BoxShadow(3px,$theme-color-green,0.4)
  }
  .roll_container_img{
    position: absolute;
    display: flex;
    height: 45px;
    width: 45px;
  }
  .roll_container_img img{
    margin: auto;
    height: 22px;
    width: 22px;
  }
  .roll_container_img:hover{
    cursor: pointer;
  }
  .notice_frame{
    width: 300px;
    margin-left: 42px;
  }
  .notice_word{
    display: flex;
    width: 300px;
    height: 45px;
  }

</style>
