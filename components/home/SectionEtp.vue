<template>
  <section class="space-y-3.5 px-4">
    <!-- title -->
    <div class="flex items-center">
      <div class="mark" />
      <h2 class="ml-2 font-bold">电子处方中心</h2>
      <nuxt-link to="/" class="ml-auto text-gray-500 text-xs">查看更多 ></nuxt-link>
    </div>
    <!-- content -->
    <div class="content">
      <van-image src="/images/home/etp_a.png" width="100%" height="120" lazy-load alt="国内处方中心" />
      <van-image src="/images/home/etp_b.png" width="100%" height="120" lazy-load alt="日本处方中心" />
      <van-image src="/images/home/etp_c.png" width="100%" height="120" lazy-load alt="海外处方中心" />
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
  .content {
    @apply grid grid-cols-3 gap-x-[0.81rem] h-[7.5rem]
  }
</style>