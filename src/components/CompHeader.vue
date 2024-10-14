<script setup lang="ts">
import DownloadIcon from './icons/DownloadIcon.vue';

defineProps<{
  view: string,

}>()
</script>
<template>
  <header>
    <h1>{{ view }}</h1>
    <span>
      <DownloadIcon />
      Download
    </span>
  </header>
</template>

<style scoped></style>