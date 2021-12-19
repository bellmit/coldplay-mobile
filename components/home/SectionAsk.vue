<template>
  <section>
    <!-- title -->
    <div class="flex items-center px-4">
      <div class="mark" />
      <h2 class="ml-2 font-bold">健康在线咨询</h2>
      <nuxt-link to="/" class="ml-auto text-gray-500 text-xs">查看更多 ></nuxt-link>
    </div>
    <!-- menu -->
    <div class="menu-box">
      <nuxt-link to="/" class="h-16">
        <van-image src="/images/home/ask_a.png" width="100%" height="100%" lazy-load alt="国内专家" />
      </nuxt-link>
      <nuxt-link to="/" class="h-16">
        <van-image src="/images/home/ask_b.png" width="100%" height="100%" lazy-load alt="日本专家" />
      </nuxt-link>
    </div>
    <!-- card -->
    <div class="card-box">
      <div
        v-for="i in 5"
        :key="i"
        class="card"
      >
        <div class="flex items-center space-x-4">
          <van-image
            src="/images/test.jpg"
            width="66"
            height="66"
            round
            fit="cover"
            lazy-load
            class="flex-shrink-0"
            alt="avatar"
          />
          <div class="flex-grow space-y-2">
            <p class="font-bold">郝微</p>
            <p class="text-xs line-1">副主任医师 讲师</p>
            <p class="text-xs text-gray-600 line-1">擅长：小儿麻痹、风热感冒、抽风热感冒、抽风热</p>
          </div>
        </div>
        <div class="flex items-end mt-2">
          <div>
            <van-rate v-model="rateValue" readonly size="10" :allow-half="true" color="F46B3B" />
            <p class="mt-1.5 text-xs text-gray-600">综合评分: {{ (rateValue*2).toFixed(1) }}</p>
          </div>
          <button class="ml-auto btn-1 rounded">专家详情</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      rateValue: 3,
    }
  }
}
</script>
<style scoped>
  .mark {
    @apply w-1 h-[1.13rem] rounded-md opacity-70 bg-gradient-to-b from-red-400 to-origin-300
  }
  .menu-box {
    @apply mt-3.5 grid grid-cols-2 gap-x-4 h-16 px-4
  }
  .card-box {
    @apply mt-[0.81rem] overflow-x-scroll flex space-x-3.5 px-4
  }
  .card {
    @apply w-[90%] flex-shrink-0 border border-gray-300 rounded-md p-3.5
  }
</style>