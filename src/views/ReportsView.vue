<template>
  <main>
    <CompHeader view="Reports" />
    <div class="content">
      <div class="grid-content">
        <Metrics />
        <Activities />
        <WeekiestTopic />
        <StrongestTopic />
        <user-leaderboard />
        <groups-leaderboard />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import CompHeader from '@/components/CompHeader.vue';
import Metrics from '@/components/Metrics.vue';
import Activities from '@/components/Activities.vue';
import WeekiestTopic from '@/components/WeekiestTopic.vue';
import StrongestTopic from '@/components/StrongestTopic.vue';
import UserLeaderboard from '@/components/UserLeaderboard.vue';
import GroupsLeaderboard from '@/components/GroupsLeaderboard.vue';
</script>

<style scoped></style>