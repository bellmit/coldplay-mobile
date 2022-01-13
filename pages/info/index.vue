<template>
  <div class="reactive pb-16">
    <!-- title -->
    <header class="w-full h-11 px-4">
      <h1 class="text-xl font-bold leading-[2.75rem]">资讯</h1>
    </header>
    <!-- swipe -->
    <div class="mt-1.5 px-4">
      <mobile-swipe />
    </div>
    <!-- nav -->
    <nav class="mt-4 px-4 grid grid-cols-3 gap-x-3.5 h-8">
      <nuxt-link to="/" class="btn bg-[#019FE8]">诊疗技术</nuxt-link>
      <nuxt-link to="/" class="btn bg-teal-400">药品信息</nuxt-link>
      <nuxt-link to="/" class="btn bg-origin-400">医疗器械</nuxt-link>
    </nav>
    <!-- main -->
    <main class="mt-5 px-4 space-y-4">
      <!-- 最新资讯 -->
      <section class="space-y-3.5">
        <div class="flex items-center space-x-2">
          <div class="mark" />
          <h2 class="text-lg font-bold">最新资讯</h2>
        </div>
        <div class="shadow-mobile rounded-md px-3.5">
          <div v-for="i in 3" :key="i" class="py-3.5 border-b border-gray-300 flex space-x-4">
            <div class="flex-grow w-full">
              <h3 class="text-sm font-bold leading-5 line-2">这4种药是女人的“守护神”，常备气色皮肤好</h3>
              <p class="mt-4 text-xs text-gray-600">余益惠科技    7分钟前</p>
            </div>
            <van-image src="/images/test.webp" width="110" height="71" radius="7" lazy-load class="flex-shrink-0" alt="info" />
          </div>
        </div>
      </section>
      <!-- 更多资讯 -->
      <section class="space-y-3.5">
        <div class="flex items-center space-x-2">
          <div class="mark" />
          <h2 class="text-lg font-bold">更多资讯</h2>
        </div>
        <div class="shadow-mobile rounded-md px-3.5">
          <div v-for="i in 3" :key="i" class="py-3.5 border-b border-gray-300 flex space-x-4">
            <div class="flex-grow w-full">
              <h3 class="text-sm font-bold leading-5 line-2">这4种药是女人的“守护神”，常备气色皮肤好</h3>
              <p class="mt-4 text-xs text-gray-600">余益惠科技    7分钟前</p>
            </div>
            <van-image src="/images/test.webp" width="110" height="71" radius="7" lazy-load class="flex-shrink-0" alt="info" />
          </div>
        </div>
      </section>
    </main>
    <!-- footer -->
    <mobile-footer :active="2" />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .btn {
    @apply w-full h-full rounded-md text-white text-sm text-center leading-8
  }
  .mark {
    @apply w-1 h-[1.13rem] rounded opacity-70;
    background: linear-gradient(180deg, #E81512 0%, rgba(244, 153, 12, 0.5) 100%);
  }
</style>