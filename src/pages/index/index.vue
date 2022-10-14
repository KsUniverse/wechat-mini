<template>
  <view class="content">
      <scroll-view 
        class="mescroll" 
        scroll-y="true" 
        refresher-enabled="true" 
        :refresher-triggered="triggered"
        :refresher-threshold="100" 
        @refresherrefresh="onRefresh" 
        @refresherrestore="onRestore" >
        <text class="title">{{ selectTab }}</text>
        <view><img src="@/static/logo.png"/></view>
        <view><img src="@/static/logo.png"/></view>
        <view><img src="@/static/logo.png"/></view>
        <view><img src="@/static/logo.png"/></view>
        <view><img src="@/static/logo.png"/></view>
        <view><img src="@/static/logo.png"/></view>
        <view><img src="@/static/logo.png"/></view>
        <view><img src="@/static/logo.png"/></view>
      </scroll-view>
    
    <view class="cu-bar tabbar bg-white">
      <view class="action" :class="selectTab == item.name ? 'active':'disable'" @click="switchTab(item.name)" v-for="item in tabList" :key="item.name">
        <i class="iconfont icon" :class="item.icon"></i>{{item.text}}
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useTabList } from '@/store/store';
import { storeToRefs } from 'pinia'
const {tabList, selectTab} = storeToRefs(useTabList())
const {switchTab} = useTabList()

const triggered = ref(false)
const freshing = ref(false)

const onRefresh = () => {
  if (freshing.value) return;
  freshing.value = true;
  triggered.value = true;
  setTimeout(() => {
    triggered.value = false;
    freshing.value = false;
  }, 2000)
}
function onRestore() {
  triggered.value = 'restore';
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .mescroll {
    overflow-y: auto; 
  }
  .cu-bar{
    z-index: 99;
    border-top: 1px solid #ccc;
    .disable {
      color: #A9A8AA;
    }
    .icon {
      width: 40rpx;
      height: 40rpx;
      margin-top: 10rpx;
      margin-bottom: 5rpx;
      position: relative;
      display: block;
      text-align: center;
      font-size: 40rpx;
    }
  }
}
</style>
