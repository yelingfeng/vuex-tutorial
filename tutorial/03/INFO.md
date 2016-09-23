# vuex入门实例(3/3)

最后一篇 想写下vuex 2.0以后的变化, 其实严格意义不算入门了 大家随便看看就好 算这个系列的完结吧 ：）

vuex为了迎合vue2.0的变化 进行了大量的调整和优化

先看下尤大2.0的设计 [传送门](https://github.com/vuejs/vuex/issues/236)

总结下大概有几点变化


## 1. 更加语义化

原文 Terms naming change for better semantics这个语义化说的是触发`action`和`mutation`的API上

在使用`action`的时候 我们一般是从vue组件本身`dispatch`派发一个action 这个其实只是一个命令 并没有实际
改变什么， 而`dispatch`一个`mutation` 其实是改变了vuex本身的数据 所以一般从数据角度理解 这种应该属于事物提交。那么变化之后的命名就是`commit`这样更加语义化 也更好的理解职责

### 新的写法
### dispatch --> Action
``` javascript
methods:{
    Add : function(){
      this.$store.dispatch('ADD',2).then(function(resp){
          console.log(resp)
      })
    }
}

```
### commit --> Mutation
``` javascript
actions:{
    "ADD" : function(store , param){
        return new Promise(function(resolve, reject) {
            store.commit('ADD',param)
            resolve("ok");
        })
    }
}
```

1.x 写法就是触发`action`和`mutation`都叫`dispatch`

``` javascript
ADD: function(store, param ){
    store.dispatch('COMMIT',param)
}
```

## 2. 更灵活

1.x之前的版本action是不定义在vuex里的,  而2.x actions可以直接在store中定义了 也就是可以在store实例中直接dispatch

```javascript
var store =  new Vuex.Store({
    state: {
        messages: 0
    },
    mutations:{
        "ADD": function(state, msg) {
            state.messages += msg;
        }
    },
    // action不用再去外面定义 可以直接写在构建参数里
    actions:{
        "ADD" : function(store , param){
            store.commit('ADD',param)
        },
    }
})
store.dispatch('ADD',2)
```

而getter也是如此 在vue中直接取getters

```javascript
computed:{
   msg : function(){
      return this.$store.getters.getMessage
   }
}
```


## 3. Promise Action

原文 `Composable Action Flow `直译 `可组合的action流`
其实这个组合事件流概念 没怎么用过 也不好翻译 我就简单从变化性翻译它
就是action现在返回了promise 在之前的版本 并没有返回promise 而2.x的源码中已经返回了promise
所以也就可以支持所谓的Composable Action

``` javascript
// action我们定义一个返回promise的add action
actions:{
    "ADD" : function(store , param){
        return new Promise(function(resolve, reject) {
            store.commit('ADD',param)
            resolve("ok");
        })
    }
}

// 这里可以在dispatch之后直接处理异步
this.$store.dispatch('ADD',2).then(function(resp){
   console.log(resp) // ok
})


```


## 4. MapGetters/ MapActions

新版vuex提供了几个封装方法 `mapState`, `mapMutations`, `mapGetters`,`mapActions`

这些都是什么鬼呢？

其实如果你用过vuex1.x以下的版本 其实它就是我们vue组件中的`vuex`属性的 换了一种更高逼格写法

可以定义一组要获取的actions getters 然后map进来 

```javascript
 // 旧版写法
 var App = Vue.extend({
    template:"....",
    vuex:{
        getters:{
            msg : function(state){
                return state.messages
            }
        },
        actions:{
            add :actions.ADD
        }
    }
 })

 // 新版写法 es5 写法
 var App = Vue.extend({
    template:"....",
    computed:Vuex.mapGetters({
        msg : 'getMessage'
    }),
    methods:Vuex.mapGetters({
        add : 'ADD'
    })
})
```
  这种本质跟1.x的`vuex`写法是一样的 内部都是使用vue的`Object.defineProperty`取做响应式
```javascript
// es6写法 支持rest参数这种写法 也可以直接完全使用map套装注入
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    someComuted () { … },
    ...mapGetters(['getMessage', 'getName'])
  },
  methods: {
    someMethod () { … },
    ...mapActions(['ADD','EDIT'])
  }
}

```

##5. 其他变动

最新的`vuex-2.0.0.rc5` 为说明API一些新变化
```javascript

   // 这个就是换个名字
   store.middlewares -> store.plugins
    
   // 这货貌似干掉又被还原了 尤大真是喜怒无常 哈    
   store.watch
   
   // 使用subscribe 监听vuex的变化
   store.subscribe((mutation, state) => { ... })

   // 注册模块
   registerModule

   // 注销模块
   unregisterModule
```

## 总结

总体来说vuex2.0的变化还是跟vue本身一样 也算折腾了一下 新版的写法和逼格更高些。
作为vue全家桶中重要的状态流管理框架 vuex值得你拥有

[demo地址](http://yelingfeng.github.io/vuex-tutorial/tutorial/03 )
