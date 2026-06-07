<template>
  <div :class="['video-widget', inline ? 'video-widget--inline' : 'video-widget--floating']">
    <div v-if="!expanded" class="video-widget__thumb" @click="expanded = true">
      <iframe
        :src="thumbSrc"
        width="100%"
        height="100%"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer"
        allowfullscreen
        style="border-radius: 12px; pointer-events: none"
      />
    </div>
    <div v-if="expanded" class="video-widget__expanded">
      <button class="video-widget__collapse" aria-label="Minimize video" @click="expanded = false">✕</button>
      <iframe
        :src="expandedSrc"
        width="100%"
        height="100%"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer"
        allowfullscreen
        style="border-radius: 12px"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ inline?: boolean }>()

const expanded = ref(false)
const thumbSrc = 'https://kinescope.io/embed/v4FeVNZwyDJ2Ph9p8tT7hA?autoplay=1&loop=1&muted=1&controls=0&playsinline=1'
const expandedSrc = 'https://kinescope.io/embed/v4FeVNZwyDJ2Ph9p8tT7hA?autoplay=1&muted=0'
</script>
