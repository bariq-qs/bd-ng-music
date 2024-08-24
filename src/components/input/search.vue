<template>
  <input class="search" placeholder="Artist / Album /Title" v-model="inputValue" />
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue: string
}>(), {})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const inputValue = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  }
})
</script>

<style lang="scss" scoped>
input.search {
  @apply py-3 px-4 rounded-full text-sm text-center;
  color: #64748b;
  font-weight: 500;
}
</style>