<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <keep-alive> -->
      <!-- <router-view v-if="$route.meta.keepAlive"> -->
        <!-- 缓存入口 -->
      <!-- </router-view> -->
    <!-- </keep-alive> -->
    <!-- <router-view v-if="!$route.meta.keepAlive"> -->
      <!-- 非缓存入口 -->
    <!-- </router-view> -->
    <!-- <router-view></router-view> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app{
  height: 100%;
}
.header{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: .88rem;
  border-bottom: 1px solid #d8d8d8;
  background-color: #fff;
  @include vhc;
  @include ellipsis(1)
}
.footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .88rem;
    border-top: 1px solid #d8d8d8;
    background-color: green;
    @include vhc;
    @include ellipsis(1)
}
</style>



