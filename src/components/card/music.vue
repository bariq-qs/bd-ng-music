<template>
  <div class="card c-music">
    <img alt="" :src="row.artworkUrl100" />
    <div class="flex flex-col w-full">
      <p class="font-medium text-xs">{{ row.artistName }}</p>
      <p class="font-bold text-sm mb-2"> {{ row.collectionName ? row.collectionName : row.trackName }}</p>
      <div class="mt-auto flex flex-wrap justify-between">
        <div class="chip-genre">
          {{ row.primaryGenreName }}
        </div>
        <div class="flex items-center gap-2">
          <img src="~/assets/image/icons/currency-dollar.svg" alt="" class="curr-d" />
          <p class="text-sm text-[#f5b014] font-bold">{{ row.collectionPrice }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TResultMusic } from '~/stores/music/model'

const props = withDefaults(defineProps<{
  row: TResultMusic
}>(), {})
</script>
<style lang="scss" scoped>
.card.c-music {
  @apply bg-white p-3 rounded-xl flex gap-2;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  img {
    @apply rounded-lg;
    width: 100px;
    height: 100px;
  }

  .chip-genre {
    @apply py-1 px-3 text-xs text-white font-medium rounded-full bg-[#10b981];
  }

  .curr-d {
    height: 16px;
    width: 16px;
  }
}
</style>