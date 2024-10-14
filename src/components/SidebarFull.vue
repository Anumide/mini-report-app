<script setup lang="ts">
import { ref } from 'vue';
import SideBar from './SideBar.vue';
import Drawer from 'primevue/drawer';
import Hamburger from './icons/HamburgerIcon.vue';
import CancelIcon from './icons/CancelIcon.vue';
const visible = ref(false)
</script>

<template>
  <div>
    <div class="menu">
      <SideBar />
    </div>
    <Hamburger class="hamburger" @click="visible = true" />
    <div class="mobile-menu">
      <Drawer v-model:visible="visible">
        <template #container="{ closeCallback }">
          <CancelIcon class="mobile-menu__cancel" @click="closeCallback" />
          <SideBar />
        </template>
      </Drawer>
    </div>
  </div>
</template>
<style scoped></style>