<template>
  <div class="user-leaderboard">
    <CardComponent card-title="User Leaderboard">
      <User name="Jesse Thomas" :number="1" points="637 Points - 98% Correct">
        <img src="../assets/images/Thomas.png" alt="Jesse Thomas" />
      </User>
      <User name="Thisal Mathiyazhagan" :number="2" points="637 Points - 89% Correct" :downward="true">
        <img src="../assets/images/Lady.png" alt="Thisal Mathiyazhagan" />
      </User>
      <User name="Helen Chuang" :number="3" points="637 Points - 88% Correct">
        <img src="../assets/images/Lady2.png" alt="Helen Chuang" />
      </User>
      <User name="Lura Silverman" :number="4" points="637 Points">
        <img src="../assets/images/Thomas2.png" alt="Lura Silverman" />
      </User>
    </CardComponent>
  </div>
</template>

<script setup lang="ts">
import CardComponent from '@/components/CardComponent.vue';
import User from './User.vue';
</script>
