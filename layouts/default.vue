<template>
  <div class="min-h-screen bg-gray-200">
    <div class="default">
      <!-- Nuxt -->
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .default {
    @apply container max-w-md w-full mx-auto bg-white min-h-screen relative leading-none text-base
  }
  ::-webkit-scrollbar {
    display: none
  }
</style>