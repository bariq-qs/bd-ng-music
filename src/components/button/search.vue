<template>
  <button class="search">
    <slot />
  </button>
</template>

<style scoped lang="scss">
button.search {
  @apply text-sm font-medium text-white py-3 rounded-full;
  // background: linear-gradient(98deg, #712bda -48%, #a45deb 52%);
}
</style>