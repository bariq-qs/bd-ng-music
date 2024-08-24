<template>
  <div class="modal-search" v-if="show" v-motion-slide-visible-once-bottom>
    <font-awesome-icon :icon="['fas', 'x']" class="text-white text-xl font-bold cursor-pointer ml-auto sticky top-4"
      @click="onCLose" />
    <div class="flex flex-col w-full sticky left-1/2" style="top: 40%;">
      <p class="text-center text-2xl font-bold text-white mb-10">Search</p>
      <InputSearch class="mb-6" v-model="inputValue" />
      <ButtonSearch class="sc-lr" @click="onSearch">
        Search
      </ButtonSearch>
    </div>
  </div>
</template>

<script setup lang="ts">
import { InputSearch } from "~/components/input";
import { ButtonSearch } from "~/components/button"
import { useMusicStore } from '~/stores/music'

const props = withDefaults(defineProps<{
  show: boolean
}>(), {
  show: false
})
const emit = defineEmits<{
  (e: 'update:show', val: boolean): void
}>()
const {
  show
} = toRefs(props)
const musicStore = useMusicStore()

const inputValue = computed({
  get() {
    return musicStore.getSearchVal
  },
  set(val) {
    musicStore.$patch({
      searchValue: val
    })
  }
})

const onCLose = () => {
  emit('update:show', false)
}

const onSearch = () => {
  musicStore.$patch({
    limit: 0,
  })
  navigateTo({
    query: {
      q: inputValue.value
    }
  })
  onCLose()
  musicStore.fetchMusic(5)
}
</script>

<style lang="scss" scoped>
.modal-search {
  @apply p-5;
  position: absolute;
  background-color: rgba(28, 28, 45, 0.9);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  top: 0;
  z-index: 1;
  ;

  .sc-lr {
    background: linear-gradient(98deg, #712bda -48%, #a45deb 52%);
  }
}
</style>