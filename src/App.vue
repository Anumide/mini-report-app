<script setup lang="ts">
import { RouterView } from 'vue-router'
import ReportsView from './views/ReportsView.vue';
import SidebarFull from './components/SidebarFull.vue';
</script>

<template>
  <div class="container">
    <SidebarFull />
    <RouterView />
  </div>
</template>

<style scoped></style>
