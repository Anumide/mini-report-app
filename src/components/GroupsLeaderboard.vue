<template>
  <div class="user-leaderboard">
    <CardComponent card-title="Groups Leaderboard">
      <User name="Houston Facility" :number="1" points="52 Points / User - 97% Correct" :profile="false" />
      <User name="Test Group" :number="2" points="52 Points / User - 95% Correct" :downward="true" :profile="false" />
      <User name="Sales Leadership" :number="3" points="52 Points / User -  87% Correct" :profile="false" />
      <User name="Northeast Region" :number="4" points="52 Points / Users" :profile="false" />
    </CardComponent>
  </div>
</template>

<script setup lang="ts">
import CardComponent from '@/components/CardComponent.vue';
import User from './User.vue';
</script>
