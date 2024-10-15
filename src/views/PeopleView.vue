<template>
  <main>
    <CompHeader view="People" />
    <div class="content">
      <CardComponent card-title="List of people">
        <User name="Jesse Thomas" :showMetric="false" number="Admin" image-src="/public/images/Lady.png" />
        <User name="Thisal Mathiyazhagan" :showMetric="false" number="Admin" :downward="true"
          image-src="../assets/images/Thomas2.png" />
        <User name="Helen Chuang" :showMetric="false" number="Staff" image-src="../assets/images/Lady2.png" />
        <User name="Lura Silverman" :showMetric="false" number="Staff" image-src="../assets/images/Thomas.png" />
        <User name="Helen Vivien" :showMetric="false" number="Staff" image-src="../assets/images/Lady.png" />
        <User name="Hang Dan" :showMetric="false" number="Staff" image-src="../assets/images/Thomas.png" />
        <User name="Fowler Sing" :showMetric="false" number="Staff" image-src="../assets/images/Lady2.png" />
        <User name="Lulu King" :showMetric="false" number="Staff" image-src="../assets/images/Thomas.png" />
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