<template>
  <footer class="footer">
    <div class="tabbar">
      <!-- 首页 -->
      <nuxt-link to="/" class="tab">
        <van-image
          :src="active === 1 ? '/images/footer/home_s.png' : '/images/footer/home.png' "
          width="24"
          height="24"
          alt="home"
        />
        <p>首页</p>
      </nuxt-link>
      <!-- 资讯 -->
      <nuxt-link to="/" class="tab">
        <van-image
          :src="active === 2 ? '/images/footer/info_s.png' : '/images/footer/info.png' "
          width="24"
          height="24"
          alt="info"
        />
        <p>资讯</p>
      </nuxt-link>
      <!-- 消息 -->
      <nuxt-link to="/" class="tab">
        <van-image
          :src="active === 3 ? '/images/footer/chat_s.png' : '/images/footer/chat.png' "
          width="24"
          height="24"
          alt="chat"
        />
        <p>消息</p>
      </nuxt-link>
      <!-- 我的 -->
      <nuxt-link to="/" class="tab">
        <van-image
          :src="active === 4 ? '/images/footer/user_s.png' : '/images/footer/user.png' "
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

<style scoped>
  .footer {
    @apply lg:hidden fixed bottom-0 inset-x-0 text-xs z-50
  }
  .tabbar {
    @apply h-12 bg-white z-50 flex items-center justify-around shadow-footer;
  }
  .tab {
    @apply flex flex-col items-center space-y-0.5
  }
</style>