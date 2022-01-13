<template>
  <div class="relative pb-16">
    <!-- title -->
    <header class="w-full h-11 px-4">
      <h1 class="text-xl font-bold leading-[2.75rem]">消息(2)</h1>
    </header>
    <!-- search -->
    <div class="w-full h-11 flex items-center px-4 py-1 sticky top-0 bg-white z-50">
      <div class="w-full h-full bg-gray-100 flex items-center px-2.5 text-gray-500 text-sm rounded-md">
        <p class="">搜索联系人</p>
        <van-icon name="search" class="ml-auto" />
      </div>
    </div>
    <!-- list -->
    <div class="px-4">
      <div 
        v-for="i in 8" :key="i"
        class="flex items-center space-x-3"
      >
        <van-badge :content="2" max="99">
          <van-image src="/images/test.webp" width="51" height="51" alt="avater" radius="7" class="flex-shrink-0" lazy-load />
        </van-badge>
        <div 
          class="flex-grow w-full space-y-3 py-3.5"
          :class="i === 8 ? '' : 'border-b border-gray-300'"
        >
          <p class="line-1">藤本胜洋（藤本勝洋）</p>
          <p class="line-1 text-sm text-gray-600">您现在的状况还需要持续治疗，如果后续您现在的状况还需要持续治疗，如果后续</p>
        </div>
      </div>
    </div>
    <!-- footer -->
    <mobile-footer :active="3" />
  </div>
</template>

<script>
export default {

}
</script>