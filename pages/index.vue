<template>
  <div class="relactive pb-12">
    <!-- title -->
    <div class="title-box">
      <p>早上好！<span class="text-origin-400">立即登录</span></p>
    </div>
    <!-- search -->
    <div class="search-box">
      <div class="search">
        <p class="">搜索药品、品牌</p>
        <van-icon name="search" class="ml-auto" />
      </div>
    </div>
    <!-- swipe -->
    <div class="mt-3.5 px-4">
      <mobile-swipe />
    </div>
    <!-- kingkong -->
    <van-sticky :offset-top="40" @change="stickyChange">
      <div
        class="px-4" 
        :class="kingkongInTop ? 'border-b border-gray-300 px-4 bg-white py-2' : 'border-none mt-3.5'"
      >
        <div class="grid grid-cols-5 gap-x-4">
          <div 
            v-for="(item, index) in kingkong" 
            :key="index"
            class="w-full h-full text-center space-y-2"
          >
            <img :src="item.img" class="w-6 h-6 inline-block">
            <p class="text-xs">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </van-sticky>
    <!-- menu -->
    <div class="mt-3.5 px-4 grid grid-cols-2 grid-rows-2 gap-3.5 h-[8.75rem]">
      <van-image src="/images/home/menu_a.png" width="100%" height="100%" lazy-load class="row-span-2" />
      <van-image src="/images/home/menu_b.png" width="100%" height="100%" lazy-load />
      <van-image src="/images/home/menu_c.png" width="100%" height="100%" lazy-load />
    </div>
    <!-- main -->
    <main class="mt-[1.88rem] space-y-[1.88rem]">
      <!-- 健康在线咨询 -->
      <section-ask />
    </main>
  </div>
</template>

<script>
import SectionAsk from '../components/home/SectionAsk'
export default {
  components: {
    SectionAsk
  },
  data() {
    return {
      kingkongInTop: false,
      kingkong: [
        { text: '专家问诊', ref: 'askRef', img: './images/kingkong/doctor.png' },
        { text: '健康体检', ref: 'peRef', img: './images/kingkong/pe.png' },
        { text: '海外药品', ref: 'shopRef', img: './images/kingkong/shop.png' },
        { text: '最新资讯', ref: 'infoRef', img: './images/kingkong/info.png' },
        { text: '电子处方', ref: 'etpRef', img: './images/kingkong/etp.png' }
      ]
    }
  },
  methods: {
    stickyChange(state) {
      this.kingkongInTop = state
    },
    goAssign(ref) {
      console.log(ref)
    }
  }
}
</script>

<style scoped>
  .title-box {
    @apply w-full h-11 flex items-center text-xl font-bold px-4
  }
  .search-box {
    @apply w-full h-11 flex items-center px-4 py-1 sticky top-0 bg-white z-50
  }
  .search {
    @apply w-full h-full bg-gray-100 flex items-center px-2.5 text-gray-500 text-sm rounded-md
  }
</style>
