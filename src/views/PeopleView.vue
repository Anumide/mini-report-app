<template>
  <main>
    <CompHeader view="People" />
    <div class="content">
      <CardComponent card-title="List of people">
        <User name="Jesse Thomas" :showMetric="false" number="Admin">
          <img src="../assets/images/Lady.png" alt="Jesse Thomas" />
        </User>
        <User name="Thisal Mathiyazhagan" :showMetric="false" number="Admin" :downward="true">
          <img src="../assets/images/Thomas2.png" alt="Thisal Mathiyazhagan" />
        </User>
        <User name="Helen Chuang" :showMetric="false" number="Staff">
          <img src="../assets/images/Lady2.png" alt="Helen Chuang" />
        </User>
        <User name="Lura Silverman" :showMetric="false" number="Staff">
          <img src="../assets/images/Thomas.png" alt="Lura Silverman" />

        </User>
        <User name="Helen Vivien" :showMetric="false" number="Staff">
          <img src="../assets/images/Lady.png" alt=" Helen Vivien" />

        </User>
        <User name="Hang Dan" :showMetric="false" number="Staff">
          <img src="../assets/images/Thomas.png" alt="Hang Dan" />

        </User>
        <User name="Fowler Sing" :showMetric="false" number="Staff">
          <img src="../assets/images/Lady2.png" alt="Fowler Sing" />

        </User>
        <User name="Lulu King" :showMetric="false" number="Staff">
          <img src="../assets/images/Thomas.png" alt="Lulu King" />

        </User>
      </CardComponent>
    </div>
  </main>
</template>

<script setup lang="ts">
import CompHeader from '@/components/CompHeader.vue';
import CardComponent from '@/components/CardComponent.vue';
import User from '@/components/User.vue';
</script>

<style scoped></style>