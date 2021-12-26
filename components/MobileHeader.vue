<template>
  <header :class="border ? 'shadow-header' : ''">
    <!-- back -->
    <div @click="back">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
    <!-- title -->
    <div 
      class="absolute flex items-center" 
      style="left:50%; top:50%; transform: translate(-50%, -50%)"
    >
      <p class="text-lg font-bold flex-shrink-0">
        {{ title }}
      </p>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  header {
    @apply fixed top-0 inset-x-0 h-12 flex items-center px-4 z-50 bg-white
  }
</style>