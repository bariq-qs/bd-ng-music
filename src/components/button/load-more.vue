<template>
  <button
    class="bg-[#e2e8f0] text-[#64748b] font-normal text-sm py-2 px-7 rounded-full focus:outline-none focus:shadow-outline flex items-center"
    :disabled="isLoading">
    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24" v-show="isLoading">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="#7b34dd"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
      </path>
    </svg>
    Load More
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  isLoading?: boolean
}>(), {
  isLoading: false
})
</script>
