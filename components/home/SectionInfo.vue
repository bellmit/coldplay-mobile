<template>
  <section class="px-4 space-y-3.5">
    <!-- title -->
    <div class="flex items-center">
      <div class="w-1 h-[1.13rem] rounded-md opacity-70 bg-gradient-to-b from-red-400 to-origin-300" />
      <h2 class="ml-2 font-bold">全球健康资讯</h2>
      <nuxt-link to="/info" class="ml-auto text-gray-500 text-xs">查看更多 ></nuxt-link>
    </div>
    <!-- content -->
    <div v-for="i in 2" :key="i" class="w-full border border-gray-300 rounded-md flex space-x-6 p-3.5">
      <div class="flex-grow w-full">
        <div class="w-full h-9 text-sm leading-5 line-2">
          这4种药是女人的“守护神”，常备气色皮肤好这4种药是女人的“守护神”，常备气色皮肤好这4种药是女人的“守护神”，常备气色皮肤好这4种药是女人的“守护神”，常备气色皮肤好
        </div>
        <p class="mt-6 text-xs text-gray-600">余益惠科技<span class="ml-4">7分钟前</span></p>
      </div>
      <van-image src="/images/test.webp" width="110" height="71" radius="7" lazy-load class="flex-shrink-0" alt="info" /> 
    </div>
  </section>
</template>       

<script>
export default {

}
</script>