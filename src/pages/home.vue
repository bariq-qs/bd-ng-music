<template>
  <div class="container-home">
    <img alt="logo" src="~/assets/image/logo.png" />
    <div class="flex flex-col mt-auto mb-7 w-full">
      <InputSearch class="mb-6" v-model="inputValue" />
      <ButtonSearch class="sc-home" @click="onSearch">
        Search
      </ButtonSearch>
    </div>
  </div>
</template>

<script setup lang="ts">
import { InputSearch } from "~/components/input";
import { ButtonSearch } from "~/components/button"
import { useMusicStore } from '~/stores/music'

const musicStore = useMusicStore()
const inputValue = ref('')
const onSearch = () => {
  musicStore.$patch({
    searchValue: inputValue.value
  })
  navigateTo({
    path: '/list',
    query: {
      q: inputValue.value
    }
  })
}
</script>

<style lang="scss">
.container-home {
  @apply flex flex-col items-center;
  min-height: 100vh;
  background-image: linear-gradient(153deg, #712bda 30%, #a45deb 130%);
  padding-inline: 30px;

  img[alt="logo"] {
    width: 85px;
    height: 95px;
    margin-top: auto;
  }

  .sc-home {
    background-color: rgba(255, 255, 255, 0.2);
  }
}
</style>