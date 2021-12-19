<template>
  <mobile-square ar="50">
    <van-swipe 
      :autoplay="4000"
      :show-indicators="false"
      class="w-full h-full rounded-md" 
    >
      <van-swipe-item v-for="(item, index) in list" :key="index" v-lazy="item.img">
        <img :src="item.img" class="w-full h-full rounded-md" alt="swipe" />
      </van-swipe-item>
    </van-swipe>
  </mobile-square>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default:() => [
        { img: '/images/test.jpg' },
        { img: '/images/test.jpg' },
        { img: '/images/test.jpg' },
      ]
    },
    round: {
      type: Boolean,
      default: false
    }
  },
}
</script>