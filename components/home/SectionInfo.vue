<template>
  <section class="px-4 space-y-3.5">
    <!-- title -->
    <div class="flex items-center">
      <div class="mark" />
      <h2 class="ml-2 font-bold">全球健康资讯</h2>
      <nuxt-link to="/" class="ml-auto text-gray-500 text-xs">查看更多 ></nuxt-link>
    </div>
    <!-- content -->
    <div v-for="i in 2" :key="i" class="card">
      <div class="flex-grow w-full">
        <div class="w-full h-9 text-sm leading-5 line-2">
          这4种药是女人的“守护神”，常备气色皮肤好这4种药是女人的“守护神”，常备气色皮肤好这4种药是女人的“守护神”，常备气色皮肤好这4种药是女人的“守护神”，常备气色皮肤好
        </div>
        <p class="mt-6 text-xs text-gray-600">余益惠科技    7分钟前</p>
      </div>
      <van-image src="/images/test.webp" width="110" height="71" radius="7" lazy-load class="flex-shrink-0" alt="info" /> 
    </div>
  </section>
</template>       

<script>
export default {

}
</script>

<style scoped>
  .mark {
    @apply w-1 h-[1.13rem] rounded-md opacity-70 bg-gradient-to-b from-red-400 to-origin-300
  }
  .card {
    @apply w-full border border-gray-300 rounded-md flex space-x-6 p-3.5
  }
</style>