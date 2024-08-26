<template>
  <div class="card c-music">
    <template v-if="!isLoading">
      <img alt="" :src="row.artworkUrl100"/>
      <div class="flex flex-col w-full">
        <p class="font-medium text-xs">{{ row.artistName }}</p>
        <p class="font-bold text-sm mb-2"> {{ row.collectionName ? row.collectionName : row.trackName }}</p>
        <div class="mt-auto flex flex-wrap justify-between">
          <div class="chip-genre">
            {{ row.primaryGenreName }}
          </div>
          <div class="flex items-center gap-2">
            <img src="~/assets/image/icons/currency-dollar.svg" alt="" class="curr-d"/>
            <p class="text-sm text-[#f5b014] font-bold">{{ row.collectionPrice }}</p>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="animate-pulse flex items-center justify-center w-[150px] h-[100px] rounded-lg bg-slate-200">
        <svg class="w-10 h-10 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
             fill="currentColor" viewBox="0 0 20 18">
          <path
              d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
        </svg>
      </div>
      <div class="flex flex-col animate-pulse w-full">
        <div class="h-2 bg-slate-200 rounded-full w-full mb-2"></div>
        <div class="h-2 bg-slate-200 rounded-full w-1/2"></div>
        <div class="mt-auto flex flex-wrap justify-between">
          <div class="h-3 bg-slate-200 rounded-full w-[80px]"></div>
          <div class="h-3 bg-slate-200 rounded-full w-[50px]"></div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { TResultMusic } from '~/stores/music/model'

const props = withDefaults(defineProps<{
  row: TResultMusic,
  isLoading: boolean
}>(), {
  isLoading: true
})
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