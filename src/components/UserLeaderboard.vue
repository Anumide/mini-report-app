<template>
  <div class="user-leaderboard">
    <CardComponent card-title="User Leaderboard">
      <User name="Jesse Thomas" :number="1" points="637 Points - 98% Correct" image-src="../assets/images/Thomas.png" />
      <User name="Thisal Mathiyazhagan" :number="2" points="637 Points - 89% Correct" :downward="true"
        image-src="../assets/images/Lady.png" />
      <User name="Helen Chuang" :number="3" points="637 Points - 88% Correct" image-src="../assets/images/Lady2.png" />
      <User name="Lura Silverman" :number="4" points="637 Points" image-src="../assets/images/Thomas2.png" />
    </CardComponent>
  </div>
</template>

<script setup lang="ts">
import CardComponent from '@/components/CardComponent.vue';
import User from './User.vue';
</script>
