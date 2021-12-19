<template>
  <section class="space-y-4 px-4">
    <!-- title -->
    <div class="flex items-center">
      <div class="mark" />
      <h2 class="ml-2 font-bold">海外药品商城</h2>
      <nuxt-link to="/" class="ml-auto text-gray-500 text-xs">查看更多 ></nuxt-link>
    </div>
    <!-- content -->
    <div class="content">
      <!-- left -->
      <div class="left-layout">
        <van-swipe 
          :autoplay="4000"
          class="w-full h-full rounded-md" 
        >
          <van-swipe-item v-for="(item, index) in list" :key="index" v-lazy="item.img">
            <img :src="item.img" class="w-full h-full rounded-lg" alt="推荐药品" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- right 国内药品 -->
      <div class="right-layout">
        <p class="text-xs">国内药品</p>
        <div class="right-layout-sub">
          <div v-for="i in 3" :key="i" class="w-full h-full rounded">
            <van-image src="/images/test.jpg" width="100%" height="100%" radius="4" lazy-load alt="国内药品" />
          </div>
        </div>
      </div>
      <!-- right 海外药品 -->
      <div class="right-layout">
        <p class="text-xs">海外药品</p>
        <div class="right-layout-sub">
          <div v-for="i in 3" :key="i" class="w-full h-full rounded">
            <van-image src="/images/test.jpg" width="100%" height="100%" radius="4" lazy-load alt="海外药品"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { img: '/images/test.jpg' },
        { img: '/images/test.jpg' },
        { img: '/images/test.jpg' }
      ]
    }
  }
}
</script>

<style scoped>
  .mark {
    @apply w-1 h-[1.13rem] rounded-md opacity-70 bg-gradient-to-b from-red-400 to-origin-300
  }
  .content {
    @apply grid grid-cols-7 grid-rows-2 gap-3 h-48
  }
  .left-layout {
    @apply col-span-3 row-span-2 w-full h-full
  }
  .right-layout {
    @apply col-span-4 w-full h-full rounded-lg border border-gray-300 p-2 space-y-2
  }
  .right-layout-sub {
    @apply grid grid-cols-3 gap-x-2.5 w-full h-12
  }
</style>