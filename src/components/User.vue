<template>
  <div class="users">
    <div v-if="profile" class="profile">
      <img :src="getImageUrl" :alt="name" />
    </div>
    <div class="profile-details">
      <div>
        <p>{{ name }}</p>
        <small>{{ points }}</small>
      </div>
      <p>{{ number }}</p>
    </div>
    <svg v-if="showMetric" :class="{ 'rotate-180': downward }" width="12" height="12" viewBox="0 0 12 12" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.16159 1.16797C5.53422 0.501302 6.46578 0.501302 6.83841 1.16797L11.8689 10.168C12.2415 10.8346 11.7757 11.668 11.0304 11.668H0.969553C0.224302 11.668 -0.241479 10.8346 0.131147 10.168L5.16159 1.16797Z"
        :fill="downward ? '#FF3E13' : '#1FE08F'" />
    </svg>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  profile: {
    type: Boolean,
    required: false,
    default: true
  },
  downward: {
    type: Boolean,
    default: false,
    required: false
  },
  showMetric: {
    type: Boolean,
    default: true,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  points: {
    type: String,
    required: false
  },
  imageSrc: {
    type: [String, URL],
    required: false,
    default: ''
  },
  number: {
    type: [Number, String],
    required: true
  }

})

const getImageUrl = new URL(props.imageSrc, import.meta.url).href
</script>

<style scoped></style>