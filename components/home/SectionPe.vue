<template>
  <section>
    <!-- title -->
    <div class="flex items-center px-4">
      <div class="w-1 h-[1.13rem] rounded-md opacity-70 bg-gradient-to-b from-red-400 to-origin-300" />
      <h2 class="ml-2 font-bold">赴日精密体检</h2>
      <nuxt-link to="/" class="ml-auto text-gray-500 text-xs">查看更多 ></nuxt-link>
    </div>
    <!-- tag -->
    <div class="mt-3.5 grid grid-cols-3 gap-3.5 px-4">
      <button v-for="i in 6" :key="i" class="w-full h-7 rounded bg-origin-400 text-white text-xs">
        福系列-福自健康
      </button>
    </div>
    <!-- card -->
    <div class="mt-4 overflow-x-scroll flex space-x-3.5 px-4">
      <div v-for="i in 5" :key="i" class="w-[90%] flex-shrink-0 border border-gray-300 rounded-md p-4 flex space-x-4">
        <div class="flex-grow w-full">
          <p class="text-sm font-bold line-1">福自健康-超声波内镜专项套餐</p>
          <p class="mt-3 text-xs text-gray-600">轻\中\重\特疾\罕见病全面守护</p>
          <p class="mt-5 text-xs"><span class="text-origin-400 text-1.5xl">36600</span> 元/次</p>
        </div>
        <van-image
          src="/images/test.webp"
          width="78"
          height="78"
          fit="cover"
          lazy-load
          class="flex-shrink-0"
          alt="体检套餐"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>