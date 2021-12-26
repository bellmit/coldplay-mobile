<template>
  <div class="box">
    <!-- text -->
    <div class="flex-grow w-full px-4 line-1">
      当前选择：内科/心血管疾病
    </div>
    <!-- mark -->
    <div class="ml-auto mark flex-shrink-0" />
    <!-- filter -->
    <div class="px-4 flex-shrink-0 flex items-center space-x-1">
      <p>筛选</p>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .box {
    @apply w-full h-11 flex items-center text-sm bg-white;
    box-shadow: 0px 1px 0px 0px #E6E6E6;
  }
  .mark {
    width: 0.25rem;
    height: 1.13rem;
    background: linear-gradient(-90deg, #E6E6E6 0%, rgba(245, 245, 245, 0) 100%);
  }
</style>