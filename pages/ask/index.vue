<template>
  <div class="relative pt-12 bg-gray-100 min-h-screen">
    <mobile-header title="健康在线咨询" :border="false" />
    <mobile-picker />
    <!-- list -->
    <div class="p-4 space-y-4">
      <div v-for="i in 8" :key="i" class="w-full bg-white rounded p-3.5 space-y-2">
        <div class="flex space-x-4">
          <van-image src="/images/test.webp" width="66" height="66" round class="flex-shrink-0" />
          <div class="flex-grow py-1 space-y-2">
            <p class="font-bold">安·尼古拉斯</p>
            <p class="text-xs line-1">副主任医师<span class="ml-2.5">男科</span><span class="ml-2">藤本养生院保洁</span></p>
            <p class="text-xs text-gray-600 line-1">擅长：前列腺癌、肾积水、肾上腺肿瘤等</p>
          </div>
        </div>
        <div class="flex items-end">
          <div class="space-y-1.5">
            <van-rate v-model="rateValue" readonly size="10" :allow-half="true" color="F46B3B" />
            <p class="mt-1.5 text-xs text-gray-600">综合评分: {{ (rateValue*2).toFixed(1) }}</p>
          </div>
          <p class="ml-auto text-xs text-gray-600">咨询费198￥</p>
          <button class="ml-2 btn-1 rounded">立即咨询</button>
        </div>
      </div>
    </div>
  </div>
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

<style>

</style>