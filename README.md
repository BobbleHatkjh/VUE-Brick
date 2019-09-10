<br/>


![brick](https://raw.githubusercontent.com/BobbleHatkjh/Vue_BuildingBlock/master/pic/100ll.png)

_'Library'is a library of derivative components of 'Brick'_

<img src="https://img.shields.io/npm/v/b-library.svg" alt="npm">
<img src="https://img.shields.io/circleci/project/github/vuejs/vue/dev.svg" alt="Build Status">
<img src="https://img.shields.io/npm/l/vue.svg" alt="License">
       

<a></a>  
 
<br/>

_'Library'makes a whole set of functional class 'Vue' component libraries based on the common functions of programmers, whether small to 'A' tags, large to automated'HeadBar' with'router'and dynamic effects, or templates for the entire page,'Library' has everything. We hope 'Library' will bring some convenience to your work._



> <a href="https://github.com/BobbleHatkjh/VUE-Brick" target="_blank">GitHub</a>  &emsp;&emsp;  <a href="https://www.npmjs.com/package/b-library" target="_blank">NPM</a>



<br/>

``` 
A            // √    
Button       // √    
Dot          // √
Slot         // √    
Router       // 尚在准备    
Footer       // √
HeadBar      // √
TopBar       // √    
Inclusion    // √
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

###introduction of <a style="color: #b96d27">import</a>

>少量组件 推荐的引入的方式
```
<template>
    <div class="index">
 
        <Notice :noticeData="myData" />
        
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

> ! The project is still in the development stage and the functionality of many components is still incomplete. After entering the 1.0 public version, demo and API guides will be launched simultaneously on the official website of 'Brick'.

<br/>

>You can visit the following website to give a rough preview of the old version of 'Library' (some components are different, but the overall idea is the same).


> <a href="http://123.57.41.38:8080/game_center/#/" target="_blank">Library preview(old)</a>


<br/>

Preview of the rest of the components:
![Img](https://raw.githubusercontent.com/BobbleHatkjh/Vue_BuildingBlock/master/pic/preview.png)