<template>
  <div id="app">

    <div id="middlemain">
    <transition :name="transitionName">

      <router-view></router-view>
      </transition>
    </div>

  </div>
</template>

<script>

export default {
  name: 'app',
  data:()=>({
    transitionName: 'jjj'
  }),
  mounted() {

  },
  components:{

  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
}
</script>

<style lang="less" >
  html{
    height: 100%;
    background:#FFF;
  }
  #app{
    width: 7.5rem;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction:column;
    justify-content:space-between;
  }
  #middlemain{
    overflow-y: auto;
    flex-grow:1;
    display: flex;
    flex-direction:column;
  }
  //定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
slide-enter{

}
//定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
slide-enter-active{

}
//2.1.8版及以上 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。
slide-enter-to{

}
 //定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
slide-leave{
display:none;
}
//定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
slide-leave-active{

}
//2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。
slide-leave-to{

}


.slide-right-enter-active{
transition: all .3s;
position: absolute;
top:0;
left:0;
opacity: .8;
}
.slide-right-leave-active {
 transition: all .3s;
 position: absolute;
 top:0;
 left:0;
 opacity: .8;
}
.slide-right-enter{
top:0;
left:0;
 transition: all .3s;
 transform: translate3d(100%, 0, 0);
 opacity: .8;
}
.slide-right-leave-to {
top:0;
left:0;
 transition: all .3s;
 transform: translate3d(-100%, 0, 0);
 opacity: .8;
}


.slide-left-enter-active{
transition: all .3s;
position: absolute;
top:0;
left:0;
opacity: .8;
}
.slide-left-leave-active {
 transition: all .3s;
 position: absolute;
 top:0;
 left:0;
 opacity: .8;
}
.slide-left-enter{
top:0;
left:0;
 transition: all .3s;
 transform: translate3d(-100%, 0, 0);
 opacity: .8;
}
.slide-left-leave-to {
top:0;
left:0;
 transition: all .3s;
 transform: translate3d(100%, 0, 0);
 opacity: .8;
}





</style>
