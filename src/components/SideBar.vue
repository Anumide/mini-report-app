<template>
  <div class="sidebar-wrapper">
    <div>
      <div class="logo">
        <TeslaLogo />
      </div>
      <ul>
        <side-bar-link link="/" title="Reports">
          <ReportIcon />
        </side-bar-link>
        <side-bar-link link="/" title="Library">
          <LibraryIcon />
        </side-bar-link>
        <side-bar-link link="/people" title="People">
          <PeopleIcon />
        </side-bar-link>
        <side-bar-link link="/" title="Activities">
          <ActivitiesIcon />
        </side-bar-link>
      </ul>
      <div class="support">
        <p>Support</p>
        <ul>
          <side-bar-link link="/" title="Get Started">
            <BulbIcon />
          </side-bar-link>
          <side-bar-link link="/" title="Settings">
            <SettingsIcon />
          </side-bar-link>
        </ul>
      </div>
    </div>
    <div class="admin">
      <img src="../assets/images/Photo.png" alt="Thomas">
      <p>Sam Wheeler</p>
      <small>samwheeler@example.com</small>
    </div>
  </div>
</template>

<script setup lang="ts">
import ActivitiesIcon from './icons/ActivitiesIcon.vue';
import BulbIcon from './icons/BulbIcon.vue';
import LibraryIcon from './icons/LibraryIcon.vue';
import PeopleIcon from './icons/PeopleIcon.vue';
import ReportIcon from './icons/ReportIcon.vue';
import SettingsIcon from './icons/SettingsIcon.vue';
import TeslaLogo from './icons/TeslaLogo.vue';
import SideBarLink from './SideBarLink.vue';
</script>

<style scoped></style>