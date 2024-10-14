<template>
  <div class="weekest-topic">
    <CardComponent card-title="Strongest Topics">
      <div class="weekest-topic__content">
        <img src="../assets/images/covid-protocol.png" alt="Covid Protocols">
        <div>
          <p>Covid Protocols</p>
          <ProgressBar width="95%" green-bg="green" />
        </div>
        <p>95% <span>Correct</span></p>
      </div>
      <div class="weekest-topic__content">
        <img src="../assets/images/cyber-security.png" alt="Cyber Security Basics">
        <div>
          <p>Cyber Security Basics </p>
          <ProgressBar width="92%" green-bg="green" />
        </div>
        <p>92% <span>Correct</span></p>
      </div>
      <div class="weekest-topic__content">
        <img src="../assets/images/social-media.png" alt="Social Media Policies">
        <div>
          <p>Social Media Policies</p>
          <ProgressBar width="89%" green-bg="green" />
        </div>
        <p>89% <span>Correct</span></p>
      </div>
    </CardComponent>
  </div>
</template>

<script setup lang="ts">
import CardComponent from '@/components/CardComponent.vue';
import ProgressBar from '@/components/ProgessBar.vue'
</script>

<style scoped></style>