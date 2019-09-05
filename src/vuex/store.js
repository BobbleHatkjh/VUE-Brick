import Vue from 'vue'
import Vuex from 'vuex'


import ENG from './ENG.js'
import CHN from './CHN.js'

Vue.use(Vuex);

const store = new Vuex.Store({

    // 定义状态
    state: {
        language: 'CHN', // 全球化，默认是中文
        Login: '', // 登录状态

        footer_trigger: 'mid', // 页脚的触发器位置 left mid right
        header_style: 'account', // header的样式   account(带账号版本)  simple(简单版本)  什么都没写默认无





        // 全球化
        CHN: CHN,
        ENG: ENG,

    },

});




export default store
