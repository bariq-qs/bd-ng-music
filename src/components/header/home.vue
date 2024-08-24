<template>
  <header class="h-home">
    <font-awesome-icon :icon="['fas', 'bars']" class="text-white text-xl font-bold" />
    <img src="~/assets/image/ngmusic.svg" alt="music" width="100" class="" />
    <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="text-white text-xl font-bold cursor-pointer"
      @click="onSearch" />
  </header>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'search'): void
}>()

const onSearch = () => {
  emit('search')
}
</script>

<style lang="scss" scoped>
header.h-home {
  @apply py-4 px-4;
  background: url('@/assets/image/bg-header.svg');
  // background-color: red;
  background-repeat: no-repeat;
  background-size: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 1;

  img[alt="music"] {
    margin-top: -17px;
  }
}
</style>