<template>
  <li class="sidebar-link">
    <RouterLink :to="link">
      <i v-if="icon" :class="icon" />
      <slot />
      <div class="sidebar-link-text">{{ title }}</div>
    </RouterLink>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  link: string;
  icon?: string;
  // active: boolean;
  title: string;
}>()
</script>

<style scoped></style>