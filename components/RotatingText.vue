<template>
  <div class="rotating-text" :aria-label="text">
    <span
      v-for="(char, i) in chars"
      :key="i"
      :style="{ transform: `rotate(${i * anglePerChar}deg)` }"
    >{{ char }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ text: string }>()

const chars = computed(() => props.text.split(''))
const anglePerChar = computed(() => 360 / chars.value.length)
</script>
