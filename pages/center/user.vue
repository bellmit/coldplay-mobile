<template>
  <div class="reactive pb-16 bg-gray-100 min-h-screen">
    <!-- header -->
    <header class="w-full h-11 px-4 flex items-center bg-white">
      <h1 class="text-xl font-bold">我的</h1>
    </header>
    <main class="space-y-4">
      <!-- info -->
      <section class="pt-5 space-y-6 px-4" style="background: linear-gradient(0deg, #F5F5F5 0%, #FFFFFF 100%)">
        <div class="flex items-center space-x-3.5">
          <van-image src="/images/test.webp" width="70" height="70" alt="avatar" round class="flex-shrink-0" />
          <div class="flex-grow space-y-2">
            <h2 class="text-lg font-bold leading-4">用户170****8695</h2>
            <p class="text-sm text-gray-600">男  23岁  威海市</p>
            <p class="text-xs text-gray-600">设置个人资料></p>
          </div>
        </div>
        <van-image src="/images/center/user/banner.webp" width="100%" height="100%" alt="banner" />
      </section>
      <!-- 我的订单 -->
      <section class="px-4">
        <div class="rounded-md bg-white px-4">
          <div class="py-4 border-b border-gray-400 flex items-center">
            <h2 class="font-bold">我的订单</h2>
            <p class="ml-auto text-xs text-gray-600">查看全部></p>
          </div>
          <div class="py-4 grid grid-cols-4 gap-x-4">
            <!-- 待付款 -->
            <div class="w-full text-center space-y-2">
              <div class="w-6 h-6 mx-auto">
                <img src="/images/center/user/waitPay.webp" alt="待付款" class="w-full h-full">
              </div>
              <p class="text-xs">待付款</p>
            </div>
            <!-- 待发货 -->
            <div class="w-full text-center space-y-2">
              <div class="w-6 h-6 mx-auto">
                <img src="/images/center/user/waitSend.webp" alt="待发货" class="w-full h-full">
              </div>
              <p class="text-xs">待发货</p>
            </div>
            <!-- 待收货 -->
            <div class="w-full text-center space-y-2">
              <div class="w-6 h-6 mx-auto">
                <img src="/images/center/user/waitReceipt.webp" alt="待收货" class="w-full h-full">
              </div>
              <p class="text-xs">待收货</p>
            </div>
            <!-- 待评价 -->
            <div class="w-full text-center space-y-2">
              <div class="w-6 h-6 mx-auto">
                <img src="/images/center/user/waitComments.webp" alt="待评价" class="w-full h-full">
              </div>
              <p class="text-xs">待评价</p>
            </div>
          </div>
        </div>
      </section>
      <!-- 服务与工具 -->
      <section class="px-4">
        <div class="px-4 rounded-md bg-white">
          <div class="py-4 border-b border-gray-400 flex items-center">
            <h2 class="font-bold">服务与工具</h2>
            <p class="ml-auto text-xs text-gray-600">查看全部></p>
          </div>
          <div class="py-4 grid grid-cols-4 gap-x-4 gap-y-5">
            <!-- 我的咨询 -->
            <div class="w-full text-center space-y-2">
              <div class="w-6 h-6 mx-auto">
                <img src="/images/center/user/icon_ask.webp" alt="我的咨询" class="w-full h-full">
              </div>
              <p class="text-xs">我的咨询</p>
            </div>
            <!-- 我的处方 -->
            <div class="w-full text-center space-y-2">
              <div class="w-6 h-6 mx-auto">
                <img src="/images/center/user/icon_etp.webp" alt="我的处方" class="w-full h-full">
              </div>
              <p class="text-xs">我的处方</p>
            </div>
            <!-- 我的医检 -->
            <div class="w-full text-center space-y-2">
              <div class="w-6 h-6 mx-auto">
                <img src="/images/center/user/icon_pe.webp" alt="我的医检" class="w-full h-full">
              </div>
              <p class="text-xs">我的医检</p>
            </div>
            <!-- 浏览历史 -->
            <div class="w-full text-center space-y-2">
              <div class="w-6 h-6 mx-auto">
                <img src="/images/center/user/icon_history.webp" alt="浏览历史" class="w-full h-full">
              </div>
              <p class="text-xs">浏览历史</p>
            </div>
            <!-- 问题反馈 -->
            <div class="w-full text-center space-y-2">
              <div class="w-6 h-6 mx-auto">
                <img src="/images/center/user/icon_callback.webp" alt="问题反馈" class="w-full h-full">
              </div>
              <p class="text-xs">问题反馈</p>
            </div>
            <!-- 在线客服 -->
            <div class="w-full text-center space-y-2">
              <div class="w-6 h-6 mx-auto">
                <img src="/images/center/user/icon_service.webp" alt="在线客服" class="w-full h-full">
              </div>
              <p class="text-xs">在线客服</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <div class="text-center">
      <button class="mt-7 w-[11.25rem] h-[2.13rem] bg-origin-400 text-white font-bold rounded-full">
        退出登录
      </button>
    </div>
    <!-- footer -->
    <mobile-footer :active="4" />
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>