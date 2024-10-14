<template>
  <div class="weekest-topic">
    <CardComponent card-title="Weakest Topics">
      <div class="weekest-topic__content">
        <img src="../assets/images/foodSafety.png" alt="Food Safety">
        <div>
          <p>Food Safety</p>
          <ProgressBar width="74%" />
        </div>
        <p>74% <span>Correct</span></p>
      </div>
      <div class="weekest-topic__content">
        <img src="../assets/images/compliance.png" alt="Compliance Basics Procedures">
        <div>
          <p>Compliance Basics Procedures </p>
          <ProgressBar width="52%" />
        </div>
        <p>52% <span>Correct</span></p>
      </div>
      <div class="weekest-topic__content">
        <img src="../assets/images/company-network.png" alt="Company Networking">
        <div>
          <p>Company Networking</p>
          <ProgressBar width="36%" />
        </div>
        <p>36% <span>Correct</span></p>
      </div>
    </CardComponent>
  </div>
</template>

<script setup lang="ts">
import CardComponent from '@/components/CardComponent.vue';
import ProgressBar from '@/components/ProgessBar.vue'
</script>

<style scoped></style>