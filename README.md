# vuex-tutorial

> 一个`vuex`教程 主要介绍如何实际操作`vuex`
[demo](http://yelingfeng.github.io/vuex-tutorial )

# newList
- [x] [requirejs快速构建教程](/tutorial/02.md)
- [x] [新增amd版本](https://github.com/yelingfeng/vuex-tutorial/tree/master/amd)

## 前言 

该代码示例使用的vue相关资源 详细看`package.json` 核心(`vue+vuex`) 
其他相关参考[jackblog](https://github.com/jackhutu/jackblog-vue) 工程(使用了该项目的gulp和webpack配置)

- [x] [Vuejs](https://github.com/vuejs/vue)
- [x] [Vuex](https://github.com/vuejs/vuex)
- [x] [Vue-resource](https://github.com/vuejs/vue-resource)
- [x] [bootstrap-material-design](https://github.com/FezVrasta/bootstrap-material-design)

# vuex

一句话介绍`vuex`是什么,官方说明"一个专门为 `Vue.js` 应用设计的状态管理架构"

状态管理: 简单理解就是统一管理和维护各个vue组件的可变化状态(你可以理解成`vue`组件里的某些`data`)

## 实战介绍
完成一个简单搜索查询功能 效果如下

![](/tutorial/img/result01.png)

## 组件介绍
 -  `App` 
  主程序组件
 -  `Search`
  搜索框组件
 -  `SearchGroup` 
  分组类型组件
 -  `List` 
  结果集合组件

## 组件内actions说明
(这里主要描述调用逻辑 结果都是一个`list`)

### App 
 `App`包含了组件`Search`和`List` 
 
> searchResultList 返回结果action 直接从`actions`获取放到`list`中
 
### Search
 `Search`组件中包含子组件`SearchGroup` 主要包含功能
 
> searchAction
   根据key进行查询action  放大镜和回车同时绑定了事件
    
> clearAction 
   清除key的值action
   
### SearchGroup

> setSearchGroup 
   根据分组值进行查询action 
   
   
# 教程
  - [目录结构](/tutorial/01.md)
  - [requirejs快速构建教程](/tutorial/02.md)
  - [TODOS2](/tutorial/03.md)



# 环境准备
### 初始化
```
$ npm install
```

###  开发
启动webpack环境
```
npm run dev
```
启动一个express服务器
```
node server.js 
```
###  构建
```
npm run build
```

# License

MIT


