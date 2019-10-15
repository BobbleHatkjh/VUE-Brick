
<br/>

<br/>


<p align="center">
    <img width="400" alt="" src="https://raw.githubusercontent.com/BobbleHatkjh/Vue_BuildingBlock/master/pic/100lllogo.png"/>
</p>



<p align="center">
    <img src="https://img.shields.io/npm/v/b-library.svg" alt="npm">
    <img src="https://img.shields.io/circleci/project/github/vuejs/vue/dev.svg" alt="Build Status">
    <img src="https://img.shields.io/npm/l/vue.svg" alt="License">
</p> 

<br/>


<p align="center">
    <a href="https://github.com/BobbleHatkjh/VUE-Brick" target="_blank"><img width="200" alt="" src="https://raw.githubusercontent.com/BobbleHatkjh/Vue_BuildingBlock/master/pic/github.png"/></a> &nbsp;&nbsp;
    <a href="https://www.npmjs.com/package/b-library" target="_blank"><img width="155" alt="" src="https://raw.githubusercontent.com/BobbleHatkjh/Vue_BuildingBlock/master/pic/npm.png"/></a>
</p>

<br/>
    
_'Library'is a library of derivative components of 'Brick'_<br/>

_'Library'makes a whole set of functional class 'Vue' component libraries based on the common functions of programmers, whether small to 'A' tags, large to automated'HeadBar' with'router'and dynamic effects, or templates for the entire page,'Library' has everything. We hope 'Brick Library' will bring some convenience to your work._

<br/>


>You can visit the following website to give a rough preview of the old version of 'Library' (some components are different, but the overall idea is the same).<br/>
><a href="http://123.57.41.38:8080/game_center/#/" target="_blank">Library preview(old)</a>


<br/>

- Components
    - [x] A
    - [ ] Account module
    - [x] Banner (In testing)
    - [x] Button
    - [x] Dot
    - [x] Footer
    - [x] HeadBar      
    - [x] Inclusion
    - [ ] Login
    - [ ] Language switch
    - [x] Notice
    - [x] PageLabel 
    - [ ] Register
    - [ ] Router
    - [x] SideBar
    - [x] Slot
    - [x] TabBar
    - [ ] Tips   
  
<br/>
  
- Global Function
    - [x] CSS Overall Control (In testing)
    - [ ] Parallax Effect 
    - [ ] Test Mode 
    - [x] Theme Configuration
    - [ ] iconFont library

<br/>

- Description File
    - [ ] Define Type Files
    
<br/>



### introduction of [import](/import/)

>Few components - Recommended ways of import
```
<template>
    <div>
 
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

// 这是在引入的组件相对较少的情况下推荐的方案，在页面内直接引入简单快捷又很便于维护 
```

<br/>
<br/>


>Multi components - Recommended ways of import   
```
    project
        |...
        |router
            |index.js   <-
        |...

// 在router下的index.js文件批量引入所需的组件，这样又省力，又便于您可能会在store里关联进行状态管理   
// 这一步需要 vue-router 的支持，并需要您在类似的项目结构里手动配置     
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
 
        <HeadBar :menuData="menuData" @return="callBack" />
        <Footer :logo="logo" :grid="true" :support="supportList"/>
        
    </div>
</template>

...

```

<br/>

> ! The project is still in the development stage and the functionality of many components is still incomplete. After entering the 1.0 public version, demo and API guides will be launched simultaneously on the official website of 'Brick'.



<br/>

>The 'brick-library' is still under development, If you have any suggestions or find any bugs, I will be appreciate that if you could write a letter to my mailbox:<br/>
>3206633623@qq.com

<br/>

<br/>


<!--
Preview of the rest of the components:
![Img](https://raw.githubusercontent.com/BobbleHatkjh/Vue_BuildingBlock/master/pic/preview.png)
-->