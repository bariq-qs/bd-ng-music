<template>
  <div class="wrapper-list">
    <HeaderHome class="hd-tp-hm" @search="isActive = true" />
    <div class="content-list" ref="containerList">
      <div class="flex justify-center mb-8 mt-3 items-center flex-wrap">
        <p class="text-[#334155] text-sm">Search result for :&nbsp;</p>
        <p class="text-[#7b34dd] font-bold text-2xl break-words">{{ searchVal }}</p>
      </div>
      <div class="flex flex-col mt-10" v-motion-pop-visible-once v-if="musicList.length === 0 && !isLoading">
        <img src="@/assets/image/error-vector.png" alt="search-not-found" class="w-28 mb-2 mx-auto" />
        <p class="text-center text-[#485990] font-bold text-lg mb-1 mx-auto">SORRY!</p>
        <p class="text-center text-sm text-[#334155] mx-auto">Your Search Not Found</p>
      </div>
      <div v-for="(row, rowIdx) in musicList" :key="rowIdx" class="mb-4" v-motion-pop-visible-once ref="refCardMusic">
        <CardMusic :row="row">
        </CardMusic>
      </div>
      <div class="flex justify-center mb-5">
        <ButtonLoadMore :is-loading="isLoading" @click="getMusicList" v-if="musicList.length > 0" />
      </div>
    </div>
    <ModalSearch v-model:show="isActive" />
  </div>
</template>

<script lang="ts" setup>
import { HeaderHome } from '~/components/header'
import { ButtonLoadMore } from '~/components/button'
import { useMusicStore } from '~/stores/music'
import { CardMusic } from '~/components/card'
import { ModalSearch } from '~/components/modal'

const limit = 5
const musicStore = useMusicStore()
const musicList = computed(() => musicStore.musicList)
const searchVal = computed(() => musicStore.getSearchVal)
const isLoading = computed(() => musicStore.isLoading)
const refCardMusic = ref()
const isActive = ref(false)
const getMusicList = async () => {
  await musicStore.fetchMusic(limit)
  nextTick(() => {
    if (refCardMusic.value) {
      refCardMusic.value[(refCardMusic.value.length - 1) - limit]?.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
onMounted(() => {
  getMusicList()
})
</script>

<style lang="scss" scoped>
.wrapper-list {
  position: relative;
  background-color: #f8fafc;
  min-height: 100vh;

  .hd-tp-hm {
    position: sticky;
    width: 100%;
    top: 0;
  }

  .content-list {
    padding: 30px 15px 0 15px;
  }
}
</style>