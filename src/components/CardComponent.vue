<script setup lang="ts">

defineProps<{
  cardTitle?: string
}>()
</script>

<template>
  <div class="card">
    <p v-if="cardTitle" class="card-title">{{ cardTitle }}</p>
    <slot name="title" />
    <slot />
  </div>
</template>

<style scoped></style>