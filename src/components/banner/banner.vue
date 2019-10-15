<template>

    <div id="b_banner" class="b_banner" :style="styles && styles">
        <div class="swiper-wrapper">
            <div
                    class="swiper-slide banner_frame"
                    v-for="value in imgData"
                    :key="value.title"
                    :style="{ background:'url(' + value.img + ') no-repeat center' }"
            >
                <a>{{value.title}}</a>
            </div>

        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination"></div>

        <div class="swiper-button-prev swiper-button-white"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-button-next swiper-button-white"></div> <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
    </div>


</template>


<script>
    import Swiper from "swiper"
    // import 'swiper/dist/css/swiper.css'

    export default {
        name: 'Banner',
        props: ['imgData', 'title', 'styles', 'bannerData'],
        data() {
            return {}
        },
        methods: {},
        mounted() {
            let banner = new Swiper('.b_banner', {
                direction: 'horizontal',
                mousewheel: true,
                height: '100%',
                loop: true,
                autoplay: {
                    delay: 2500,
                },
                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

            })
        },


    }
</script>


<style lang="scss">
    @import '../../styles/brick';
    @import '../../styles/swiper-css/swiper.css';

    .b_banner {
        position: relative !important;
        display: flex;
        min-height: 200px;
        height: 250px;
        width: 100%;
        box-shadow: 0 0 30px #969696;
        background-size: cover;
        overflow: hidden;
    }

    .banner_frame {
        display: flex;
        height: 100%;
        width: 100%;
        background-size: cover;
    }

    .banner_frame a {
        margin: auto;
        font-size: 40px;
        font-weight: bolder
    }
</style>
