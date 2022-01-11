<template>
  <footer class="fixed bottom-0 inset-x-0 text-xs z-50">
    <div class="h-12 bg-white z-50 flex items-center justify-around shadow-footer">
      <!-- 首页 -->
      <nuxt-link to="/" class="flex flex-col items-center space-y-0.5">
        <van-image
          :src="active === 1 ? '/images/footer/home_s.webp' : '/images/footer/home.webp' "
          width="24"
          height="24"
          alt="home"
        />
        <p>首页</p>
      </nuxt-link>
      <!-- 资讯 -->
      <nuxt-link to="/info" class="flex flex-col items-center space-y-0.5">
        <van-image
          :src="active === 2 ? '/images/footer/info_s.webp' : '/images/footer/info.webp' "
          width="24"
          height="24"
          alt="info"
        />
        <p>资讯</p>
      </nuxt-link>
      <!-- 消息 -->
      <nuxt-link to="/chat" class="flex flex-col items-center space-y-0.5">
        <van-image
          :src="active === 3 ? '/images/footer/chat_s.webp' : '/images/footer/chat.webp' "
          width="24"
          height="24"
          alt="chat"
        />
        <p>消息</p>
      </nuxt-link>
      <!-- 我的 -->
      <nuxt-link to="/" class="flex flex-col items-center space-y-0.5">
        <van-image
          :src="active === 4 ? '/images/footer/user_s.webp' : '/images/footer/user.webp' "
          width="24"
          height="24"
          alt="user"
        />
        <p>我的</p>
      </nuxt-link>
    </div>
  </footer>
</template> 

<script>
export default {
  props: {
    active: {
      type: Number,
      default: 1
    }
  }
}
</script>