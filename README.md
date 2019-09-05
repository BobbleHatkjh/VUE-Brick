<br/>

![brick](http://r.photo.store.qq.com/psb?/V13wtei3333fhr/1iFgOZstVg3n05Fh5G5YQvD87yffY0sMwRdSFRT615c!/r/dNgAAAAAAAAA)

_"Library 是 Brick 的衍生组件库"_

[![NPM version](https://img.shields.io/npm/v/b-library.svg)](https://www.npmjs.com/package/b-library)
    
<br/>

#####_Library 依据程序员们常用的功能而制作了一整套功能类Vue组件库，无论是小到A,Button标签，还是大到带有router和动态效果的自动化HeadBar，或者是整个页面的模版，Library应有尽有。希望Library能为前端攻城狮们的工作带来一些便利_

>您可以访问以下网址来粗略预览旧版Library (部分组件有较大差异，但是总体思路是一致的)之后在正式版上线时会指向到Brick-Library的官方网站 


> <a href="http://123.57.41.38:8080/game_center/#/" target="_blank">Library preview(old)</a>


``` 
A            // √    
Button       // √    
Dot          // √
Slot         // √    
Router       // 尚在准备    
Footer       // √
HeadBar      // √
TopBar       // √    
Inclusion    // 尚在准备   #收纳格
Login        // 尚在准备
PageLabel    // √
Register     // 尚在准备    
Tips         // 尚在准备    
Notice       // √
NavigationBar(vertical)   // √
Title(long image)         // √
Link(language switch)     // √
Page template             // 尚在准备   
Theme Configuration       // 尚在准备   
``` 


<br/>

###引入方式

>少量组件 推荐的引入的方式
```
<template>
    <div class="index">
 
        <Notice :notice__="myData" />
        
    </div>
</template>

<script>
    import { Notice } from 'b-library';
 
    export default {
        components: {
            Notice
        },
        data(){
            return {
                myData: ['111', '222', '333', '444']
            }
        }
    }
</script>

// 这是在引入的组件相对较少的情况下推荐的方案，直接在页面内引入简单快捷又很便于维护 
```

<br/>
<br/>


>多组件 推荐的引入的方式   
```
    project
        |...
        |router
            |index.js   <-
        |...

// 在router下的index.js文件批量引入所需的组件，这样又省力，又便于您可能会在store里关联进行状态管理   
// 这一步需要 vue-router 的支持，Library带有这个支持，不过需要您在类似的项目结构里手动配置     
```

<br/>


> router/index.js
```bash
import { 
    Footer, 
    HeadBar 
} from 'b-library';


Vue.component('Header', Header);
Vue.component('Footer', Footer);


// 这是在引入的组件相对较多的情况下推荐的方案，在index.js里批量引入，相对来说一劳永逸
```

<br/>

>src/xxx/xxx.vue

```
<template>
    <div class="index">
 
        <HeadBar :menuData__="menuData" :pattern="'simple'" />
        <Footer :logo="logo" :footer__="footerData" :support__="supportList"/>
        
    </div>
</template>

...

```

<br/>

>！项目目前仍在开发阶段 目前很多组件的功能性还不完全，在进入1.0公开版本之后，demo以及api指南会同步上线Brick-Library的正式官网 

<br/>

其余部分组件的预览图:
![Img](http://r.photo.store.qq.com/psb?/V13wtei3333fhr/6A4CrTF955V3S38ih8Teua0cQJ9twIZcpVTEwUUzLnk!/r/dLgAAAAAAAAA)