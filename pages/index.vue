<template>
  <div class="relactive pb-16">
    <!-- title -->
    <header>
      <p>早上好！<span class="text-origin-400">立即登录</span></p>
    </header>
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
        :class="kingkongInTop ? 'border-b border-gray-300 px-4 bg-white py-2 max-w-md mx-auto' : 'border-none mt-3.5'"
      >
        <div class="grid grid-cols-5 gap-x-4">
          <div
            v-for="(item, index) in kingkong"
            :key="index"
            class="w-full h-full text-center space-y-2"
            @click="goAssign(item.ref)"
          >
            <img :src="item.img" class="w-6 h-6 inline-block" alt="kingkong">
            <p class="text-xs">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </van-sticky>
    <!-- menu -->
    <div class="mt-3.5 px-4 grid grid-cols-2 grid-rows-2 gap-3.5 h-[8.75rem]">
      <van-image src="/images/home/menu_a.webp" width="100%" height="100%" lazy-load class="row-span-2" alt="热品套餐" />
      <van-image src="/images/home/menu_b.webp" width="100%" height="100%" lazy-load alt="高端体检" />
      <van-image src="/images/home/menu_c.webp" width="100%" height="100%" lazy-load alt="电子处方" />
    </div>
    <!-- main -->
    <main>
      <!-- 健康在线咨询 -->
      <section-ask ref="askRef" />
      <!-- 赴日精密体检 -->
      <section-pe ref="peRef" />
      <!-- 海外药品商城 -->
      <section-shop ref="shopRef" />
      <!-- 全球健康资讯 -->
      <section-info ref="infoRef" />
      <!-- 电子处方中心 -->
      <section-etp ref="etpRef" />
    </main>
    <!-- footer -->
    <mobile-footer />
  </div>
</template>

<script>
import SectionAsk from '../components/home/SectionAsk'
import SectionPe from '../components/home/SectionPe'
import SectionShop from '../components/home/SectionShop'
import SectionInfo from '../components/home/SectionInfo'
import SectionEtp from '../components/home/SectionEtp'
export default {
  components: {
    SectionAsk,
    SectionPe,
    SectionShop,
    SectionInfo,
    SectionEtp
  },
  data() {
    return {
      kingkongInTop: false,
      kingkong: [
        { text: '专家问诊', ref: 'askRef', img: './images/kingkong/doctor.webp' },
        { text: '健康体检', ref: 'peRef', img: './images/kingkong/pe.webp' },
        { text: '海外药品', ref: 'shopRef', img: './images/kingkong/shop.webp' },
        { text: '最新资讯', ref: 'infoRef', img: './images/kingkong/info.webp' },
        { text: '电子处方', ref: 'etpRef', img: './images/kingkong/etp.webp' }
      ]
    }
  },
  methods: {
    stickyChange(state) {
      this.kingkongInTop = state
    },
    goAssign(name) {
      let h = this.$refs[name].$el.offsetHeight  //模块内容高度
      let t = (this.$refs[name].$el.offsetTop - 120) //模块相对于内容顶部的距离
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if(scrollTop > t) {
        window.scrollTo(0,t)
      } else {
        window.scrollTo({
          top: t,
          behavior: "smooth"
        })
      }
    }
  }
}
</script>

<style scoped>
  header {
    @apply w-full h-11 flex items-center text-xl font-bold px-4
  }
  .search-box {
    @apply w-full h-11 flex items-center px-4 py-1 sticky top-0 bg-white z-50
  }
  .search {
    @apply w-full h-full bg-gray-100 flex items-center px-2.5 text-gray-500 text-sm rounded-md
  }
  main {
    @apply mt-[1.88rem] space-y-[1.88rem]
  }
</style>
