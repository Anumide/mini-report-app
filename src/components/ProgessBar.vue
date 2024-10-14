<template>
  <div :class="['progress-bar', greenBg ? 'green' : 'orange']">
    <div class="bar" :style="{ width: width }"></div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  width: string | number,
  greenBg?: string
}>()
</script>
